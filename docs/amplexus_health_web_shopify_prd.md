# Product Requirements Document (PRD)

## 1. Project Overview

**Product Name:** Amplexus Health Website & Shop  
**Owner:** Amplexus Health (mental health group practice, transitioning to S‑Corp)  
**Designer/Developer:** Chromapages (Next.js + Shopify integration)

Amplexus Health currently operates with two outdated Wix sites that split the brand between clinical services and emerging merchandise. The new project will create a unified, modern web experience using **Next.js (TypeScript, Tailwind CSS)** as the frontend and **Shopify** (via **Shopify Buy Button / Storefront** integration) as the commerce backend.

The site must:
- Communicate **trustworthy, compassionate mental health care** as the primary value.  
- Seamlessly introduce and sell **self‑care products and apparel** (shirts, mugs, journals, planners, etc.).  
- Simplify backend operations (taxes, accounting, inventory, print‑on‑demand fulfillment) by centralizing commerce in Shopify.

Target launch is **on or around December 1** to capture holiday traffic and early self‑care purchases.

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals

1. **Modern, trusted web presence**  
   - Replace the old Wix site(s) with a **single, professional** website.  
   - Visually convey **calm, safety, professionalism, and hope**.

2. **Integrated commerce using Shopify**  
   - Use Shopify as the **source of truth for products, inventory, taxes, and reporting**.  
   - Implement **Shopify Buy Buttons** within the Next.js site to power the cart and checkout.

3. **Consolidated brand + IA**  
   - Move from two disjointed Wix sites to **one Amplexus Health domain** with:
     - Clinical services and clinicians.  
     - Self‑care shop (apparel, journals, mugs, etc.).

### 2.2 Secondary Goals

1. **Simple content & catalog management**  
   - Client can **add/edit products, prices, and basic copy** from Shopify without dev intervention.  
   - Future‑friendly structure for adding planners, guides, and additional self‑care items.

2. **Improved discoverability (SEO)**  
   - Clear structure, crawlable pages, good metadata, and alt text on key images.  
   - Optimized for branded search and mental‑health‑related queries.

3. **Operational efficiency**  
   - Shopify handles **payments, tax calculation, basic reporting**.  
   - Print‑on‑demand integration for merch fulfillment (shirts, totes, journals, etc.).

### 2.3 Success Metrics (v1)

- **Clinical:**
  - +X% increase in **appointment inquiries** via the Contact/Request form vs current Wix traffic (baseline TBD).  
  - Clear, trackable funnel from "Request Appointment" clicks.

- **Commerce:**
  - At least **5–10 successful merch orders** in first holiday cycle (Dec–Jan).  
  - Ability to add at least **10+ products** without dev support.

- **Experience & Ops:**
  - Client can independently **publish a new product** from Shopify to the site (via Buy Button embed) after a short training session.  
  - PageSpeed/Lighthouse scores **>80** on key pages for mobile.

---

## 3. Users & Use Cases

### 3.1 Primary User Types

1. **Prospective Clients (Individuals & Families)**  
   - Goal: Determine if Amplexus Health is a **safe, credible place** for therapy.  
   - Needs: Learn about services, clinicians, insurance/payment, and how to get started.

2. **Existing Clients**  
   - Goal: Find resources that support care between sessions.  
   - Needs: Access self‑care products (journals, planners, calming apparel) and practical info like contact details.

3. **Supporters / Gift Buyers**  
   - Goal: Purchase **supportive self‑care items** as gifts (especially around holidays).  
   - Needs: Easy browsing, simple checkout, trustworthy vibe (not gimmicky).

4. **Practice Owner / Admin**  
   - Goal: Manage content, products, and orders with minimal tech friction.  
   - Needs: Clear mental model of where to edit what (Shopify vs. code/Next), easy training path, minimal manual steps.

### 3.2 Key Use Cases

- Prospective client:
  - Lands on Home → reviews services → reads clinician bios → fills out Request Appointment form.  
- Existing client:
  - Follows a link from therapist email or social → browses Shop → buys a journal or self‑care box.
- Gift buyer:
  - Lands on Home or Shop via social post → sees a featured product → adds to cart → checks out with minimal friction.
- Practice admin:
  - Logs into Shopify → creates a new product (e.g., new planner) → copies or uses a pre‑wired Buy Button → product appears on the site’s Shop section.

---

## 4. Scope

### 4.1 In Scope (v1)

- **Frontend:** Next.js  
  - TypeScript, Tailwind CSS.  
  - Static or SSG/ISR pages for main marketing and info content.

