# Amplexus Health – QA Test Plan

> **Scope:** Practical QA checklist for the Amplexus Health Next.js + Shopify site. This is focused on "does it work and feel right" for v1: navigation, forms, shop + Buy Button, layout, and basic accessibility.

---

## 1. Test Environments

- **Local:** Developer machine (`npm run dev`).  
- **Staging:** Deployed preview URL (e.g., Vercel preview).  
- **Production:** Live site (`https://amplexushealth.com`).

> Run this test plan on staging before each major release; on production after launch for smoke tests.

---

## 2. Core Journeys

### 2.1 New Visitor → Request Appointment

**Devices:** Desktop (Chrome), Mobile (Chrome/Android or Safari/iOS).

1. Navigate to `/` (Home).  
2. Verify hero loads with headline, subheadline, and both CTAs.  
3. Click `Start Now` CTA in hero → confirm navigation to `/contact`.  
4. From header nav, click `Services` → confirm `/services` loads.  
5. From `/services`, click `Contact` or `Start Now` (if present) → confirm `/contact` loads.  
6. On `/contact`:  
   - Verify form fields exist (name, email, etc.).  
   - Attempt submit with empty fields → confirm validation errors appear under required fields.  
   - Fix only one field at a time → confirm error messages update correctly.  
   - Submit with valid data → confirm success message appears and form clears (if designed that way).  
   - Verify that any email notification or backend integration receives the submission (if configured).

**Expected:** No console errors, clear validation messages, and a clear success state.

---

### 2.2 Visitor → Shop → Buy Button → Checkout

**Devices:** Desktop + Mobile.

1. From Home hero, click `Explore Self‑Care` (or equivalent) → confirm `/shop`.  
2. On `/shop`:
   - Verify hero title and intro text.  
   - Confirm product grid loads with correct product names, images, and prices.  
   - If category filters exist, toggle between them and verify the grid updates.
3. Click the first product tile → confirm product detail page (`/shop/[handle]`) loads.
4. On product detail page:
   - Check breadcrumbs (Home → Shop → Product).  
   - Confirm product image, title, price, and description match expectations.  
   - Confirm `ShopifyBuyButton` area loads without JS errors.
5. Click the Buy Button:
   - Confirm cart/checkout opens (drawer or redirect to Shopify checkout).  
   - Verify correct product, price, and quantity appear.
6. Complete a test purchase (staging/test card if possible):
   - Walk through shipping and payment steps.  
   - Confirm order confirmation page appears.  
   - Confirm order entry appears in Shopify admin.

**Expected:** Smooth add-to-cart and checkout with no broken layouts or script failures.

---

### 2.3 Admin Workflow – Add Product → Visible on Site

**Environment:** Staging.

1. In Shopify, create a **test product** (or duplicate an existing one):  
   - Add title, description, price, image, and collection assignment.
2. Generate or confirm **Buy Button** product ID for this item.  
3. Update `products.config.ts` (v1) with this test product and deploy to staging.  
4. On `/shop`, verify the new product appears in the grid.  
5. Click into product detail page and confirm `ShopifyBuyButton` works.

**Expected:** Adding a product in Shopify + updating the config is sufficient to surface it on the site.

---

## 3. Page-by-Page Checks

### 3.1 Home (`/`)

- Hero text matches the copy deck (headline, subheadline, CTAs).  
- Services overview displays expected service cards with correct text.  
- Self‑care highlight section displays correctly and links to `/shop`.  
- "Why Amplexus" value section is readable and well-spaced.  
- FAQ slice shows 3–5 questions; expand/collapse works with keyboard + screen reader.  
- Final CTA at the bottom links to `/contact`.

### 3.2 Services (`/services`)

- Hero title is `Services` with intro paragraph.  
- Detailed sections for Individual Therapy, Group Classes, and Self‑Care Products appear with proper headings.  
- Approach & Philosophy copy renders as intended.  
- Insurance & Payment text is accurate and up-to-date.  
- CTA section at bottom links to `/contact`.

### 3.3 Our Team (`/team`)

