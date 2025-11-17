# Amplexus Health – Routes & Data Sources

> **Scope:** Map each route in the Amplexus Health site to its **purpose**, **data source(s)**, and **key dependencies**. This document ties together `sitemap.md`, `architecture-overview.md`, `shopify-setup-guide.md`, and the copy deck.

---

## Legend

- **Copy Deck** – `copy-deck-core-pages.md` and related content docs.  
- **Static Config** – TypeScript config files (e.g., `products.config.ts`, `nav.config.ts`).  
- **Shopify** – Shopify Store (Buy Button / Storefront API).  
- **Env** – environment variables defined in `env-config.md`.  
- **API Route** – Next.js route handlers under `app/api/*`.

---

## 1. Marketing Pages

### 1.1 Home

- **Route:** `/`  
- **Component:** `app/page.tsx` → `HomeTemplate`.  
- **Purpose:** Introduce Amplexus Health, route users to Services, Team, Shop, and Contact.

**Data Sources:**
- Copy: Copy deck (Hero, Services overview, Why Amplexus, FAQ slice).  
- Services list: Static config or inline data in `HomeTemplate`.  
- Featured products: Static config (`products.config.ts`) subset, or Shopify in v2.  
- Navigation/footer: `nav.config.ts`.

---

### 1.2 Services

- **Route:** `/services`  
- **Component:** `app/services/page.tsx` → `ServicesTemplate`.  
- **Purpose:** Explain individual therapy, group classes, and self-care supports.

**Data Sources:**
- Copy: Copy deck (services intros, approach, insurance).  
- Services list: Static config or inline definitions.  
- Nav/footer: `nav.config.ts`.

---

### 1.3 Our Team

- **Route:** `/team`  
- **Component:** `app/team/page.tsx` → `TeamTemplate`.  
- **Purpose:** Introduce founder and clinicians.

**Data Sources:**
- Copy: Copy deck (Team hero intro).  
- Clinician list: `clinicians.config.ts` (name, credentials, specialties, photo URLs), or CMS in later phases.  
- Images: Static assets in `public/clinicians/*` or remote URLs.

**Optional Detail Route:**

- **Route:** `/team/[slug]`  
- **Component:** `app/team/[slug]/page.tsx` → `ClinicianDetailTemplate`.  
- **Data:** `clinicians.config.ts` / CMS; slug-mapped.

---

## 2. Shop & Product Routes

### 2.1 Shop Listing

- **Route:** `/shop`  
- **Component:** `app/shop/page.tsx` → `ShopTemplate`.  
- **Purpose:** Show all active self-care products with category filters.

**Data Sources (v1):**
- Product list: `products.config.ts` (array of `AmplexusProduct`).  
- Categories: either derived from product `category` field or a static list.  
- Copy: Copy deck (Shop hero, disclaimers).  
- Env: `NEXT_PUBLIC_FEATURE_SHOP_ENABLED` (optional feature flag).

**Data Sources (v2):**
- Product list: Shopify Storefront API (collections/tags).  
- Mapping: `category` derived from collection handles and/or tags.  
- Fallback config: core/featured product IDs still defined in `products.config.ts`.

---

### 2.2 Product Detail

- **Route:** `/shop/[handle]`  
- **Component:** `app/shop/[handle]/page.tsx` → `ProductDetailModule`.  
- **Purpose:** Show detailed information for a single product and render Buy Button.

