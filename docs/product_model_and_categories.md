# Amplexus Health – Product Model & Categories

> **Scope:** Define how Amplexus Health self‑care products are structured, categorized, and named across **Shopify** and the **Next.js** frontend. This doc should stay in sync with `shopify-setup-guide.md`, `design-system.md`, and the copy deck.

---

## 1. Product Model Overview

Amplexus Health products live in two places:

1. **Shopify Product** – the system of record for price, inventory, variants, and checkout.  
2. **Frontend Config / Storefront API** – how products are grouped, surfaced, and described on the marketing site.

We want a model that:

- Is simple enough for the practice owner to maintain in Shopify.  
- Supports clear **mental health–aligned storytelling** (grounding, reflection, rest).  
- Plays nicely with **Buy Button** integration and a future Storefront API–powered shop.

---

## 2. Core Product Fields

These fields MUST be populated for every product.

### 2.1 Shopify Fields

- **Title** – Clear, human-readable product name.  
  - Example: `Daily Grounding Journal`, `Soft Hold Crewneck`.  
- **Description** – Supportive, non‑medical description.  
- **Product Type** – High-level internal type (e.g., `Journal`, `Apparel`, `Box`).  
- **Vendor** – `Amplexus Health` (or POD vendor when required).  
- **Price** – Base retail price.  
- **Status** – Active / Draft. Only **Active** products show in the shop.  
- **Sales Channels** – Must be active for **Buy Button**.

### 2.2 Variant Fields

- **Options** – up to 3 (e.g., `Size`, `Color`, `Style`).  
- **Option values** – e.g., Size: `S`, `M`, `L`, `XL`; Color: `Black`, `Sand`.  
- **SKU** – see naming convention below.  
- **Inventory policy** – POD items can be set to track inventory via provider or not track inventory, depending on sync.

### 2.3 Media

- **Primary media** – hero mockup used on tiles and product detail.  
- **Secondary media** – close-up, lifestyle shot, or alternate angle.

### 2.4 Tagging (Required)

We’ll use **tags** to control grouping and visibility:

- **Category tags** – e.g., `cat:apparel`, `cat:journals`, `cat:self-care-box`, `cat:mug`.  
- **Theme tags** – e.g., `theme:grounding`, `theme:reflection`, `theme:affirmation`, `theme:rest`.  
- **Status tags** – e.g., `status:core`, `status:seasonal`, `status:limited`.  
- **Visibility tag** – `show_on_site` (used later if we query via API).

> For v1, collections will be the primary UI grouping; tags give us flexible filtering later.

---

## 3. Product Categories

These categories map to Shopify **collections** and to the frontend **filters/tabs** on `/shop`.

### 3.1 Apparel

**Examples:**
- `Soft Hold Crewneck`  
- `Grounded In Progress Tee`  
- `Gentle Reminder Hoodie`

**Use When:**
- Wearable items (shirts, hoodies, sweatshirts, socks, etc.).

**Shopify Setup:**
- Collection handle: `apparel`  
- Tag: `cat:apparel`

**Attributes:**
- Primary variant: `Size` (S–3XL).  
- Secondary variant: `Color` (as needed).

---

### 3.2 Journals & Planners

**Examples:**
- `Daily Grounding Journal`  
- `Weekly Balance Planner`  
- `Therapy Session Reflection Notebook`

**Use When:**
- Bound paper goods used to write, plan, or reflect.

**Shopify Setup:**
- Collection handle: `journals-and-planners`  
- Tag: `cat:journals`

**Attributes:**
- Format: `Hardcover` / `Softcover` (description only or variant if needed).  
- Page count (description).  
- Interior style (lined, dotted, guided prompts).

---

### 3.3 Self‑Care Boxes

**Examples:**
- `Evening Wind Down Box`  
- `Grounding Essentials Box`

**Use When:**
- Bundles that combine multiple items (e.g., journal + mug + candle).

**Shopify Setup:**
- Collection handle: `self-care-boxes`  
- Tag: `cat:self-care-box`

**Attributes:**
- Contents list in description (`Includes:` bullets).  
- Clear note that items are not medical devices or treatment.