- **Commerce:** Shopify (Buy Button integration)
  - Shopify store setup (domain, payments, basic tax regions, shipping rules).  
  - Product model definition (categories: Apparel, Self‑Care & Gifts, Journals & Planners, Self‑Care Boxes, etc.).  
  - Print‑on‑demand integration (e.g., Printful/Printify) handled from Shopify side.

- **Core Pages:**
  - Home  
  - Services (overview + sub‑sections)  
  - Our Team / Clinicians  
  - Shop (grid of featured products)  
  - Product Detail (site-level product storytelling + Buy Button embed)  
  - Resources/FAQ (optional but recommended)  
  - Contact / Request Appointment  
  - Legal pages: Privacy, Terms, Crisis/Emergency disclaimers, Shop policies.

- **SEO & Analytics:**
  - Basic on‑page SEO (titles, meta descriptions, headings, alt text).  
  - Google Analytics (or GA4 equivalent) integrated.

### 4.2 Out of Scope (v1)

- Complex clinician management (availability, insurance matrix, automated match algorithm).  
- Deep marketing automation (email funnels, ads setup, etc.).  
- Mobile apps.  
- Headless Shopify Storefront API usage beyond what’s needed for the Buy Button.

---

## 5. Information Architecture (IA)

### 5.1 Top‑Level Navigation

- Home  
- Services  
- Our Team  
- Shop  
- Resources (optional)  
- Contact

### 5.2 Page Breakdown

#### Home

**Purpose:** Introduce Amplexus Health, reassure visitors, and route them to Services or Shop.

**Key sections:**
- Hero: headline, short supporting copy, primary CTA (Request Appointment), secondary CTA (Shop Self‑Care).  
- Services Overview: brief summary of main service categories.  
- Shop Preview: 3–6 featured products.  
- Why Amplexus: trust signals, values, approach.  
- Testimonials/Quotes (if provided).  
- Getting Started (3‑step process).  
- Footer with contact info, disclaimers.

#### Services

**Purpose:** Explain what care is offered and how it works.

**Key sections:**
- Services hero + intro copy.  
- Service list / cards (Individual Therapy, Couples/Family, Telehealth, etc.).  
- Insurance & Payment overview.  
- Link(s) to Contact/Request Appointment.

#### Our Team

**Purpose:** Humanize the practice and build trust.

**Key sections:**
- Group intro (what unites the clinicians).  
- Clinician grid with cards: photo, name, credentials, specialties.  
- Individual clinician detail (if feasible v1) or expanded modals.

#### Shop

**Purpose:** Provide a curated self‑care store aligned with the practice.

**Key sections:**
- Shop hero (framing merch as an extension of care).  
- Filter / category toggles (Apparel, Journals, Self‑Care Boxes, etc.).  
- Product grid with tiles (image, name, short summary, price).  
- Each product tile links to a product detail page or expands a panel with details + Buy Button.

#### Product Detail

**Purpose:** Tell the story of each product and enable purchase.

**Key sections:**
- Hero with product image, title, short calming description.  
- Key info: price, variants (size, color), what’s included, who it’s for.  
- Shopify Buy Button widget (Add to Cart / Buy Now) embedded.  
- Supporting content: care instructions, use cases, connection to mental health journey.

#### Resources / FAQ

**Purpose:** Reduce friction and answer common questions.

**Key sections:**
- FAQ accordion for therapy logistics and site use.  
- Crisis resources and clear "Not a crisis line" disclaimers.

#### Contact / Request Appointment

**Purpose:** Provide a clear path to contact the practice.

**Key sections:**
- Short explanation of the process and expected response times.  
- Contact form (name, email, phone, reason for reaching out, preferences).  
- Practice contact details, address (if applicable).  
- Clear emergency/crisis disclaimer.

---

## 6. Functional Requirements

### 6.1 Content & Marketing Site

1. **Responsive UI**  
   - Must function cleanly across desktop, tablet, and mobile.

2. **Content Management**  
   - Non‑product content will be primarily code‑managed (Next.js), but structured so updates are simple (e.g., JSON data for clinicians, services).  
   - Product content & images live in Shopify.

3. **Forms**  
   - Contact / Request Appointment form with validation and error states.  
   - Spam protection (basic honeypot or similar).

4. **Accessibility (WCAG‑aware)**  
   - Logical heading structure.  
   - Sufficient color contrast for text and key UI elements.  
   - Keyboard‑navigable nav and buttons.  
   - Clear focus states.

### 6.2 Commerce & Buy Button Integration

1. **Shopify Buy Button**
   - Buy Button / BuyButton.js loaded in a **single shared component** on the Next.js frontend.  
   - Capability to render product Buy Buttons by Shopify ID (or by preconfigured button code).  
   - Buy Button opens a **cart widget or redirect to Shopify checkout**.

