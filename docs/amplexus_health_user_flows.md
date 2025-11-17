# Amplexus Health – Key User Flows

> **Scope:** High-level but concrete user flows for the core journeys on the Amplexus Health site, built on **Next.js + Shopify (Buy Button)**.
>
> These flows inform UX decisions, page structure, and backend integration. They should map cleanly to the Component Hierarchy and PRD.

---

## 1. New Visitor → Request Appointment (Prospective Client)

**Goal:** Help a new visitor understand what Amplexus does, trust the practice, and submit a Request Appointment form without confusion.

### 1.1 Entry Points

- Direct URL entry: `amplexushealth.com` (Home).  
- Google search → Home or Services page.  
- Referral link from email, provider, or social → Home, Services, or Contact page.

### 1.2 Flow Steps

1. **Landing on Home**
   - Sees **HeroSection** with value proposition (mental health support + self-care tools).  
   - Primary CTA: **"Request Appointment"** button in hero and header.

2. **Scanning Services Overview**
   - Scrolls to `ServicesGrid` preview.  
   - Reads summary cards for key services (Individual, Couples/Family, Telehealth).  
   - Optional action: clicks **"Learn more"** on a service to go to Services page.

3. **(Optional) Viewing Services page**
   - On `/services`, sees expanded descriptions, who each service is for, and Insurance/Payment overview.  
   - Reassurance via copy and possibly `FAQAccordion` slice about logistics.  
   - Prominent CTA: **"Request Appointment"** button anchored in the header and near service sections.

4. **Choosing to Reach Out**
   - Clicks **"Request Appointment"** from:  
     - Hero,  
     - Header nav,  
     - Services page, or  
     - Footer CTA.
   - User is taken to `/contact` (ContactTemplate) or scrolls to an on-page `ContactSection`.

5. **Contact / Appointment Form**
   - Sees short intro explaining:  
     - What happens after submitting (response time, next steps).  
     - Not an emergency service; crisis resources listed.
   - Form fields (`AppointmentForm`):  
     - Name  
     - Email  
     - Phone (optional or recommended)  
     - How can we help? (short paragraph)  
     - Preferred contact method (select)  
     - Optional checkboxes (Telehealth interest, days/times availability).
   - Validation:  
     - Required fields highlighted with `FormField` error states on blur/submit.  
     - Clear error text under each field.

6. **Submit Request**
   - User taps **"Submit"**.  
   - Backend handling:  
     - Form posts to backend or email service.  
     - Show loading state on button.

7. **Confirmation & Next Steps**
   - On success:  
     - Inline success message: "Thank you. We’ll reach out within X business days."  
     - Optional: email confirmation to user.  
   - On error:  
     - Friendly error message with retry suggestion.  
     - If persistent, provide alternative contact path (phone number).

### 1.3 Edge Cases

- **Form abandoned:**  
  - No persistent data is required, but optional: keep values in state so navigating back doesn’t clear everything.

- **Mobile-only users:**  
  - Ensure large tap targets, minimal typing (use selects where possible), and clear CTAs.

---

## 2. Visitor → Shop → Checkout via Shopify Buy Button

**Goal:** Allow visitors (clients, supporters, gift buyers) to easily browse self-care products and complete a purchase through Shopify checkout using the Buy Button integration.

### 2.1 Entry Points

- Home hero secondary CTA: **"Shop Self-Care"**.  
- Home `ShopHighlight` section (featured products).  
- Direct link: `/shop`.  
- Social post or email link pointing directly to a product detail page.

### 2.2 Flow – From Home to Shop

1. **Home → Shop**
   - User clicks **"Shop Self-Care"** or a featured product tile.  
   - If clicking CTA: route to `/shop`.  
   - If clicking a specific product: route directly to `/shop/[handle]`.

2. **Shop Page Browsing (`/shop`)**
   - Above-the-fold: short hero text positioning products as supportive tools (not cures).  
   - `ShopGrid` organizes products into: Apparel, Journals & Planners, Self-Care Boxes, etc.  
   - Filter/tabs allow quick switching among categories.

3. **Selecting a Product**
   - User scans product tiles (`ProductTile`):  
     - Image mockup  
     - Title  
     - Short description  
     - Price  
   - Clicks tile to view details at `/shop/[handle]`.

### 2.3 Flow – Product Detail → Buy Button

4. **Product Detail Page (`/shop/[handle]`)**
   - `Breadcrumbs` at top (Home > Shop > Product).  
   - `ProductDetailModule` shows:  
     - Larger imagery / gallery  
     - Title, price  
     - Short description + extended details  
     - Bullet list of benefits / what’s included  
     - Care/usage notes

5. **Variant Selection (If Applicable)**
   - If product has variants (e.g., size, color):  
     - Variation controls either in Shopify widget or pre-selection UI.  
     - Clear labels: e.g., Size: S, M, L, XL.

