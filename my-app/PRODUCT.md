# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed):

- **Founders and new ventures** who have an idea and need a working product that real users can sign up for, quickly and at a known price.
- **Established businesses** that need CRMs, admin systems, internal tools and automation built around how their teams already work, and connected to the systems they have.

Secondary: buyers evaluating Ascendons' own products (BriefGuard, Ascendons CRM, Ascendons DPP), who are sent on to each product's own site.

## Product Purpose

Ascendons is a product engineering studio in Surat, Gujarat, India. The marketing site explains what Ascendons builds, for whom and how, and turns visitors into project enquiries (the lead form posts to a Google Apps Script endpoint via `src/utils/submitLead.ts`). Success is a qualified enquiry: a founder scoping an MVP or a business asking about a system.

## Positioning

A studio that also builds and runs its own products. The same team that does client work maintains BriefGuard (legal operating system for India), Ascendons CRM and Ascendons DPP (Digital Product Passports), so client builds carry real production experience with onboarding, reliability and support. MVPs ship in 4–6 weeks at a fixed scope and price, with a weekly demo on a live staging link.

## Operating Context

- MVP engagement: Scope (week 1, written scope, timeline, fixed price) → Design (week 1–2) → Build (week 2–5, weekly sprints and demos) → Launch (week 5–6, monitoring, analytics, docs, post-launch support).
- Engagement models: MVP Sprint, Dedicated Team (monthly), Consulting.
- Industries named on the site: startups, enterprises, legal, nonprofits, e-commerce and retail, healthcare and services, logistics.
- Stack named on the site: React, Node.js, PostgreSQL, MongoDB, Redis, AWS, Google Cloud, Docker, Kubernetes, WhatsApp Cloud API, Razorpay, Stripe.

## Capabilities and Constraints

- React 19 + Vite + Tailwind v4 SPA, deployed to GitHub Pages; `404.html` is a copy of `index.html` so deep links load the SPA.
- Routes: `/`, `/about`, `/services`, `/contact`, `/our-work`, `/products`, `/solutions/whatsapp-business-automation`, `/solutions/fundraising-workflow-platforms`, `/privacy`, plus internal tools `/qr` and `/balancesheet`.
- Google Analytics loads with consent denied until the cookie banner is accepted. That behaviour must stay.
- `src/pages/Home.css` is shared by most pages; a redesign of one page must not break the others.
- Particle backgrounds (jparticles, tsparticles) are being removed (user decision, 2026-11-06).

## Brand Commitments

- Name: Ascendons. Logo: `src/ascendons.png` / `public/ascendons.png`.
- Voice: plain, specific and factual. Claims are stated as concrete facts (weeks, counts, named features), not superlatives.

## Evidence on Hand

- Live products: BriefGuard (https://briefguard.ascendons.in), Ascendons DPP (https://dpp.ascendons.in), Ascendons CRM (`/products`).
- Stats already published: a nonprofit platform serving 300+ partner organisations; WhatsApp automation handling 5,000+ conversations a day.
- Not approved for use: client logos and testimonials (commented out in `Home.tsx`). No product screenshots supplied yet. Do not invent clients, quotes, logos, metrics or pricing.

## Product Principles

1. Both audiences find their path within one screen: launch an MVP, or build business systems.
2. Show, don't claim: lead with the products the team runs and the concrete process, not adjectives.
3. Every page ends at a real way to start: the enquiry form or a direct contact.
4. Specifics over superlatives, in copy and in design.
