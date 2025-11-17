# Amplexus Health – Architecture Overview

> **Scope:** High-level technical architecture for the Amplexus Health website + shop, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Shopify (Buy Button + Storefront)**.
>
> Audience: Developers + technical collaborators.

---

## 1. High-Level System Diagram

**Core pieces:**

1. **Next.js App (Frontend)**  
   - Framework: Next.js (App Router) + TypeScript.  
   - Styling: Tailwind CSS + small design system.  
   - Responsibilities: marketing pages, services/team content, shop UI, contact form, SEO, accessibility.

2. **Shopify Store**  
   - Acts as product + order backend.  
   - Manages products, variants, pricing, inventory, orders, taxes, policies.  
   - Exposes **Buy Button** widgets and optionally the **Storefront API**.

3. **Email / Forms Service**  
   - Handles contact / request appointment form submissions.  
   - Could be SMTP (SendGrid, etc.) or an API provider (Resend).  

4. **Hosting / Deployment**  
   - Likely Vercel for the Next.js app.  
   - DNS points primary domain (e.g., `amplexushealth.com`) to the Next.js deployment.  
   - Shopify store uses its own subdomain (e.g., `amplexus-health.myshopify.com`) for checkout.

---

## 2. Next.js Application Structure

**Key directories (App Router):**

- `app/` – route segments and layouts.  
  - `app/layout.tsx` – root layout, `<HeaderNav />`, `<Footer />`, global providers.  
  - `app/page.tsx` – Home.  
  - `app/services/page.tsx` – Services page.  
  - `app/team/page.tsx` – Our Team page.  
  - `app/shop/page.tsx` – Shop listing page.  
  - `app/shop/[handle]/page.tsx` – Product detail pages.  
  - `app/resources/page.tsx` (optional).  
  - `app/contact/page.tsx` – Contact/Request Appointment.  
  - `app/(policies)/privacy/page.tsx`, etc. – Policy routes.  
  - `app/api/contact/route.ts` – form submission endpoint.

- `components/` – design system + reusable UI.  
  - `atoms/`, `molecules/`, `organisms/`, `shopify/`, `templates/` (see component API reference).  

- `lib/` – utilities and integration helpers.  
  - `lib/shopify/` – Buy Button & Storefront helpers.  
  - `lib/email/` – form submission email logic.  
  - `lib/seo.ts` – helper for titles/meta.

- `config/` – non-secret configuration.  
  - `config/nav.config.ts` – header/footer links.  
  - `config/products.config.ts` (v1) – static list of products mapped to Shopify IDs.

- `types/` – shared TypeScript interfaces.  
  - `types/product.ts`, `types/nav.ts`, etc.

---

## 3. Data Flow Overview

### 3.1 Marketing Content (Services, Team, Static Copy)

- **Source:** Hard-coded in React components or pulled from simple config files (`config/…`) based on the copy deck.  
- **Access pattern:** At build-time or runtime in server components (`page.tsx`).  
- **Update path:** Developer updates copy/config and redeploys.

> A CMS (Sanity/Contentful) can be added later if the client needs self-serve editing.

### 3.2 Product Catalog

Two phases:

- **v1 (Static Config + Shopify)**  
  - Product metadata (title, price, category, handle, Shopify product ID) is stored in `products.config.ts`.  
  - The `/shop` page reads from this config to render the product grid.  
  - Each product detail route (`/shop/[handle]`) uses the matching config entry and passes the `shopifyProductId` into `ShopifyBuyButton`.

- **v2 (Storefront API + Shopify)**  
  - Product data is fetched from Shopify’s Storefront API using collection handles/tags.  
  - `products.config.ts` shrinks to just feature flags & overrides.  
  - ISR or on-demand revalidation can be used for near-real-time updates.

### 3.3 Shopify Buy Button

- Shopify hosts checkout & cart.  
- The Next.js app includes a `ShopifyBuyButton` component which:  
  - Loads the `buybutton.js` script (once).  
  - Initializes a product Buy Button using **store domain**, **API key**, and **product ID**.  
  - Renders into a container div within the product detail page.

### 3.4 Contact / Request Appointment Form

- **Frontend:** `AppointmentForm` component on `/contact`.  
- **Backend:** `app/api/contact/route.ts` POST handler.  
  - Validates data.  
  - Sends email or logs to chosen service (SMTP/Resend/etc.).  
  - Returns success/error JSON.  
- **User experience:** inline success message; no redirect needed.

---

## 4. Integrations

### 4.1 Shopify

- **APIs used:**  
  - v1: Buy Button JS SDK only.  
  - v2: Storefront GraphQL API for product data.  
- **Authentication:**  
  - Storefront access token via `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.  
  - Store domain via `SHOPIFY_STORE_DOMAIN` / `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`.

### 4.2 Email / Forms

- Implementation detail is abstracted behind `lib/email`.  
- `EMAIL_*` or `RESEND_API_KEY` env vars configure the provider.  
- Forms call `POST /api/contact` with JSON payload.

### 4.3 Analytics (Optional)

- Simple, privacy-conscious analytics (Plausible/Simple Analytics) or GA if requested.  
- Script initialized in `app/layout.tsx` or a dedicated `Analytics` component using `NEXT_PUBLIC_*` env vars.

---

## 5. Environment & Deployment

### 5.1 Environments

- **Local:** `.env.local` with real or test keys.  
- **Staging:** Vercel preview with staging keys and test Shopify products.  
- **Production:** Vercel production with live domain + Shopify store.

### 5.2 Domain & Routing

- Primary domain (e.g., `amplexushealth.com`) points to Vercel (Next.js).  
- Shopify checkout uses `https://your-store.myshopify.com/...` under the hood, but user flows from the site via Buy Button.

---

## 6. Scalability & Future Enhancements

The architecture is intentionally simple and extendable:

- **CMS integration:** content for Services, Team, Resources can move into a headless CMS with minimal changes to templates.  
- **More Shopify usage:** move from config-based products to full Storefront API for dynamic catalogs, filtering, and live inventory.  
- **Clinician detail pages:** add `/team/[slug]` routed from a `clinicians.config.ts` or CMS.  
- **Automations:** add simple serverless cron jobs (via Vercel) for tasks like sitemap generation or uptime health checks.

---

**End of Amplexus Health Architecture Overview v1**