6. **Triggering Shopify Buy Button**
   - `ShopifyBuyButton` component mounts a Shopify product component in a designated area.  
   - The visible CTA button uses brand accent styling and text like **"Add to cart"** or **"Buy now"**.

7. **Cart & Checkout**
   - When user clicks the Buy Button:  
     - Shopify cart drawer appears (if configured) or user is redirected to Shopify-hosted checkout.  
   - User reviews items in cart (quantity, variants, price).  
   - Proceeds through Shopify checkout steps (shipping, payment, confirmation) entirely on Shopify side.

8. **Order Confirmation**
   - After payment, Shopify displays its own **Order Confirmation** page.  
   - Optional: Shopify email receipt sent to user.

### 2.4 Edge Cases & UX Considerations

- **Multiple products in session:**  
  - If cart drawer is used, ensure `ShopifyCartToggle` is accessible from header.

- **Product out of stock:**  
  - Shopify Buy Button should show disabled state or an inline message (if configured).  
  - At the Next.js level, show a short note: "Currently unavailable".

- **Error with Buy Button script:**  
  - Fallback message: "We’re having trouble loading the purchase options. Please refresh or reach out to us for help."  
  - Include contact link for assistance.

---

## 3. Admin Flow – Add New Product → Display on Site

**Goal:** Let the practice owner/admin add a new self-care product in Shopify and have it appear on the site’s Shop page with minimal technical work.

### 3.1 Preconditions

- Shopify store is configured with:
  - Products, collections, POD integration.  
  - Buy Button sales channel enabled.  
- Next.js site has:
  - `ShopPage` pulling product metadata (either from a config file or from Shopify data in v2).  
  - `ShopifyBuyButton` component wired with domain + storefront token.

### 3.2 Flow Steps – Shopify Side

1. **Admin Logs into Shopify**
   - Navigates to **Products → Add product**.

2. **Create Product**
   - Enters:  
     - Title  
     - Description (aligned with mental health tone guidelines)  
     - Price  
     - Product type and tags (e.g., Category: Journals & Planners, Tag: Self-care)  
     - Media: uploads mockups or connects POD app mockups.
   - Configures **variants** (sizes, colors) if needed.  
   - Assigns to relevant **collections** (e.g., "All products", "Journals & Planners").

3. **Configure POD (if applicable)**
   - In POD app (Printful/Printify/etc.), link product variant to design/print files.  
   - Sync with Shopify.

4. **Enable Product Availability**
   - Set product to active and available in Online Store & Buy Button sales channel.

5. **Create/Confirm Buy Button**
   - Go to **Sales channels → Buy Button**.  
   - Generate new **Product Buy Button** (if using code snippets) or confirm product ID for programmatic use.  
   - Copy product ID or embed code.

### 3.3 Flow Steps – Next.js Side (Developer or Guided Admin)

There are two patterns, depending on how dynamic you want v1 to be.

#### Pattern A – Static Product Config (v1 Simple)

6A. **Update Product Config File**
   - Developer (or trained admin) edits a `products.config.ts` file in the Next.js repo with a new entry:
     - `title`, `slug/handle`, `summary`, `price`, `image`, `productId` (Shopify ID), `category`.

7A. **Deploy Changes**
   - Commit and deploy.  
   - `/shop` now includes this product in the `ShopGrid`, and product detail route resolves to `ProductTemplate` with the correct `ShopifyBuyButton`.

#### Pattern B – Dynamic Fetch from Shopify (v2+)

6B. **Automatic Listing**
   - Shop page fetches product list from Shopify Storefront API or a minimal proxy endpoint.  
   - Any product tagged with e.g., `show_on_site` automatically appears.

7B. **No Code Deployment**
   - Admin only uses Shopify UI; the site reflects changes automatically (subject to cache/ISR).

### 3.4 Success & Feedback

- After deployment or sync, admin visits `/shop` and verifies:  
  - Product card appears correctly.  
  - Clicking into detail page shows correct information.  
  - Buy Button works and routes to checkout.

- If any step fails (missing product ID, script error), display a developer-friendly console log and user-friendly on-page message.

---

## 4. Summary of Core Flows

1. **New Visitor → Request Appointment**  
   - Home → Services (optional) → Contact → Appointment form → Confirmation.

2. **Visitor → Shop → Checkout**  
   - Home/Shop → Product list → Product detail → Shopify Buy Button → Checkout.

3. **Admin → Add Product → Live on Site**  
   - Shopify product creation → Buy Button config → (Optional) code config update → Product visible in Shop.

These flows should guide wireframes, UX copy, and technical priorities (e.g., which components need the most robust error handling and which pages are most critical for performance and accessibility).

---

**End of Amplexus Health User Flows v1**
