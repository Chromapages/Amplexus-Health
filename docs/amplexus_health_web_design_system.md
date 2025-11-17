# Amplexus Health – Design System

Scope: Visual and interaction standards for the Amplexus Health marketing + shop experience, built on Next.js, Tailwind CSS, and Shopify. This system is the single source of truth for UI decisions across pages and components.

---

## 1. Brand Foundations

### 1.1 Brand Attributes

Amplexus Health should feel:

- Calm and grounded (never frantic or overly clinical)
- Professional and trustworthy
- Trauma‑informed and non‑judgmental
- Clear and simple, with low cognitive load

### 1.2 Design Principles

- Care first, commerce second – service and safety messaging always take priority over merch.
- Clarity over cleverness – plain language and obvious paths over playful but confusing UI.
- Accessible by default – WCAG 2.1/2.2 AA is a baseline, not a stretch goal.
- Light, breathable layouts – aggression and clutter are avoided, especially in high‑stress contexts like mental health.

---

## 2. Color System

Core palette is built for high contrast, soft mood, and a clear hierarchy between backgrounds, text, and accent elements.

### 2.1 Palette

**Primary (Brand Ink)**  
- Name: Ink Navy  
- Hex: `#12293D`  
- Usage: Body text on light backgrounds, key headings, primary logo color, high‑confidence CTAs.

**Accent (Calm Teal)**  
- Name: Hummingbird Teal  
- Hex: `#ABD6E0`  
- Usage: Secondary buttons, badges, subtle backgrounds, chips, link accents.

**Surface (Warm Light)**  
- Name: Soft Shell  
- Hex: `#F6F3EE`  
- Usage: Page background washes, panels behind key sections (hero, value props, FAQ).

**Dark Background**  
- Name: Deep Night  
- Hex: `#08141F`  
- Usage: Footer background, dark hero variants, strong contrast sections.

**Support Neutrals**  
- Slate 900: `#0F172A` – alternative for darkest text when needed.  
- Slate 600: `#475569` – secondary text, meta info.  
- Slate 200: `#E5E7EB` – borders, separators, card outlines.

**Feedback Colors**  
- Success Green: `#2E7D32` – success messages, non‑critical confirmations.  
- Error Red: `#C62828` – form errors and critical alerts.  
- Warning Amber: `#F6A623` – gentle warnings or information notices.

### 2.2 Contrast & Usage Rules

- All body text must meet at least 4.5:1 contrast against its background.
- Large text (18px+ or 14px bold) must meet at least 3:1 contrast.
- Primary buttons must always have dark text on light backgrounds or light text on dark backgrounds with AA contrast in all states (default, hover, focus, pressed, disabled).
- Focus rings must meet at least 3:1 contrast against both the component and the surrounding background. Example setting (Tailwind): `focus:ring-sky-500 focus:ring-2 focus:ring-offset-2`.

---

## 3. Typography

### 3.1 Typefaces

- Headline: **DM Serif Text**  
  - Use for H1–H2 only, short impactful lines, not long paragraphs.
- Body: **Inter**  
  - Use for H3–H6, body copy, captions, labels, buttons, and UI elements.

### 3.2 Scale & Styles

Suggested base scale (can be implemented as Tailwind utilities or CSS variables):

- H1: 32–40px, DM Serif Text, regular, tight line height (1.1–1.2)
- H2: 28–32px, DM Serif Text, regular, line height ~1.2
- H3: 22–24px, Inter, semibold, line height ~1.3
- H4: 18–20px, Inter, medium, line height ~1.4
- Body: 16px, Inter, regular, line height 1.5–1.6
- Small: 14px, Inter, regular, line height 1.5

### 3.3 Typographic Rules

- One H1 per page, matching the main on‑screen page title.
- Avoid all caps for large blocks of text; reserve for tiny labels or tags.
- Keep line length in the 60–80 character range for body text where possible.
- Use weight (medium/semibold) instead of color alone to indicate emphasis.

---

## 4. Spacing, Layout, and Grids

### 4.1 Spacing Scale

Base spacing unit: 4px. Common increments:

- 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64px

Patterns:

- Section vertical padding: 64px (mobile) to 96px (desktop).  
- Card padding: 16–24px.  
- Gap between form fields: 16–24px.

### 4.2 Layout

- Max content width: 1024–1200px for main text content.
- Use a simple 12‑column grid on desktop; stack sections into single column on small screens.
- Use generous white space between major sections to reduce cognitive load.

