# Wireframes – Home, Services, Shop

> **Scope:** Low-fidelity, text-based wireframes for the three core pages: **Home**, **Services**, and **Shop**. These align with the PRD, Sitemap, Design System, and Component Hierarchy.
>
> These are not pixel-perfect; they define structure, section order, and content hierarchy.

---

## 1. Home Page Wireframe (`/`)

**Purpose:** Introduce Amplexus Health, reassure new visitors, and route them to **Request Appointment** or **Shop Self-Care**.

### 1.1 Layout Overview (Top → Bottom)

```text
[ Global HeaderNav ]
- Left: BrandMark (Logo)
- Center: Nav links (Home, Services, Our Team, Shop, Resources, Contact)
- Right: Primary Button (Request Appointment)

-------------------------------------------------
[ HeroSection ] (Two-column on desktop, stacked on mobile)

  LEFT (copy)
    - Eyebrow: "Mental health care & self-care, together."
    - H1 (serif): "Heal within, with support that meets you where you are."
    - Paragraph: 2–3 lines explaining Amplexus as a group practice plus self-care tools.
    - Button (primary): "Request Appointment"
    - Button (secondary, outline): "Shop Self-Care"

  RIGHT (visual)
    - Soft photo/illustration (subtle blues) of calm setting / person journaling.

-------------------------------------------------
[ Services Overview Section ]

  Container width: max-w-5xl, centered.

  - Section heading: "How we can support you"
  - Short lead-in text.

  [ ServicesGrid ]
  - 2x2 grid of ServiceCard components (stacked on mobile):
    - Individual Therapy
    - Couples & Family
    - Telehealth / Virtual Sessions
    - (Optional) Group / Other

  - Inline link or button under grid: "View all services" → `/services`

-------------------------------------------------
[ ShopHighlight Section ]

  Background: `brand-neutral` (light blue/gray) band.

  - Section heading: "Self-care tools between sessions"
  - Subtext: 1–2 lines framing merch as supportive tools.

  [ ProductTile Grid ] (3–4 items)
    - Each tile: image, title, short description, price.
    - CTA on each tile: "View details" → `/shop/[handle]`

  - Secondary CTA: "Browse all products" → `/shop`

-------------------------------------------------
[ Why Amplexus / Trust Section ]

  - Section heading: "Why choose Amplexus Health"
  - 2-column layout:
    LEFT:
      - Paragraph on values (trauma-informed, inclusive, evidence-based care).
    RIGHT:
      - 3–4 StatItem / bullets, e.g.:
        - "Licensed clinicians"
        - "Telehealth options"
        - "Sliding scale availability" (if applicable)

  - Optional: 1–2 TestimonialSnippet blocks.

-------------------------------------------------
[ FAQ Slice ]

  - Section heading: "Questions we hear often"
  - Mini `FAQAccordion` with 3–5 common questions.
  - Link: "See more FAQs" → `/resources` (if present).

-------------------------------------------------
[ Final CTA / Contact Teaser ]

  Background: subtle band (neutral or light brand tint).

  - Heading: "Ready to reach out?"
  - Short reassuring sentence.
  - Primary Button: "Request Appointment" → `/contact`

-------------------------------------------------
[ Footer ]

  - Columns: About / Services / Shop / Resources / Policies
  - Crisis disclaimer.
  - Social icons.
```

---

## 2. Services Page Wireframe (`/services`)

**Purpose:** Clarify what services are offered, who they help, and how to get started.

### 2.1 Layout Overview (Top → Bottom)