- Hero title is `Our Team`.  
- Intro paragraph references founder and group practice.  
- Each clinician card shows name, credentials, specialties, and (if available) a headshot.  
- Images are properly cropped and not distorted.  
- Optional: clicking a card leads to a detail page or does nothing, depending on v1 scope (no broken links).

### 3.4 Shop (`/shop`)

- Hero title `Self‑Care Shop` appears.  
- Intro copy clearly states that products do not replace therapy.  
- Product grid loads with correct count and categories.  
- Empty states (if no products) show a clear message.

### 3.5 Product Detail (`/shop/[handle]`)

- H1 matches product title.  
- Price and key details are visible above the fold on desktop + mobile.  
- Bullet points / care notes render as a list.  
- `ShopifyBuyButton` area has a semantic wrapper (`section` with aria-label).  
- Related products (if implemented) show and link correctly.

### 3.6 Resources (`/resources`, if used)

- Hero title `Resources & FAQs`.  
- FAQ sections render correctly and are keyboard-navigable.  
- Crisis resources are clearly labeled and easy to find.

### 3.7 Contact (`/contact`)

- Hero and intro copy align with copy deck.  
- Form labels and helper text are correctly associated.  
- Short crisis disclaimer is visible near the form.  
- Submitting valid data shows success state without leaving the page (unless otherwise designed).

### 3.8 Policy Pages (`/privacy`, `/terms`, `/policies/*`)

- Pages load with placeholder or final legal text.  
- Linked from footer and, where needed, from checkout.

### 3.9 404 / 500

- Navigating to a non-existent URL shows 404 page with link back to Home.  
- If an intentional error is triggered (dev-only), 500 page appears with a friendly message.

---

## 4. Navigation & Layout

### 4.1 Header

- Logo click always returns to `/`.  
- Nav links (`Services`, `Our Team`, `Shop`, `Resources`, `Contact`) route correctly.  
- `Start Now` CTA opens `/contact`.  
- On scroll, header remains visible if sticky behavior is enabled.  
- Active state styling is visible on current page.

### 4.2 Mobile Nav

- Hamburger button toggles menu open/closed.  
- Menu covers content clearly with readable contrast.  
- All nav links are easily tappable (min 44px tap targets).  
- `Esc` key closes menu; focus returns to the hamburger button.  
- `Start Now` CTA is visible in the menu.

### 4.3 Footer

- All footer links go to the correct URLs.  
- Crisis disclaimer is readable and clearly states that the site is not an emergency service.  
- © year matches the current year.

---

## 5. Accessibility Checks (Basic)

1. **Keyboard Navigation:**  
   - Tab through header, main content, forms, and footer.  
   - Ensure focus outlines are visible on all interactive elements.  
   - Expand/collapse FAQ items using keyboard only.

2. **Screen Reader Sanity Check:**  
   - On one device, use VoiceOver/NVDA/JAWS briefly to verify:  
     - Landmarks (`header`, `main`, `footer`) are announced.  
     - Hero and primary headings read in logical order.  
     - Form labels are announced correctly.

3. **Color Contrast:**  
   - Manually spot-check hero text, navigation, buttons, and body text for contrast against backgrounds.

---

## 6. Performance & SEO Spot Checks

1. Run **Lighthouse** (Chrome DevTools) on Home and Shop pages:  
   - Confirm reasonable scores for Performance, Accessibility, Best Practices, and SEO.  
   - Note any extremely low metrics (e.g., LCP > 4s) for follow-up.

2. Verify `<title>` and `<meta name="description">` tags match the SEO content map.  
3. Confirm `<h1>` exists and is unique per page.

---

## 7. Regression Checklist (Before Each Release)

- [ ] Header nav links and CTA work on all pages.  
- [ ] Contact form validates and submits successfully.  
- [ ] `/shop` loads, and at least one product detail page works with Buy Button.  
- [ ] Footer links (privacy, terms, policies) still point to correct routes.  
- [ ] No console errors in Chrome dev tools on initial page load and during key flows.  
- [ ] 404 page still renders properly.

---

**End of Amplexus Health QA Test Plan v1**
