# Amplexus Health – POD (Print-On-Demand) Workflow

> **Scope:** Step‑by‑step workflow for creating Amplexus Health self‑care products using a print‑on‑demand (POD) provider (e.g., Printful, Printify) connected to Shopify. This is meant to be a reusable checklist from **concept → design → POD → Shopify → live on site**.

---

## 1. POD Strategy Overview

Amplexus Health will primarily use POD for:

- **Apparel** – tees, crewnecks, hoodies, socks.  
- **Drinkware** – mugs, tumblers.  
- **Accessories** – totes, phone cases, etc.

Goals:

- Keep upfront costs low (no large inventory buys).  
- Allow for small-batch experiments (limited designs).  
- Maintain a consistent visual identity aligned with the Amplexus brand and mental health values.

---

## 2. Concept & Brief

Before opening the POD app, define the concept.

### 2.1 Concept Template

For each new product, capture:

- **Product type:** (e.g., crewneck, journal cover design for POD notebook, mug).  
- **Working name:** (e.g., `Soft Hold Crewneck`).  
- **Category:** apparel, mugs, accessories, etc.  
- **Tone/Theme:** grounding, rest, reflection, affirmation.  
- **Primary message/text:** exact wording that will appear (if any).  
- **Color palette:** align with Amplexus design system.  
- **Placement:** front chest, back print, sleeve print, wrap print, etc.

Keep this in a simple design brief (Notion/MD) so that future you knows why the design looks the way it does.

---

## 3. Design & File Prep

### 3.1 Art Direction Guidelines

- **Tone:** warm, calming, non‑clinical. Avoid harsh imagery or language.  
- **Typography:** use brand typefaces where possible, or close POD-safe matches.  
- **Color:** lean on neutrals and soft accents (see design system).  
- **Message:** avoid diagnostic/cure language (no "fix your anxiety"), focus on gentle prompts or neutral statements.

### 3.2 Technical Specs (General)

Exact specs vary by POD provider and product, but general rules:

- **Resolution:** 300 DPI.  
- **Color mode:** RGB (as required by most POD providers).  
- **Format:** PNG for transparency, JPG if full-bleed without transparency.  
- **Safe zone:** Keep important text/design elements inside the provider’s safe area.  
- **Bleed:** Extend background colors/images to full template edges where required.

### 3.3 File Naming

Use a consistent pattern:

> `[CAT]_[SHORTNAME]_[COLOR]_[VERSION].png`

Examples:

- `APP_SOFTHOLD_SAND_v1.png`  
- `MUG_GENTLEMORNING_WHITE_v2.png`

---

## 4. POD App Setup & Product Creation

*(Steps will be slightly different by provider; this is the generic flow.)*

### 4.1 Connect POD App to Shopify

1. From Shopify Admin, go to **Apps → Customize your store**.  
2. Install the chosen POD app (Printful, Printify, etc.).  
3. Follow the app’s onboarding to connect it to your Shopify store.

### 4.2 Create a Product in POD App

1. In POD app, click **Create Product**.  
2. Choose the **base product** (e.g., unisex crewneck, 11oz mug, canvas tote).  
3. Upload your prepared design file(s).  
4. Position artwork within the template using safe zones and preview mockups.  
5. Choose colors/sizes that align with the product concept and brand.

### 4.3 Pricing & Profit Margin

1. Review the POD base cost (e.g., $14 for a crewneck).  
2. Set the **retail price** in the POD app so that:  
   - Price is accessible for the audience.  
   - There is a reasonable margin after POD cost + Shopify fees.  
3. Sync the product to Shopify.

### 4.4 Syncing to Shopify

After publishing from the POD app:

- Confirm the product appears in **Shopify → Products** with:  
  - Correct title.  
  - Pricing.  
  - Variants (sizes/colors).  
  - Media (mockups).  
- Assign the product to the correct **collections** (Apparel, etc.).  
- Add required **tags** (e.g., `cat:apparel`, `status:core`, `theme:grounding`, `show_on_site`).

---

## 5. Shopify & Frontend Integration

### 5.1 Shopify Details

1. Add/refine description to align with Amplexus copy tone.  
2. Add bullet list of what’s included and any care notes.  
3. Double-check shipping profile is correct (light vs heavy items).

### 5.2 Connect to Next.js Frontend

**For v1 (config-based):**

1. Obtain the **Shopify Product ID** (or GID) for the new product.  
2. Add a new entry in `products.config.ts` that maps:
   - `handle` (slug used on `/shop/[handle]`).  
   - `title`, `price`, `category`, `image`, `shopifyProductId`, etc.  
3. Deploy changes to staging, then production.

**For v2 (dynamic Storefront API):**

- Ensure product has `show_on_site` tag and correct collection membership.  
- Confirm storefront query pulls this product into `/shop` and its detail view.

---

## 6. QA for New POD Products

Always run a quick QA pass for each new item.

### 6.1 Visual QA

- Check mockups in POD app (front, back, side views if available).  
- Confirm no text is cut off at edges or wrapped unintentionally.  
- Verify colors look roughly correct on a calibrated-ish display.

### 6.2 Shopify QA

- Product title, description, price all look intentional.  
- Variants list expected sizes/colors (no weird defaults).  
- Collections and tags are set (so it surfaces in the right category).  
- Product is **Active** and available in **Buy Button** channel.

### 6.3 Frontend QA

On staging:

1. Go to `/shop` → ensure the product appears in the grid under the correct category filter.  
2. Click into `/shop/[handle]`.  
3. Check that images, title, price, bullets, and care notes render correctly.  
4. Verify `ShopifyBuyButton` loads without errors and add to cart works.

### 6.4 Sample Orders (Optional but Recommended)

- Place a small number of internal/sample orders (especially for new base products) to check:
  - Print quality and alignment.  
  - Fabric/feel for apparel.  
  - Packaging and unboxing experience.

---

## 7. Retiring or Updating POD Products

### 7.1 Retiring a Product

1. In Shopify, set **Status** to `Draft` or remove sales channels.  
2. Remove or hide the product from `/shop` via:  
   - Removing `show_on_site` tag (for dynamic).  
   - Removing from `products.config.ts` (for config-based).  
3. In POD app, unpublish or archive if you want to fully retire.

### 7.2 Updating a Design

1. In POD app, update artwork (v2 file) and push changes to Shopify.  
2. Confirm mockups and variants remain correct.  
3. If product name or concept changes significantly, update copy + config.

---

## 8. Workflow Summary Checklist

**For each new POD product:**

1. [ ] Define concept (type, theme, message, color, placement).  
2. [ ] Create design file at correct resolution and format.  
3. [ ] Create & position product in POD app.  
4. [ ] Set pricing and sync to Shopify.  
5. [ ] Add collections, tags, and refine description in Shopify.  
6. [ ] Map product to frontend (config or dynamic).  
7. [ ] QA in POD app, Shopify, and staging site.  
8. [ ] Optionally order a sample to verify print quality.

---

**End of Amplexus Health POD Workflow v1**

