# Amplexus Health – Sitemap

> **Scope:** High-level sitemap for the Amplexus Health marketing + shop site built with **Next.js + Shopify (Buy Button)**. This document defines all primary routes, their purpose, and key sections.

Base URL: `https://amplexushealth.com`

---

## 1. Top-Level Navigation

These items appear in the main header navigation.

1. **Home** – `/`  
2. **Services** – `/services`  
3. **Our Team** – `/team`  
4. **Shop** – `/shop`  
5. **Resources** (optional) – `/resources`  
6. **Contact** – `/contact`

Footer will also include legal/policy pages and crisis disclaimers (see Section 4).

---

## 2. Primary Pages

### 2.1 Home

- **URL:** `/`  
- **Template:** `HomeTemplate`  
- **Purpose:** High-level introduction; route users to Services (care) or Shop (self-care products).

**Key sections (in order):**
- Hero – value prop, primary CTA (Request Appointment), secondary CTA (Shop Self-Care).  
- Services Overview – summary cards linking to `/services`.  
- Shop Highlight – 3–6 featured products linking to `/shop` or individual products.  
- Why Amplexus – values, approach, trust signals (could include `StatItem`s and testimonials).  
- FAQ Slice – 3–5 top FAQs with link to `/resources` (if present).  
- Final CTA – "Ready to reach out?" + button to `/contact`.

---

### 2.2 Services

- **URL:** `/services`  
- **Template:** `ServicesTemplate`  
- **Purpose:** Explain available services and how therapy works.

**Key sections:**
- Hero – overview of services and who the practice serves.  
- Services Grid – cards for: Individual Therapy, Couples/Family, Telehealth, (others as defined).  
- Approach & Modalities (optional) – short explanation of how clinicians work.  
- Insurance & Payment – basics of coverage, OOP, and policies.  
- CTA – "Request Appointment" (link to `/contact`).

---

### 2.3 Our Team

- **URL:** `/team`  
- **Template:** `TeamTemplate`  
- **Purpose:** Introduce clinicians, build trust and connection.

**Key sections:**
- Hero – "Meet the Team" intro, practice philosophy.  
- Clinician Grid – `ClinicianCard`s listing name, credentials, specialties, photo.  
- Optional: Short section on supervision, training, or diversity/values.

**Optional detail pages:**
- **URL pattern:** `/team/[slug]`  
- **Template:** `ClinicianDetailTemplate` (if implemented v1 or later).  
- **Purpose:** Per-clinician biography, specialties, and additional context.

---

### 2.4 Shop

- **URL:** `/shop`  
- **Template:** `ShopTemplate`  
- **Purpose:** Main catalog view for self-care products.

**Key sections:**
- Shop Hero – explains that products are supportive tools aligned with therapy.  
- Filter Bar – categories such as:  
  - Apparel  
  - Journals & Planners  
  - Self-Care Boxes  
  - Mugs & Drinkware  
- Product Grid – `ProductTile`s for each product; each tile links to product detail route.  
- Shipping & Returns Snippet – link to `/policies/shipping-and-returns`.

---

### 2.5 Product Detail

- **URL pattern:** `/shop/[handle]`  
- **Template:** `ProductTemplate`  
- **Purpose:** Tell the story of each product and surface the Shopify Buy Button for purchase.

**Key sections:**
- Breadcrumbs – Home > Shop > Product.  
- Main Product Panel – image/gallery, title, price, short description.  
- Details & Benefits – extended copy and bullets.  
- Care & Use – instructions, materials.  
- Shopify Buy Button region – `ShopifyBuyButton` component (Add to cart / Buy now).  
- Related Products – horizontal list of a few other `ProductTile`s.

---

### 2.6 Resources (Optional for v1)

- **URL:** `/resources`  
- **Template:** `ResourcesTemplate`  
- **Purpose:** Answer common questions and share non-crisis educational materials.

**Key sections:**
- Overview – explanation of what users can find here.  
- FAQs – `FAQAccordion` with categories (Getting Started, Insurance & Payment, Telehealth).  
- Crisis Resources – clear list of emergency hotlines and what to do in a crisis.  
- Links to blog posts or external resources (if any; can be added in later phases).

---

### 2.7 Contact / Request Appointment

