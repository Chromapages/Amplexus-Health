# Amplexus Health – Launch Checklist

Scope: Step‑by‑step checklist for launching the Amplexus Health Next.js + Shopify site. Use this in the week leading up to launch and on launch day.

---

## 1. Content & Copy

- All core pages are present and approved by the client:
  - Home (`/`)
  - Services (`/services`)
  - Our Team (`/team`)
  - Shop (`/shop`)
  - At least one product detail page (`/shop/[handle]`)
  - Contact (`/contact`)
  - Policy pages (`/privacy`, `/terms`, `/policies/*`)
- Page copy matches the latest copy deck or documented client edits.
- Crisis disclaimers and "not a crisis service" language are present where required (Resources, Contact, and any Crisis/Help pages).
- Clinician names, credentials, pronouns, and specialties are accurate and up to date.

---

## 2. Design & UX

- Header and footer match the navigation/footer spec.
- Logo renders clearly on standard and high‑DPI displays.
- Typography and colors follow the design system (no stray fonts or colors).
- Images are optimized for web (reasonable file size, correct aspect ratio, no obvious blurring).
- Layout is responsive and usable on:
  - Small phones (~320px wide)
  - Typical phones (~375–414px)
  - Tablets (~768px)
  - Laptops and desktops (≥ 1280px)

---

## 3. Shopify & Products

- Shopify store is active on the correct plan.
- Payment provider is configured and has been tested (Shopify Payments / other).
- Tax settings match accountant guidance and required regions.
- Shipping profiles are defined and assigned to the correct products.

**Initial Product Catalog**

- Launch catalog includes at least:
  - One or more apparel items
  - One or more journals/planners or similar self‑care items
  - Any launch self‑care boxes or mugs, if applicable
- Each product has:
  - Correct title, description, and price
  - Correct variants (sizes, colors, styles)
  - Appropriate mockup or photo
- Collections are set up and assigned correctly (Apparel, Journals & Planners, Self‑Care Boxes, Mugs & Drinkware, Accessories if used).
- Shopify Buy Button sales channel is installed and configured.
- Each product featured on the site has a valid product ID usable by the Buy Button.

---

## 4. Frontend Integration

- `products.config.ts` (or Storefront API logic) includes all launch products with correct `handle`, `title`, `price`, `category`, and `shopifyProductId`.
- `/shop` shows all launch products and category filters work as expected.
- Each product tile links to the correct product detail route.
- On every product detail page:
  - Product information (title, price, description, bullets) displays correctly.
  - The Buy Button area renders without console errors.
  - Clicking the Buy Button opens cart/checkout as expected.

---

## 5. Forms & Email

- Contact / Request Appointment form is fully functional:
  - Required fields are clearly indicated.
  - Client‑side validation works and displays friendly error messages.
  - Successful submit shows a confirmation message.
  - Server‑side errors show a fallback error message, not a blank screen.
- Test submissions are sent and received:
  - Test form entries reach the correct inbox or CRM for the client.
  - No sensitive information is logged in server logs or analytics.

---

## 6. Accessibility & QA

- Accessibility checklist has been run on staging.
  - Keyboard navigation works for main flows.
  - Focus styles are visible.
  - Important images have meaningful alt text.
  - Non‑emergency disclaimers and crisis resources are clearly visible.
- QA Test Plan has been executed on staging.
  - Home → Services → Contact → form submission flow passes.
  - Home → Shop → Product → Buy Button → checkout start flow passes.
  - 404 page appears for invalid URLs and links back to Home.

---

## 7. Analytics & SEO

- Analytics (Plausible, GA, or chosen tool) is configured and only active in production.
- Key events from the analytics/events doc are wired (for example, nav CTAs, contact success, product views, Buy Button clicks).
- Privacy policy mentions the analytics tool in use and what is tracked at a high level.

**SEO Checks**

- Each page has a unique `<title>` and meta description.
- Each page has a single `<h1>` that matches the primary on‑screen heading.
- Home page has Open Graph / social preview metadata.
- XML sitemap and `robots.txt` are served correctly.

---

## 8. Environment & Deployment

- Local, staging, and production environments match env‑config values.
- Production environment variables include:
  - Live Shopify domain and Storefront token
  - Live Buy Button key
  - Live analytics keys (if used)
- Staging environment uses test or non‑critical keys where possible.

**Domain & DNS**

- Primary domain (for example, `amplexushealth.com`) points to the Next.js host (such as Vercel).
- SSL certificate is active and pages load over HTTPS.
- Redirects from old Wix URLs are configured as needed (e.g., root URL, important subpages).

---

## 9. Client Handoff & Training

- Client can log into Shopify and:
  - View orders
  - Edit product titles, descriptions, and prices
  - See whether products are active or draft
- Client has a short guide or screen recording showing:
  - How the contact form leads to their inbox or CRM
  - Where to see basic analytics (if enabled)
  - How to request changes to content or layout

---

## 10. Launch Day & Post‑Launch

**Launch Day**

- Do a final smoke test in production for both main flows:
  - Home → Services → Contact → submit form
  - Home → Shop → Product → Buy Button → checkout start
- Tell the client the site is live and share the production URL.
- Optionally, publish an announcement on email or social channels.

**First 1–2 Weeks After Launch**

- Watch analytics and client feedback for any unexpected behavior or confusion.
- Fix high‑priority bugs and copy issues quickly.
- Capture a short post‑launch list of enhancements for a future iteration.

---

End of Amplexus Health Launch Checklist