2. **Product Variants**
   - Size (S, M, L, XL, etc.) for apparel.  
   - Color/style variants if relevant.  
   - Variants selectable either in Shopify widget UI or in a simple Next‑level UI that passes the selection into the Buy Button.

3. **Print‑on‑Demand (POD)**
   - POD integration is configured on Shopify side for fulfillment.  
   - Product creation workflow: create product in POD app → sync to Shopify → connect to Buy Button.

4. **Tax & Shipping**
   - Basic shipping zones and tax rules configured in Shopify.  
   - Next.js site does not calculate tax/shipping; these are handled in Shopify during checkout.

5. **Policies & Legal Pages**
   - Privacy Policy and Terms of Service accessible in the footer.  
   - Shop‑specific policies (Shipping, Returns, Refunds) surfaced to users.

---

## 7. Non‑Functional Requirements

### 7.1 Performance

- Lighthouse performance score >80 on key pages (Home, Services, Shop, Product detail) for mobile.  
- Lazy‑loading for non‑critical images and below‑the‑fold content.  
- Optimized Next.js `<Image>` usage for key visuals.

### 7.2 Security & Compliance

- Use HTTPS for all pages.  
- Ensure the Contact/Request form does **not** solicit PHI beyond what is necessary for initial contact (no detailed clinical disclosures).  
- Crisis messaging: clear disclaimers that the site is not an emergency service.

### 7.3 Maintainability

- Code structured with clear components and naming conventions (React + TypeScript).  
- Reusable layout and UI components to avoid duplication.  
- Shopify Buy Button logic isolated into a small number of components for future migration to Storefront API if needed.

---

## 8. Technical Architecture

### 8.1 Frontend

- **Framework:** Next.js (latest stable)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Deployment:** Vercel (preferred) or similar

### 8.2 Shopify Integration

- **Shopify:** main product catalog, payments, taxes, shipping, POD.  
- **Integration pattern:**
  - Short term: Shopify Buy Button / BuyButton.js embedded into Next.js components.  
  - Future: potential migration to Storefront API for fully headless checkout & cart.

### 8.3 Data Sources

- **Static content:** within the Next app (services, clinicians, FAQs, etc.).  
- **Dynamic content:** product information and availability from Shopify.

### 8.4 Analytics & SEO

- Google Analytics (or GA4) integration.  
- Meta tags, Open Graph data for Home and key pages.  
- XML sitemap & robots.txt.

---

## 9. Risks & Mitigations

### 9.1 Content & Asset Delays

**Risk:** Client delays providing product lists, copy, or approvals → threatens the Dec 1 launch.  
**Mitigation:**  
- Use placeholder products and mockups initially.  
- Build with flexible content slots so final copy can be swapped in quickly.

### 9.2 Shopify Buy Button Deprecation / Changes

**Risk:** Buy Button/JS SDK is a legacy path and may change or be deprecated.  
**Mitigation:**
- Architect integration through a small number of wrapper components.  
- Keep a parallel plan for migrating to Storefront API if necessary.

### 9.3 Scope Creep (Clinician Systems)

**Risk:** Client requests complex clinician scheduling, matching, or EMR integration mid‑build.  
**Mitigation:**
- Clearly label advanced clinician workflows as **Phase 2+**.  
- Focus v1 on marketing + shop experience.

### 9.4 Mental Health Compliance & Tone

**Risk:** Over‑emphasis on merch could make the site feel commercial and undermine clinical trust.  
**Mitigation:**
- Keep services and Request Appointment as primary CTAs.  
- Position products as **supportive tools**, not cures.

---

## 10. Timeline & Milestones (High Level)

> Exact dates will be keyed off the desired Dec 1 launch.

1. **Week 1 – Discovery & IA**  
   - Confirm sitemap, content outline, and product categories.  
   - Finalize visual direction and base design system tokens.

2. **Week 2 – Core Layout & Components**  
   - Build global layout (header, footer, shell).  
   - Implement core sections for Home, Services, Our Team.

3. **Week 3 – Shop Integration**  
   - Configure Shopify products and POD.  
   - Implement Buy Button integration in Product tiles and Product detail pages.

4. **Week 4 – SEO, Polish, QA**  
   - Refine copy, add images/mockups, wire forms.  
   - Run accessibility and performance checks.  
   - Final review & approvals.

---

## 11. Open Questions

- Exact list of **initial products** (names, categories, price points).  
- Final decision on **Resources/FAQ** and any blog/education content in v1.  
- Whether each clinician should have a **full profile page** or just a "card" with limited info in v1.  
- Preferred POD provider (Printful, Printify, etc.) for best alignment with brand and shipping locations.

---

**End of PRD – Amplexus Health Web + Shopify**

