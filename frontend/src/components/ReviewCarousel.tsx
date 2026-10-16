import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./ReviewCarousel.css";

const sampleReviews = [
  {
    subject: "A more thoughtful starting point",
    quote: "The conversation helped us think about our floor plan, priorities, and everyday routines together.",
    context: "Residential consultation"
  },
  {
    subject: "Clearer questions for our space",
    quote: "We appreciated having room to discuss practical needs alongside traditional Vastu ideas.",
    context: "Property planning"
  },
  {
    subject: "A personal conversation",
    quote: "The guidance gave us new perspectives to consider without losing sight of how we actually use our home.",
    context: "Existing home review"
  }
] as const;

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % sampleReviews.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((index) => (index + direction + sampleReviews.length) % sampleReviews.length);

  return (
    <section
      className="review-carousel"
      aria-labelledby="contact-reviews-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
    >
      <div className="review-carousel-shell">
        <div className="review-carousel-heading">
          <p className="review-carousel-eyebrow">Consultation reflections</p>
          <h2 id="contact-reviews-title">A conversation<br /><em>worth having.</em></h2>
          <p>These sample review cards show how client feedback will appear. Replace them with approved testimonials before publishing.</p>
        </div>
        <div className="review-carousel-panel">
          <span className="review-carousel-mark" aria-hidden="true">“</span>
          <div className="review-carousel-slide" key={active} aria-live="polite">
            <p className="review-carousel-subject">{sampleReviews[active].subject}</p>
            <blockquote>{sampleReviews[active].quote}</blockquote>
            <p className="review-carousel-context">Sample review · {sampleReviews[active].context}</p>
          </div>
          <div className="review-carousel-controls">
            <span aria-label={`Review ${active + 1} of ${sampleReviews.length}`}>{String(active + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {String(sampleReviews.length).padStart(2, "0")}</span>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous review"><ArrowLeft size={20} /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next review"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