- **URL:** `/contact`  
- **Template:** `ContactTemplate`  
- **Purpose:** Provide a clear path for prospective clients to reach out.

**Key sections:**
- Hero – "We’re glad you’re reaching out" + reassurance and response-time expectations.  
- Contact / Appointment Form – `AppointmentForm` (name, email, phone, preferences, message).  
- Contact Info Panel – practice email, phone, location (if applicable).  
- Crisis Disclaimer – statement that this is not for emergencies, plus crisis resources.

---

## 3. Secondary / Utility Pages

These might not appear in main nav but are critical to the overall experience.

### 3.1 404 – Not Found

- **URL:** `/*` unmatched  
- **Template:** `NotFoundTemplate`  
- **Purpose:** Gracefully handle invalid routes.

**Key elements:**
- Friendly error message.  
- Links back to Home, Services, and Shop.

### 3.2 500 – Error

- **URL:** error boundary fallback  
- **Template:** `ErrorTemplate`  
- **Purpose:** Handle unexpected client-side or server-side errors.

**Key elements:**
- Apology & reassurance message.  
- Option to reload or go Home.  
- Contact link if the issue persists.

---

## 4. Legal & Policy Pages (Footer Links)

These pages are linked from the footer and sometimes from checkout (Shopify side) as well.

> **Note:** For checkout, Shopify will also host its own policy pages; this sitemap defines optional mirrored or supplemental content on the marketing site.

### 4.1 Privacy Policy

- **URL:** `/privacy`  
- **Purpose:** Explain data collection, storage, and usage practices.

### 4.2 Terms of Use

- **URL:** `/terms`  
- **Purpose:** Legal terms for using the website and its content.

### 4.3 Shop / E-commerce Policies

Either as separate URLs or a combined page:

- Shipping & Returns – `/policies/shipping-and-returns`  
- Refund Policy – `/policies/refunds`  
- Terms of Sale (if separate) – `/policies/terms-of-sale`

### 4.4 Telehealth / Disclaimer Page (Optional)

- **URL:** `/telehealth-disclaimer`  
- **Purpose:** Any required telehealth-specific legal info; may be required by jurisdiction.

### 4.5 Crisis & Emergency Disclaimer

- **URL:** `/crisis-resources` (optional dedicated page)  
- **Purpose:** Consolidated list of crisis hotlines and emergency instructions.

This content will also appear in short form on `/contact` and `/resources`.

---

## 5. Admin-Only / Infrastructure (Not User-Facing)

These routes might not be needed initially, but documenting them now can help future phases.

- **Preview Route** – `/preview` (optional)  
  - Used for content previews if you later integrate a CMS.

- **Health Check Endpoint** – `/api/health` (optional)  
  - For uptime monitoring (returns simple JSON).

---

## 6. Sitemap Summary Table (Quick View)

| URL                    | Name/Title             | Template           | Notes |
|------------------------|------------------------|--------------------|-------|
| `/`                    | Home                   | HomeTemplate       | Entry; services + shop preview |
| `/services`            | Services               | ServicesTemplate   | Service descriptions + insurance |
| `/team`                | Our Team               | TeamTemplate       | Clinician grid |
| `/team/[slug]` (opt)   | Clinician Detail       | ClinicianDetail    | Optional v2 |
| `/shop`                | Shop                   | ShopTemplate       | Product grid |
| `/shop/[handle]`       | Product Detail         | ProductTemplate    | Buy Button + product story |
| `/resources` (opt)     | Resources & FAQ        | ResourcesTemplate  | FAQs + crisis info |
| `/contact`             | Contact / Request Appt | ContactTemplate    | Appointment form |
| `/privacy`             | Privacy Policy         | SimplePage         | Footer link |
| `/terms`               | Terms of Use           | SimplePage         | Footer link |
| `/policies/shipping-and-returns` | Shipping & Returns | SimplePage   | Shop policy |
| `/policies/refunds`    | Refund Policy          | SimplePage         | Shop policy |
| `/telehealth-disclaimer` (opt) | Telehealth Disclaimer | SimplePage | Legal/clinical requirements |
| `/crisis-resources` (opt) | Crisis Resources     | SimplePage         | Expanded crisis info |
| `/*`                   | 404 Not Found          | NotFoundTemplate   | Fallback |

---

**End of Amplexus Health Sitemap v1**

