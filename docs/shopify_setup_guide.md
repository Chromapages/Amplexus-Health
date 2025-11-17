# Amplexus Health – Shopify Setup Guide (Buy Button + Products)

> **Scope:** Practical, re-usable guide for setting up Shopify for Amplexus Health, focusing on **Buy Button**, product/catalog structure, and how it connects to the Next.js site. This is written for future you + the client if you ever walk them through the admin.

---

## 1. Overview

Amplexus Health is using Shopify primarily as:

1. A **product + order backend** (products, variants, inventory, orders, taxes).  
2. A **Buy Button provider** to embed purchase flows into the Next.js marketing site.

We are **not** building a full Liquid/Online Store theme. Most of the user‑facing experience lives on the custom site; Shopify handles:

- Product data  
- Checkout & payments  
- Taxes & basic reporting

---

## 2. Initial Shopify Store Setup

These steps are one‑time per store.

### 2.1 Create / Confirm the Store

1. Create a Shopify account (if not already done).  
2. Set store name to something recognizable (e.g., `amplexus-health`).  
3. In **Settings → Store details**, confirm:
   - Legal business name (Amplexus Health LLC).  
   - Address and contact email.  
   - Default currency and timezone.

### 2.2 Payments & Taxes

1. Go to **Settings → Payments** and set up a payment provider (Shopify Payments, Stripe, etc.). citeturn4search0turn4search6  
2. In **Settings → Taxes and duties**, configure:
   - Primary tax region(s).  
   - Whether prices include tax.
3. Confirm that tax settings match your accountant’s guidance.

### 2.3 Shipping

1. In **Settings → Shipping and delivery**:
   - Set up default shipping profiles for physical self‑care products.  
   - Decide simple rules for v1 (e.g., flat rate per region or carrier‑calculated rates).  
2. Create clear names for shipping options (e.g., `Standard`, `Expedited`).

---

## 3. Enable the Buy Button Sales Channel

The **Buy Button** sales channel lets us embed Shopify products into the Next.js site.

### 3.1 Add Buy Button Channel

1. From your Shopify admin, go to **Settings → Apps and sales channels**. citeturn4search0turn4search4  
2. If **Buy Button** is not listed, click **Shopify App Store**.  
3. Search for **"Buy Button"** and install the official **Buy Button** sales channel.  
4. Once installed, **Buy Button** appears under **Sales channels** in the left menu.

> You only need to do this once. After that, you can create as many Buy Buttons as you need.

### 3.2 Supported Payment Gateways

- The Buy Button requires a supported payment gateway. If checkout fails, verify that payments are correctly configured in **Settings → Payments**. citeturn4search0turn4search6

---

## 4. Product & Catalog Structure

### 4.1 Collections & Categories

We’ll align Shopify **collections** with the site’s categories:

- **Apparel** – shirts, hoodies, etc.  
- **Journals & Planners** – notebooks, planners, guided journals.  
- **Self‑Care Boxes** – curated boxes with multiple items.  
- **Mugs & Drinkware** – mugs, tumblers.  
- (Optional) **Accessories** – tote bags, phone cases, etc.

Each product should belong to at least one collection (e.g., All Products) and its primary category.

### 4.2 Product Fields (Per Product)

For each self‑care product in Shopify:

- **Title** – clear product name (e.g., `Heal Within Guided Journal`).  
- **Description** – use the copy deck tone: supportive, not medical.  
- **Price** – base retail price.  
- **Product type** – e.g., `Journal`, `Apparel`, `Box`.  
- **Vendor** – `Amplexus Health` (or print‑on‑demand vendor if needed).  
- **Media** – upload mockups/images from the design pipeline.  
- **Variants** – sizes (S, M, L, XL), color options, etc.  
- **Tags** – include tags for collections and flags like `show_on_site` if used.

> The Next.js frontend will either read from a static config file referencing the Shopify product ID, or later pull directly from Shopify’s Storefront API.

---

## 5. Creating a Buy Button

We’ll use Shopify’s **Buy Button** to generate embeddable purchase widgets for the Next.js site.

### 5.1 Create a Product Buy Button

1. In Shopify admin, go to **Sales channels → Buy Button**. citeturn4search1turn4search2  
2. Click **Create a Buy Button**.  
3. Choose **Product Buy Button**.  
4. Select the product you want to create a button for and click **Select**.  
5. In the editor, customize:
   - **Layout** – button only, or button + product details.  
   - **Button text** – e.g., `Add to cart`, `Buy now`.  
   - **Colors** – match brand accent (`#ABD6E0`) and text color.  
   - **Action** – open cart or go straight to checkout.
