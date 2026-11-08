# Design: Signal

A dark, editorial product-engineering studio. Near-black ground, warm off-white type, one violet and one teal used as signal rather than paint, and light "paper" sections for rhythm. Replaces the earlier white/black/blue "Editorial" direction (2026-11-08).

## Restraint rules (2026-11-08 de-template pass)

The 3D hero is the one bold moment. Everything after it stays quiet. Do not reintroduce:

- Labels above headings (eyebrows), all-caps labels, or "A · B · C" strings. Write sentences.
- Gradient or colour on one phrase of a headline.
- 01/02/03 numbering, except for real sequences (the delivery phases, the WhatsApp workflow stages).
- Glow washes, perspective grids, cursor spotlights, pill chips, or icon tiles as decoration.
- Arrows appended to buttons and links (the external ↗ on off-site links is kept, because it says something).
- Fade-up reveals on every block. Motion is reserved for the hero entrance, the timeline progress, the service illustrations (paused off screen) and the proof count-up.
- JetBrains Mono for anything that isn't technical (URLs, terminal text, stack names).

Radius hierarchy: 14px for large surfaces, 8px for controls. Buttons are not pills.

## Tokens (`src/index.css`)

| Token | Value | Use |
|---|---|---|
| `--bg` / `--bg-2` / `--bg-3` | `#090A0F` / `#171923` / `#1F2230` | Ground, panels, raised surfaces |
| `--text` / `--muted` / `--faint` | `#F4F2EE` / `#A1A1AA` / `#6B6B76` | Type |
| `--violet` / `--violet-hi` | `#8B5CF6` / `#A78BFA` | Accent; `-hi` for small text on dark |
| `--teal` | `#43E5C0` | Secondary accent, status dots, "what we build" labels |
| `--paper` / `--ink` | `#F4F2EE` / `#090A0F` | Light sections (`.x-paper` remaps tokens) |

Gradients only on headline accents (`.x-grad`, violet→teal) and ambient glows.

## Type

Space Grotesk (display, 600, tracking −0.04em), Inter (body), JetBrains Mono (labels, 12px uppercase). All self-hosted via `@fontsource-variable`.

## Structure

- Content lives in `src/data/site.ts`. Only verified facts; see the comment at the top of that file.
- Home sections: `src/components/sections/*` (Services, ProductsShowcase, ApproachTimeline, WhyUs, CaseStudies, Industries, TechStack, ContactSection, PageHero). Interior pages compose the same sections.
- Hero: `src/components/hero/` — lazy-loaded React Three Fiber scene (faceted shader core, node network with data-pulse shader, dust). Static SVG fallback without WebGL; frozen frame under reduced motion; paused off screen.

## Motion

- `src/lib/motion.ts`: `useScrollReveal` (IntersectionObserver + GSAP on `[data-reveal]`), `useMagnetic`, `spotlight`, `useCountUp`, `useInViewAttr` (CSS loops pause off screen via `data-inview`).
- GSAP ScrollTrigger for scrubbed 3D tilt-ins (products, tech stack) and the timeline. Lenis for smooth scroll and anchors (disabled under reduced motion).
- Everything respects `prefers-reduced-motion`; illustrations render in their finished state.

## Image provenance

`src/assets/products/briefguard.webp` is a screenshot of https://briefguard.ascendons.in (captured 2026-11-06). `dpp.webp` and `impakt.webp` are hero screenshots of https://dpp.ascendons.in and https://impakt.ascendons.in, captured in Chrome on 2026-11-08 and cropped to the hero. Recapture them when those sites change. The CRM interface on the site is an illustrative mockup, labelled as such. `public/og-cover.png` is generated (1200×630).