---

### 3.4 Mugs & Drinkware

**Examples:**
- `Gentle Morning Mug`  
- `Breath Break Tumbler`

**Use When:**
- Mugs, tumblers, water bottles.

**Shopify Setup:**
- Collection handle: `mugs-and-drinkware`  
- Tag: `cat:mug`

**Attributes:**
- Capacity (oz), material (ceramic, stainless).  
- Care notes (dishwasher/microwave safe?).

---

### 3.5 Accessories

**Examples:**
- `Carry Kindness Tote`  
- `Reminder Phone Case`

**Use When:**
- Tote bags, phone cases, stickers, enamel pins, etc.

**Shopify Setup:**
- Collection handle: `accessories`  
- Tag: `cat:accessory`

**Attributes:**
- Device model (for phone cases).  
- Size specs for totes.

---

## 4. Product Lines & Status

We’ll use **lines** and **status** to keep the catalog manageable.

### 4.1 Product Lines

- **Core Line** – Always-on items that represent the brand (e.g., flagship journal, primary crewneck).  
- **Seasonal Line** – Limited-run designs tied to seasons or campaigns (e.g., winter rest box).  
- **Collab Line** (future) – Collaborations with other creators/practices.

### 4.2 Implementation

Use tags to track line + status:

- `status:core` – “evergreen” items; should always appear on `/shop`.  
- `status:seasonal` – items that may be hidden or deprioritized in off-seasons.  
- `status:limited` – low-quantity or one-time drops.

Frontend can use this for **sorting** (e.g., core first) or for badges on product tiles.

---

## 5. Naming Conventions & SKUs

### 5.1 Product Naming

**Pattern:**

> `[Tone / Theme] [Noun]`

- Tone/Theme words: `Daily`, `Gentle`, `Grounded`, `Soft`, `Balance`.  
- Nouns: `Journal`, `Planner`, `Crewneck`, `Box`, `Mug`.

**Examples:**
- `Grounded In Progress Tee`  
- `Soft Hold Crewneck`  
- `Daily Grounding Journal`

Avoid:
- Clinical or diagnostic language in the product name (e.g., "Anxiety Fix Mug").

### 5.2 SKU Pattern

**Pattern:**

> `[CAT]-[LINE]-[SHORTNAME]-[VARIANT]`

Where:
- `CAT` – `APP`, `JNL`, `BOX`, `MUG`, `ACC`.  
- `LINE` – `CORE`, `SEAS`, `LIM`.  
- `SHORTNAME` – 2–3 letters for the product.  
- `VARIANT` – `BLK-M`, `SAND-L`, etc.

**Example:**
- `APP-CORE-SHC-BLK-M` → Apparel, Core line, Soft Hold Crewneck, Black, Medium.

---

## 6. Frontend Product Shape

Even if v1 uses a static config file, keep the shape aligned with this interface so it’s easy to swap in Shopify data later.

```ts
export interface AmplexusProduct {
  handle: string; // used for /shop/[handle]
  title: string;
  subtitle?: string;
  price: number;
  category: "apparel" | "journals" | "self-care-box" | "mug" | "accessory";
  themes?: string[]; // ["grounding", "rest"]
  status?: "core" | "seasonal" | "limited";
  image: { src: string; alt: string };
  bullets?: string[];
  careNotes?: string;
  shopifyProductId: string; // numeric ID or gid
}
```

This type can live in `src/types/product.ts` and be reused across `ShopGrid`, `ProductTile`, and `ProductDetailModule`.

---

## 7. Category-to-UI Mapping

Summary of how categories show up in the UI:

- **Apparel** → `/shop` filter: `Apparel`  
- **Journals & Planners** → filter: `Journals & Planners`  
- **Self‑Care Boxes** → filter: `Self‑Care Boxes`  
- **Mugs & Drinkware** → filter: `Mugs & Drinkware`  
- **Accessories** → filter: `Accessories`

Each filter corresponds to a product `category` and/or Shopify collection handle.

---

**End of Amplexus Health Product Model & Categories v1**