6. Click **Next** and then **Copy code** to copy the generated HTML/JS snippet.

### 5.2 (Option A) Use Embed Code Directly

_For very simple embeds or rapid prototypes._

- You can paste the Shopify Buy Button embed HTML directly into the Next.js component via `dangerouslySetInnerHTML`.  
- This is quick but less structured; the preferred pattern is to wrap this logic in a dedicated `ShopifyBuyButton` React component.

### 5.3 (Option B) Wrap in `ShopifyBuyButton` Component (Preferred)

1. Create a React component (e.g., `components/shopify/ShopifyBuyButton.tsx`) that:
   - Loads the `buybutton.js` script once.  
   - Initializes the product component using Shopify’s JS SDK with a given **product ID** and **Shopify domain + token**.  
   - Renders it into a container `div` with a stable `id`.
2. Store Shopify **product IDs** and config in a `products.config.ts` file or environment variables.

This approach lets you:

- Reuse the same logic across product tiles and product detail pages.  
- Control layout/styling with Tailwind wrappers around the Buy Button container.  
- Swap out the Buy Button for the Storefront API in the future with minimal changes.

---

## 6. Print-On-Demand (POD) Integration

### 6.1 Choose POD Provider

Common options: Printful, Printify, Gelato, etc. These integrate as apps inside Shopify.

**Steps (high level):**

1. From Shopify admin, go to **Apps → Customize your store** and search for your POD provider.  
2. Install the POD app and follow their onboarding to connect your store.  
3. In the POD app, create products (e.g., shirts, mugs) and sync them to Shopify.

### 6.2 Design File Requirements

- Use high‑resolution designs following POD specs (size, DPI, safe areas).  
- Keep designs consistent with the Amplexus visual identity and mental‑health‑appropriate messaging.

### 6.3 Syncing Products

- After publishing a product in the POD app, confirm it appears in **Products** in Shopify with correct variants and pricing.  
- Assign the product to appropriate collections (Apparel, Self‑Care Boxes, etc.).

---

## 7. Connecting Shopify to the Next.js Site

### 7.1 Environment Variables

Create the following env vars in `.env.local` for the Next.js app:

- `SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"`  
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN="..."`  
- `SHOPIFY_BUY_BUTTON_API_KEY` (if using a dedicated key)  

> Storefront API token is generated under **Apps and sales channels → Develop apps → [Your app] → Configuration → Storefront API**.

### 7.2 Mapping Products

**v1 Simple:**

- Keep a `products.config.ts` mapping of:

```ts
export const products = [
  {
    handle: "heal-within-journal",
    title: "Heal Within Journal",
    price: 32,
    category: "Journals & Planners",
    shopifyProductId: "1234567890",
  },
  // more products
];
```

- Use `handle` for the dynamic route `/shop/[handle]` and pass `shopifyProductId` into `ShopifyBuyButton`.

**v2 Dynamic:**

- Fetch product data from Shopify Storefront API at build time or runtime.  
- Filter by tags/collections (e.g., tag `show_on_site`) to decide what appears in `/shop`.

### 7.3 Styling the Buy Button

- Keep Shopify’s Buy Button UI as minimal as possible and let the surrounding Next.js components define layout.  
- Match button colors to brand accent (`#ABD6E0`) and text to white for readability.  
- Wrap the widget in a semantic section:

```jsx
<section aria-label={`Purchase options for ${title}`} className="mt-6">
  {/* ShopifyBuyButton component here */}
</section>
```

---

## 8. Testing & QA

Before launch:

1. **Test Products:**  
   - Ensure each product appears on `/shop`.  
   - Confirm product detail pages load correctly.

2. **Test Buy Buttons:**  
   - Add to cart from product detail page.  
   - Proceed to checkout.  
   - Complete at least one **test order** using a real or test payment method.

3. **Verify Emails & Policies:**  
   - Check that order confirmation emails are accurate and branded.  
   - Confirm policy links (shipping, refunds) are accessible from checkout.

4. **Mobile Testing:**  
   - Tap targets, layout, and Buy Button behavior on small screens.

5. **Accessibility Checks:**  
   - Keyboard navigation through Buy Button area.  
   - Sufficient contrast on buttons and text.

---

## 9. Ongoing Maintenance

- When adding a new product:  
  1. Create/sync it in Shopify (and POD, if relevant).  
  2. Assign collections and tags.  3. Add it to `products.config.ts` (v1) or confirm it appears via the dynamic fetch rules (v2).

- Periodically review:  
  - Tax settings and shipping rates.  
  - Inventory and discontinued products.  
  - Policy pages (shipping, refunds) to ensure they match current practice.

---

**End of Amplexus Health Shopify Setup Guide v1**
