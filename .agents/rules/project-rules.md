## Architecture & Tech Stack (Non-Negotiable)

- **Single HTML File (`index.html`):** The entire website (all pages/sections: Numerology, Astro Numerology, Vastu, Astro Vastu, Residential Vastu, UAE Geo Vastu, Commercial Vastu with Plots, Vastushlokaa's Profile, Blog, Contact, FAQs, Google Reviews) is built within a single, cohesive, ultra-luxury `index.html` file.
- **Embedded or linked Pure CSS (`css/style.css` or embedded `<style>` in `index.html`)**: Clean, pure CSS, no frameworks.
- **Minimal Vanilla JS (`script.js` or inline script)**: Handles interactive view switches / modal deep dives / smooth navigation tabs, interactive circular compass dial, accordion FAQs, and image sliders.
- **Zero external dependencies** (except Google Fonts).

## File Structure

```
/
├── index.html                     # Complete single-page luxury website
├── images/                        # All generated luxury imagery
│   ├── hero-home.jpg
│   ├── hero-numerology.jpg
│   ├── hero-vastu.jpg
│   ├── hero-astro.jpg
│   ├── hero-residential.jpg
│   ├── hero-geo-vastu.jpg
│   ├── hero-commercial.jpg
│   ├── hero-blog.jpg
│   ├── hero-contact.jpg
│   ├── hero-profile.jpg
│   └── mandala-divider.jpg
└── .agents/rules/project-rules.md # Rules & design specifications
```

- **One HTML file per page.** No multi-page tricks.
- **CSS split by concern**, not by page. Shared header/footer/nav styles live in `layout.css`.
- Keep total CSS under 4 files. No per-page CSS files.

## Sitemap & Navigation Hierarchy

```
Home
├── Numerology
│   ├── Numerology (sub-page)
│   └── Astro Numerology (sub-page)
├── Vastu
│   ├── Vastu (sub-page)
│   └── Astro Vastu (sub-page)
├── Residential Vastu
│   └── Geo Vastu (UAE only)
├── Commercial Vastu
│   └── Plots (section within Commercial Vastu page)
├── Blog
├── Contact Us
└── Vastushlokaa's Profile
```

- Navigation uses **dropdown menus** for Numerology and Vastu parent items.
- Residential Vastu links to Geo Vastu with a visible "(UAE Only)" badge.
- Commercial Vastu page includes a **Plots** section/card — not a separate page.
- Blog link in main nav.
- Profile page accessible from nav or footer ("About Vastushlokaa").

## Color Theme & Design Tokens

### Primary Palette

| Token                | Value         | Usage                                    |
|----------------------|---------------|------------------------------------------|
| `--color-gold`       | `#C8A951`     | Primary accent, headings, CTA borders    |
| `--color-gold-light` | `#F5E6A3`     | Pale yellow backgrounds, highlights      |
| `--color-gold-bg`    | `#FFF9E6`     | Section backgrounds (warm)               |
| `--color-blue`       | `#7ABADC`     | Secondary accent, links, info sections   |
| `--color-blue-light` | `#E8F4FA`     | Light blue section backgrounds           |
| `--color-pink`       | `#E8A0BF`     | Tertiary accent, decorative elements     |
| `--color-pink-light` | `#FFF0F5`     | Light pink section backgrounds           |
| `--color-text`       | `#2D2A26`     | Body text (warm dark brown, not black)   |
| `--color-text-muted` | `#6B6560`     | Secondary text, captions                 |
| `--color-bg`         | `#FFFDF7`     | Page background (warm off-white)         |
| `--color-white`      | `#FFFFFF`     | Cards, overlays                          |
| `--color-border`     | `#E8E2D6`     | Subtle borders, dividers                 |

### Typography

- **Headings:** `'Playfair Display', Georgia, serif` — classic, editorial feel.
- **Body:** `'Inter', 'Segoe UI', sans-serif` — clean, modern readability.
- **Accent/Quotes:** `'Cormorant Garamond', serif` — for testimonials, ancient quotes.
- Load via Google Fonts: `Playfair Display:400,700` + `Inter:400,500,600` + `Cormorant Garamond:400i,600i`.

### Spacing Scale (use consistently)

```css
--space-xs:  0.25rem;   /*  4px */
--space-sm:  0.5rem;    /*  8px */
--space-md:  1rem;      /* 16px */
--space-lg:  1.5rem;    /* 24px */
--space-xl:  2rem;      /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
```

### Border Radius

```css
--radius-sm:  4px;   /* buttons, tags */
--radius-md:  8px;   /* cards, inputs */
--radius-lg: 16px;   /* modals, hero cards */
--radius-xl: 24px;   /* decorative elements */
```

## Design Aesthetic — "Classic Ancient + Modern Clean"

### Mandatory Visual Language

1. **Ancient motifs as decorative accents only** — subtle mandala patterns, lotus borders, yantra-inspired dividers. Use CSS `border-image`, SVG backgrounds, or small decorative images. Never overwhelming.
2. **Clean grid layouts** — generous whitespace, card-based content sections, clear visual hierarchy.
3. **Gold as the power color** — gold accents on thin underlines, CTA backgrounds, section dividers. Keep it restrained.
4. **Alternating warm/cool section backgrounds** — rotate between `--color-gold-bg`, `--color-blue-light`, `--color-pink-light`, and `--color-white` for visual rhythm.
5. **Hero sections** on every page with a large heading, supporting text, and a subtle background pattern/gradient.
6. **No generic stock-photo look.** Use generated or curated images that feel spiritual/architectural.
7. **Micro-transitions only** — subtle opacity/color shifts on hover (`transition: all 0.2s ease`). No scale transforms, no lift effects, no dramatic shadow changes.

### Premium Minimalism Principles

- **Whitespace is the design.** Let content breathe. Generous padding, wide margins. The emptiness is intentional.
- **Typography does the heavy lifting.** Large serif headings, refined spacing, elegant type hierarchy — not icons or decorative borders.
- **Photography-driven.** Full-bleed or large-format images carry the visual weight. Text overlays use semi-transparent gradients, never solid color blocks.
- **Flat & borderless.** Cards use background color contrast or very subtle `1px solid var(--color-border)` at most. No colored left-borders, no thick outlines.
- **No visible shadows on cards.** Use background color differentiation to create depth. `box-shadow` only on modals/dropdowns.
- **Color through imagery, not UI chrome.** The images bring the color. UI elements stay neutral — warm whites, soft grays, gold text accents.

### UI Components (reuse across pages)

- **Section divider:** A thin gold `<hr>` (1px) or a small centered mandala SVG. No thick bars.
- **Service card:** Clean white/off-white card. Full-width image at top, title in Playfair Display, short description, minimal "Learn More →" text link (no button). No border, no shadow, no left-color-stripe.
- **Testimonial card:** Soft tinted background, large opening quotation mark in Playfair Display (typographic, not an icon), review text in Cormorant Garamond italic, reviewer name below.
- **CTA button:** Solid gold background, dark text, no shadow, no border. Hover: slight opacity change only (`opacity: 0.9`). Pill shape (`border-radius: 100px`) or minimal rounded (`border-radius: 4px`).
- **FAQ accordion:** Pure CSS `<details>/<summary>`, clean typography. Gold accent on the open state summary text. No icons, no +/- symbols — use CSS `::marker` or a subtle typographic caret.
- **Navigation links:** Text only, no icon prefixes. Active page indicated by a thin gold underline offset, not background color.

## Content Sections Per Page

### Home (`index.html`)
- Hero with tagline about Home Energy → Success & Growth
- "Why Vastu Matters" brief section
- Services overview cards (Numerology, Vastu, Residential, Commercial)
- "How Vastushlokaa Can Help" section with portrait
- Google Reviews / Testimonials carousel
- Common Problems & Quick FAQ
- CTA to Contact

### Numerology / Astro Numerology
- Hero explaining the service
- How it works (step-by-step or visual flow)
- Benefits
- CTA to book consultation

### Vastu / Astro Vastu
- Hero explaining service
- Importance of Vastu for Homes & Commercial spaces
- Process / methodology
- CTA

### Residential Vastu
- Service details
- Link/card to **Geo Vastu (UAE Only)** with a badge
- CTA

### Geo Vastu (`geo-vastu.html`)
- Clearly marked **"Available in UAE Only"**
- What is Geo Vastu
- How it differs from standard Vastu
- CTA

### Commercial Vastu
- Service details
- **Plots** as a highlighted sub-section or card within the page
- Office / Factory / Shop categories
- CTA

### Contact (`contact.html`)
- Contact form (Name, Email, Phone, Service dropdown, Message)
- Google Maps embed placeholder
- Phone, Email, Address details
- **Instagram link** prominently displayed with icon

### Profile (`profile.html`)
- Vastushlokaa's biography
- Credentials, experience, philosophy
- Photo gallery or timeline
- Testimonials specific to Vastushlokaa

### Blog (`blog.html`)
- Grid/list of blog post cards
- Each card: thumbnail, title, date, excerpt, "Read More"
- Blog post template (`blog-post.html`) for individual articles

## Social & External Integrations

- **Instagram:** Link in footer (all pages) + Contact page. Use an SVG Instagram icon.
- **Google Reviews:** Embed or display as styled testimonial cards on Home page. Use a "See more on Google" link.
- No other social platforms unless client specifies later.

## SEO Rules (every page)

- Unique `<title>` and `<meta name="description">` per page.
- Single `<h1>` per page, keyword-rich.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- All images have descriptive `alt` text.
- Internal linking between related pages.
- Add `<meta name="robots" content="index, follow">` on all public pages.

## Accessibility

- Sufficient color contrast (WCAG AA minimum).
- Skip-to-content link.
- Keyboard-navigable dropdown menus.
- Focus-visible styles on interactive elements.
- `aria-label` on icon-only links (Instagram, etc.).

## Responsive Design

- Mobile-first CSS with `min-width` breakpoints:
  - `--bp-sm: 576px`
  - `--bp-md: 768px`
  - `--bp-lg: 1024px`
  - `--bp-xl: 1280px`
- Hamburger menu on mobile (minimal JS toggle).
- Stack cards vertically on mobile, 2-col on tablet, 3-col on desktop.
- Font sizes scale down on mobile. Hero text capped with `clamp()`.

## Performance

- Images: WebP format, lazy-loaded (`loading="lazy"`).
- CSS: No unused rules. Keep total CSS < 50KB.
- Fonts: Use `font-display: swap` in `@font-face` or Google Fonts `&display=swap`.
- No render-blocking JS.

## Naming Conventions

- HTML files: `kebab-case.html`
- CSS classes: `kebab-case` (e.g., `.service-card`, `.hero-section`, `.nav-dropdown`)
- IDs: `kebab-case`, unique per page (e.g., `#contact-form`, `#faq-section`)
- Images: `kebab-case` descriptive names (e.g., `Vastushlokaa-portrait.webp`, `vastu-compass.webp`)

## What NOT To Do

### Technical
- ❌ No JavaScript frameworks (React, Vue, etc.)
- ❌ No CSS frameworks (Tailwind, Bootstrap)
- ❌ No build tools (Webpack, Vite, PostCSS)
- ❌ No placeholder images — generate real assets with `generate_image`
- ❌ No `!important` unless overriding third-party embeds
- ❌ No inline styles
- ❌ No `<br>` for spacing — use CSS margins/padding
- ❌ No pixel-based font sizes — use `rem`
- ❌ No generic "Lorem ipsum" content — write real copy aligned to client's messaging

### Design Anti-Patterns (STRICTLY FORBIDDEN)
- ❌ **No icon libraries.** No Font Awesome, no Heroicons, no Lucide, no emoji-as-icons. Use typography, imagery, and whitespace instead.
- ❌ **No left-border colored cards.** No `border-left: 4px solid gold` pattern. It looks like a dashboard, not a premium site.
- ❌ **No exaggerated hover effects.** No `transform: scale(1.05)`, no `translateY(-8px)`, no shadow-grow-on-hover. Hover = subtle color/opacity shift only.
- ❌ **No heavy box-shadows on cards.** No `box-shadow: 0 4px 20px rgba(...)` on content cards. Reserve shadows for dropdowns/modals only.
- ❌ **No thick borders.** Max `1px solid` on any element. No `2px`, no `3px`, no colored borders on cards.
- ❌ **No gradient backgrounds on cards/buttons.** Solid flat colors only. Gradients allowed only on hero overlays over images.
- ❌ **No rounded-pill everything.** Use `border-radius: 4px` on cards. Pill shape (`100px`) only on primary CTA buttons.
- ❌ **No emoji or unicode symbols** as visual elements.
- ❌ **No color blocks/badges as section markers.** Use typography weight/size and whitespace to create hierarchy.
- ❌ **No busy backgrounds.** No repeating tile patterns. Backgrounds are solid colors or a single large subtle image.

### The Premium Test
Before committing any UI: **"Would this look at home on the Aesop, Amanresorts, or Cerévo website?"** If the answer is no — it's too busy, too colorful, or too "template-y" — strip it back.