**Data Sources (v1):**
- Product metadata: `products.config.ts` (match by `handle`).  
- Shopify: Buy Button JS SDK using `shopifyProductId` from config.  
- Env:  
  - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`  
  - `NEXT_PUBLIC_SHOPIFY_BUY_BUTTON_API_KEY`

**Data Sources (v2):**
- Product data: Shopify Storefront API query by handle.  
- Buy Button: Shopify JS (same as above).  
- Related products: additional Storefront API query or filtered `products.config.ts`.

---

## 3. Resources & Content Pages

### 3.1 Resources & FAQs (Optional)

- **Route:** `/resources`  
- **Component:** `app/resources/page.tsx` → `ResourcesTemplate`.  
- **Purpose:** FAQs and crisis/support resources.

**Data Sources:**
- Copy: Copy deck + a future `faqs-and-resources.md` (or similar).  
- FAQ list: `faqs.config.ts` array used by `FAQAccordion`.  
- Crisis resources: static config (links, phone numbers) maintained for accuracy.

---

### 3.2 Contact / Request Appointment

- **Route:** `/contact`  
- **Component:** `app/contact/page.tsx` → `ContactTemplate` + `AppointmentForm`.  
- **Purpose:** Intake form for prospective clients.

**Data Sources:**
- Copy: Copy deck (hero, form intro, crisis disclaimer, success/error messages).  
- API: `POST /api/contact` (Next.js route handler).  
- Env: email/notification vars (`EMAIL_*`, `RESEND_API_KEY`).

---

### 3.3 Policy Pages

- **Routes:**  
  - `/privacy`  
  - `/terms`  
  - `/policies/shipping-and-returns`  
  - `/policies/refunds`  
  - `/telehealth-disclaimer` (optional)  
  - `/crisis-resources` (optional)

- **Components:** Simple page templates under `app/(policies)/*/page.tsx`.

**Data Sources:**
- Copy: Legal text provided by client/counsel, stored either inline or in MD/JSON content files.  
- No external APIs required.

---

## 4. Utility & System Routes

### 4.1 404 Not Found

- **Route:** `/*` unmatched (handled by Next.js `not-found.tsx`).  
- **Component:** `app/not-found.tsx`.  
- **Purpose:** Graceful handling of invalid URLs.

**Data Sources:**
- Copy: Short not-found copy in the component, based on copy deck.  
- Links: `nav.config.ts` for Home/Services/Shop.

---

### 4.2 Error Boundary / 500

- **Route:** error fallback (handled by `error.tsx` in relevant segment).  
- **Component:** `app/error.tsx` or per-segment `error.tsx`.  
- **Purpose:** Display a friendly error message on runtime failures.

**Data Sources:**
- Copy: Static copy in component; may reference support contact.

---

### 4.3 API Routes

#### 4.3.1 Contact API

- **Route:** `POST /api/contact`  
- **File:** `app/api/contact/route.ts`

**Purpose:**
- Validate form payload.  
- Send email to intake address or log to CRM.  
- Return JSON `{ success: true }` or error.

**Data Sources:**
- Env: `EMAIL_*` or `RESEND_API_KEY`.  
- Request body from `AppointmentForm`.

#### 4.3.2 Health Check (Optional)

- **Route:** `GET /api/health`  
- **Purpose:** Return simple status JSON for uptime checks.

**Data Sources:**
- None (purely computed response).

---

## 5. Navigation & Layout

### 5.1 Global Layout

- **File:** `app/layout.tsx`.  
- **Components:** `HeaderNav`, `Footer`, `<main>` wrapper.

**Data Sources:**
- Navigation links: `nav.config.ts`.  
- Footer link columns: `nav.config.ts` / `footer.config.ts`.  
- SEO defaults: `seo-content-map.md` → `lib/seo.ts`.

---

## 6. Data Source Summary Table

| Route / Area        | Primary Data Source(s)                                      |
|---------------------|------------------------------------------------------------|
| `/` (Home)          | Copy deck, static service config, `products.config.ts`     |
| `/services`         | Copy deck, static services config                          |
| `/team`             | Copy deck, `clinicians.config.ts`, static images           |
| `/shop`             | `products.config.ts` (v1), Shopify Storefront (v2)         |
| `/shop/[handle]`    | `products.config.ts` / Storefront, Shopify Buy Button      |
| `/resources`        | Copy deck, `faqs.config.ts`, static crisis resources       |
| `/contact`          | Copy deck, `POST /api/contact`, email provider             |
| `/privacy`, `/terms`| Legal copy files                                           |
| `/policies/*`       | Policy copy files                                          |
| `/telehealth-disclaimer` | Legal copy files                                     |
| `/crisis-resources` | Static crisis resource config                              |
| `not-found.tsx`     | Static copy                                                |
| `error.tsx`         | Static copy                                                |
| `/api/contact`      | Request body, env vars for email provider                  |
| `/api/health`       | None (computed)                                            |

---

**End of Amplexus Health Routes & Data Sources v1**