```text
[ Global HeaderNav ]

-------------------------------------------------
[ Services Hero ]

  - Eyebrow: "Our Services"
  - H1: "Support tailored to your mental health journey."
  - Paragraph: 2–3 lines on who they serve (individuals, couples, families).
  - Optional: Button "Request Appointment" → `/contact`

-------------------------------------------------
[ ServicesGrid – Detailed ]

  - Section heading: "Types of services we offer"

  [ ServiceCard x N ] (2-column on desktop):
    For each service:
      - Title: e.g. "Individual Therapy"
      - Short description (what it addresses, who it’s for)
      - Optional bullets: common concerns addressed
      - Link: "What to expect" (could be anchor within page or external resource)

-------------------------------------------------
[ Approach & Philosophy ]

  - Section heading: "How we approach care"
  - 2-column layout:
    LEFT:
      - Paragraph on therapeutic approaches (e.g., CBT, trauma-informed, etc., if desired).
    RIGHT:
      - Short bulleted list of principles (collaborative, strengths-based, culturally responsive).

-------------------------------------------------
[ Insurance & Payment Section ]

  Background: light neutral panel or card.

  - Section heading: "Insurance & payment"
  - 2 columns (stacked on mobile):
    LEFT:
      - List of accepted insurance plans (if provided).
      - Note on private pay, sliding scale (if applicable).
    RIGHT:
      - Simple explainer of how billing works.
      - Link to more detailed policy if needed.

-------------------------------------------------
[ Getting Started Steps ]

  - Section heading: "What getting started looks like"

  [ Step 1–3 horizontal or vertical layout ]
    - Step 1: "Reach out" – submit contact form.
    - Step 2: "Match" – team reviews needs and suggests a clinician.
    - Step 3: "Begin" – schedule and attend first session.

  - Button: "Request Appointment" → `/contact`

-------------------------------------------------
[ FAQ Slice (Services-Specific) ]

  - Section heading: "Services FAQs"
  - 3–5 `FAQItem`s, focused on logistics, session lengths, cancellations, etc.
  - Link: "More FAQs" → `/resources` (if present).

-------------------------------------------------
[ Footer ]
```

---

## 3. Shop Page Wireframe (`/shop`)

**Purpose:** Let users browse self-care products and route them to product detail pages with Buy Buttons.

### 3.1 Layout Overview (Top → Bottom)

```text
[ Global HeaderNav ]

-------------------------------------------------
[ Shop Hero ]

  - Eyebrow: "Self-care shop"
  - H1: "Support between sessions."
  - Paragraph: 2–3 lines framing products as supportive tools that complement therapy.

-------------------------------------------------
[ Category Filter Bar ]

  Layout: horizontal on desktop, scrollable chips on mobile.

  - Category toggles (Tabs or pills):
    - "All"
    - "Apparel"
    - "Journals & Planners"
    - "Self-Care Boxes"
    - "Mugs & Drinkware"

  - Optional sort dropdown: "Sort by" (Featured, Price Low–High, etc.) – can be v2.

-------------------------------------------------
[ ShopGrid – Product Listing ]

  - Grid: 2 columns on small screens, 3 on desktop.

  [ ProductTile x N ]
    For each product:
      - Top: Image (4:3 or square ratio, clean background).
      - Middle: Title + short description (1–2 lines, truncated).
      - Bottom: Price + link or small button "View details".

  - Pagination or "Load more" (optional, depending on product count).

-------------------------------------------------
[ Info / Policy Snippet ]

  Background: subtle neutral band.

  - Short paragraph on shipping times & basic policies.
  - Text link(s):
    - "Shipping & returns" → `/policies/shipping-and-returns`
    - "Refund policy" → `/policies/refunds`

-------------------------------------------------
[ Footer ]
```

---

## 4. Product Detail Page Wireframe (`/shop/[handle]`)

> Not requested explicitly by name in the file title, but critical to the Shop flow, so included here.

**Purpose:** Provide enough context for a user to feel confident buying, and surface the Shopify Buy Button.

### 4.1 Layout Overview (Top → Bottom)

```text
[ Global HeaderNav ]

-------------------------------------------------
[ Breadcrumbs ]

  - "Home > Shop > Product Name"

-------------------------------------------------
[ Product Main Panel ] (Two-column on desktop, stacked on mobile)

  LEFT:
    - Main product image (large, with zoom or hover enlarge optional later).
    - Optional thumbnails for additional views.

  RIGHT:
    - Product title (serif, prominent).
    - Short tagline (1 line).
    - Price.
    - Key highlights (bullets: e.g., "Guided prompts", "Soft-touch cover").
    - Variant selectors (Size, Color) if used.

    [ ShopifyBuyButton region ]
      - Embedded Buy Button UI, styled wrapper.

-------------------------------------------------
[ Details & Use ]

  - Section heading: "Details"
  - Richer copy: materials, dimensions, what’s inside the box, etc.

  - Section heading: "How this supports your care"
  - Short explanation tying product back to mental health support.

-------------------------------------------------
[ Care & Additional Info ]

  - Section heading: "Care & notes"
  - Care instructions, disclaimers, and any POD-specific info.

-------------------------------------------------
[ Related Products ]

  - Section heading: "You might also like"
  - Horizontal row of 3–4 `ProductTile` components.

-------------------------------------------------
[ Footer ]
```

---

**End of Wireframes – Home, Services, Shop v1**