### 4.3 Responsiveness

- Mobile‑first design. Layouts must work on 320px wide devices without horizontal scroll.
- Primary CTAs and form actions must remain visible and reachable on phone screens without excessive scrolling.

---

## 5. Core Components

This section defines visual and interaction rules for core reusable components built as React/Tailwind components.

### 5.1 Buttons

Variants:

- Primary: Solid, strong contrast.
  - Background: Ink Navy (`#12293D`).
  - Text: White.
  - Hover: slightly lighter navy or subtle elevation.
  - Active: small scale down (~0.97) and darker shade.
- Secondary: Outline or subtle surface.
  - Background: transparent or Soft Shell.
  - Border: Ink Navy.
  - Text: Ink Navy.
- Tertiary: Text button.
  - No border, text only with underline on hover.

Rules:

- Minimum tap target height: 44px.  
- Horizontal padding: at least 16px on each side.  
- Focus state: clearly visible outline (for example, 2px ring with offset).  
- Disabled state: reduced opacity and removed hover/active scale.

### 5.2 Inputs & Form Fields

- Shape: Rounded corners, subtle border.
- Default state: light background, 1px border in Slate 300.
- Focus state: border and ring in accent (for example, `ring-sky-500`).
- Error state: border and helper text in Error Red.
- Labels always visible (no placeholder‑only labels).
- Helper text used for hints and error messages; errors appear directly beneath the field.

### 5.3 Cards

- Background: White or Soft Shell.
- Border: subtle (Slate 200) or soft shadow for elevation.
- Padding: 16–24px.
- Rounded corners: 12–16px.
- Optional header area for titles, optional footer for CTAs.

### 5.4 Navigation

Header navigation:

- Layout: logo left, primary nav center or right, CTA button on the right when space allows.
- Links: Inter, medium weight, 14–16px.
- Active link: distinct text color and underline or indicator bar.
- Mobile: hamburger menu with full‑screen or panel overlay; all links at least 44px tall.

Footer navigation:

- Dark background (Deep Night) with light text.
- Columns for Practice, Shop, Policies, Contact.
- Crisis disclaimer and "not a crisis service" language always visible.

---

## 6. Accessibility Rules (Design‑Level)

- All pages use proper landmarks: header, nav, main, footer.
- Include a "Skip to main content" link as the first focusable element.
- Ensure all interactive elements (links, buttons, controls) can be reached and activated by keyboard.
- Maintain sufficient spacing between touch targets; avoid stacking tiny links.
- Never rely on color alone for conveying meaning (state, errors, required fields, etc.).
- All informative images must have meaningful alt text; decorative images should be ignored by screen readers.
- Contact and relevant pages must include clear non‑emergency disclaimers and pointers to crisis resources.

---

## 7. Motion & Micro‑Interactions

- Motion should be subtle, with short durations (150–250ms) and easing that feels natural.
- Buttons may use a small scale effect on press and gentle color shifts on hover.
- Use motion primarily to:
  - Indicate state changes (open/close, success, error).
  - Guide attention to key CTAs or feedback areas.
- Respect `prefers-reduced-motion` and disable non‑essential animations when it is set.

---

## 8. Page‑Level Patterns

### 8.1 Home

- Hero: single strong H1, short supporting text, and one primary + one secondary CTA.
- Services overview: 3–4 cards with concise descriptions and links to the Services page.
- Self‑care highlight: small preview of the shop with 2–4 items.
- FAQ slice: 3–5 common questions rendered with accessible accordions.
- Final CTA: clear invitation to request an appointment or learn more.

### 8.2 Services

- Clear, scannable sections for each service type.
- Sidebars or inline callouts for insurance/payment information.
- CTA block near the end pointing to Contact.

### 8.3 Shop & Product

- Shop grid: consistent card layout, clear categories/filters, visible pricing.
- Product page: hero image, clear title, price, key bullets, and Buy Button area.
- Short disclaimer that products support well‑being but do not replace therapy.

---

## 9. Implementation Notes (Tailwind)

- Define brand colors in Tailwind config for consistent use (`ink`, `teal`, `shell`, `night`).
- Use component‑driven Tailwind classes instead of one‑off styles scattered across pages.
- Extract complex patterns into reusable components (Section, Container, Card, Button, FormField, etc.) and keep pages mostly declarative.

---

End of Amplexus Health Design System

