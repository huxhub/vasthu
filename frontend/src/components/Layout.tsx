import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Lenis from "lenis";
import "../reference-design.css";

export default function Layout() {
  // Lenis smooth scroll — init once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Reveal-on-scroll observer — re-run on every route change
  const location = useLocation();
  useEffect(() => {
    let textObserver: IntersectionObserver | null = null;
    let imageObserver: IntersectionObserver | null = null;

    const setupObserver = () => {
      // 1. Text elements
      const textEls = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-revealed):not(.image-reveal-wipe), .reveal-scale:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed)"
      );

      // 2. Content images, excluding priority hero media that must never flash blank.
      const imgEls = document.querySelectorAll<HTMLImageElement>(
        "main img:not(.no-reveal):not([fetchpriority='high']):not(.navbar img):not(.showcase-slide-card img):not(.is-revealed)"
      );
      const wipeEls = document.querySelectorAll<HTMLElement>(
        ".image-reveal-wipe:not(.is-revealed)"
      );

      imgEls.forEach((img) => {
        img.classList.add("reveal-image");
      });

      const revealIfInView = (el: Element) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
          el.classList.add("is-revealed");
          return true;
        }
        return false;
      };

      if (!("IntersectionObserver" in window)) {
        textEls.forEach((el) => el.classList.add("is-revealed"));
        imgEls.forEach((el) => el.classList.add("is-revealed"));
        wipeEls.forEach((el) => el.classList.add("is-revealed"));
        return;
      }

      // Check immediately for items already in active viewport on page entrance
      imgEls.forEach((img) => revealIfInView(img));
      wipeEls.forEach((wipe) => revealIfInView(wipe));
      textEls.forEach((txt) => revealIfInView(txt));

      // Standard text observer
      const pendingText = Array.from(textEls).filter((el) => !el.classList.contains("is-revealed"));
      if (pendingText.length) {
        if (!textObserver) {
          textObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-revealed");
                  textObserver?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
          );
        }
        pendingText.forEach((el) => textObserver?.observe(el));
      }

      // Section Image Observer for all images across all pages
      const pendingImages = [...Array.from(imgEls), ...Array.from(wipeEls)].filter(
        (el) => !el.classList.contains("is-revealed")
      );

      if (pendingImages.length) {
        if (!imageObserver) {
          imageObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-revealed");
                  imageObserver?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
          );
        }
        pendingImages.forEach((el) => imageObserver?.observe(el));
      }
    };

    // Scroll listener guarantees fast scrolling or bottom-of-page images never get stuck
    const handleScroll = () => {
      const pending = document.querySelectorAll<HTMLElement>(
        "main img.reveal-image:not(.is-revealed), .image-reveal-wipe:not(.is-revealed)"
      );
      if (!pending.length) return;
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
          el.classList.add("is-revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timer1 = setTimeout(setupObserver, 50);
    const timer2 = setTimeout(setupObserver, 250);
    const timer3 = setTimeout(setupObserver, 650);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      textObserver?.disconnect();
      imageObserver?.disconnect();
    };
  }, [location.pathname]);

  // Global editorial parallax. Uses the independent CSS `translate` property,
  // so existing transform-based reveals, hover states, and carousel motion compose safely.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame = 0;
    let needsMeasure = true;
    let media: HTMLElement[] = [];
    let content: HTMLElement[] = [];
    const targets = new WeakMap<HTMLElement, number>();
    const positions = new WeakMap<HTMLElement, number>();

    const collectTargets = () => {
      media = Array.from(document.querySelectorAll<HTMLElement>(
        "main section img:not(.no-parallax), main .home-mandala, main .cosmos-orbital-stage"
      ));
      content = Array.from(document.querySelectorAll<HTMLElement>(
        "main section h1, main section h2, main section .section-kicker, main section .home-kicker"
      ));

      media.forEach((element) => {
        element.classList.add("parallax-media");
      });
      content.forEach((element) => {
        element.classList.add("parallax-content");
      });
    };

    const measure = () => {
      const viewportHeight = window.innerHeight;
      const isCompact = window.innerWidth < 760;

      const move = (element: HTMLElement, strength: number) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;
        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const shift = Math.max(-strength, Math.min(strength, progress * strength));
        targets.set(element, shift);
        if (!positions.has(element)) positions.set(element, shift);
      };

      media.forEach((element, index) => move(element, isCompact ? 15 : 38 + (index % 3) * 6));
      content.forEach((element, index) => move(element, isCompact ? 5 : 12 + (index % 3) * 2));
    };

    const animate = () => {
      if (needsMeasure) {
        measure();
        needsMeasure = false;
      }

      let unsettled = false;
      const render = (element: HTMLElement, easing: number) => {
        const target = targets.get(element) ?? 0;
        const current = positions.get(element) ?? target;
        const next = current + (target - current) * easing;
        if (Math.abs(target - next) > 0.05) unsettled = true;
        positions.set(element, next);
        element.style.setProperty("--parallax-y", `${next.toFixed(2)}px`);
      };

      // Images lead; typography follows with a softer, slower response.
      media.forEach((element) => render(element, 0.14));
      content.forEach((element) => render(element, 0.075));

      frame = unsettled || needsMeasure ? window.requestAnimationFrame(animate) : 0;
    };

    const requestUpdate = () => {
      needsMeasure = true;
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    const setupTimer = window.setTimeout(() => {
      collectTargets();
      requestUpdate();
    }, 90);
    const refreshTimer = window.setTimeout(() => {
      collectTargets();
      requestUpdate();
    }, 420);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.clearTimeout(setupTimer);
      window.clearTimeout(refreshTimer);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      [...media, ...content].forEach((element) => {
        element.classList.remove("parallax-media", "parallax-content");
        element.style.removeProperty("--parallax-y");
      });
    };
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
