# Amplexus Health – Analytics & Events

> **Scope:** Define the analytics strategy, events, and naming conventions for the Amplexus Health Next.js + Shopify implementation.
>
> Goal: Lightweight, privacy-conscious tracking focused on understanding key journeys (request appointment, shop engagement, Buy Button interactions).

---

## 1. Tooling & Principles

### 1.1 Preferred Stack

- **Primary option:** Privacy-friendly analytics such as Plausible, Simple Analytics, or a similar tool.  
- **Alternative:** Google Analytics 4 (GA4) if required by client.

### 1.2 Principles

- Track **flows, not people** – focus on high-level behavior (e.g., how many users reach `/contact` and submit).  
- Avoid collecting sensitive personal data beyond what is necessary for form submissions.  
- Ensure the privacy policy reflects whatever analytics tools are in use.

---

## 2. Core Metrics & Questions

We care most about:

1. **Request Appointment funnel**  
   - How many visitors reach `/contact`?  
   - How many successfully submit the request form?

2. **Shop engagement**  
   - How many users visit `/shop`?  
   - Which products get the most views?  
   - Which Buy Buttons are clicked most often?

3. **Content engagement**  
   - Which pages are most visited?  
   - Do users navigate to Services/Team from Home, or bounce?

---

## 3. Event Naming Conventions

Use **snake_case** or **lowerCamelCase** consistently. This doc uses snake_case for clarity.

**General pattern:**

> `category_action_[label]`

Where:
- `category` – `nav`, `contact`, `shop`, `product`, `faq`, etc.  
- `action` – `click`, `submit`, `view`, `open`, `toggle`.

---

## 4. Defined Events

### 4.1 Navigation

**`nav_click_primary`**

- **Triggered when:** A user clicks a main navigation link in the header.  
- **Properties:**
  - `link_label` (e.g., `Services`, `Our Team`, `Shop`, `Contact`)  
  - `link_href` (e.g., `/services`)

**`nav_click_cta`**

- **Triggered when:** A user clicks the `Start Now` CTA in the header or hero.  
- **Properties:**
  - `location` (e.g., `header`, `home_hero`, `home_final_cta`)

---

### 4.2 Contact / Request Appointment

**`contact_view`**

- **Triggered when:** `/contact` page is viewed.  
- **Properties:**  
  - `source` (if available; e.g., `nav`, `home_hero_cta`, `services_cta`).

**`contact_submit_attempt`**

- **Triggered when:** User clicks submit on the contact form (before validation).  
- **Properties:**
  - `valid` (boolean – result of client-side validation).  
  - `error_count` (number of fields failing validation).

**`contact_submit_success`**

- **Triggered when:** API returns success from `/api/contact`.  
- **Properties:**
  - `response_time_ms` (optional).  
  - `source_page` (should be `contact`).

**Note:** Do **not** send the actual message content or other sensitive data to analytics.

---

### 4.3 Shop & Products

**`shop_view`**

- **Triggered when:** `/shop` is viewed.  
- **Properties:**
  - `category_filter` (if any; e.g., `all`, `apparel`, `journals`, etc.).

**`shop_filter_change`**

- **Triggered when:** User changes the category filter on `/shop`.  
- **Properties:**
  - `category` (new selected category).

**`product_tile_click`**

- **Triggered when:** User clicks on a product tile in the shop grid.  
- **Properties:**
  - `product_handle`  
  - `product_title`  
  - `category`

**`product_view`**

- **Triggered when:** `/shop/[handle]` product detail page is viewed.  
- **Properties:**
  - `product_handle`  
  - `product_title`  
  - `category`

---

### 4.4 Buy Button & Checkout

**`buy_button_render`**

- **Triggered when:** Shopify Buy Button successfully initializes on a product page.  
- **Properties:**
  - `product_handle`  
  - `product_id`

**`buy_button_click`**

- **Triggered when:** User clicks the Buy Button (Add to Cart / Buy Now).  
- **Properties:**
  - `product_handle`  
  - `product_title`  
  - `product_id`  
  - `action` (e.g., `add_to_cart`, `direct_checkout`).

**`checkout_started`** (best-effort)

- **Triggered when:** A user is redirected to Shopify checkout (if detectable).  
- **Properties:**
  - `source` (`product_page`)  
  - `product_handle` (if single-product checkout).

> Completed orders are best tracked from the Shopify side; this app focuses on pre-checkout behavior.

---

### 4.5 FAQ & Resources

**`faq_toggle`**

- **Triggered when:** A user opens or closes an FAQ item.  
- **Properties:**
  - `question` (short key or slug, not full text if it’s too long).  
  - `is_open` (boolean).

---

## 5. Implementation Pattern

### 5.1 Analytics Helper

Create a small helper in `lib/analytics.ts`:

```ts
export type AnalyticsEventName =
  | "nav_click_primary"
  | "nav_click_cta"
  | "contact_view"
  | "contact_submit_attempt"
  | "contact_submit_success"
  | "shop_view"
  | "shop_filter_change"
  | "product_tile_click"
  | "product_view"
  | "buy_button_render"
  | "buy_button_click"
  | "checkout_started"
  | "faq_toggle";

export function track(event: AnalyticsEventName, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Example for Plausible
  // @ts-ignore
  window.plausible?.(event, { props });
}
```

Use this helper inside components instead of calling the analytics library directly.

### 5.2 Example Usage

```tsx
// In a nav link
<Button
  onClick={() => {
    track("nav_click_cta", { location: "header" });
  }}
>
  Start Now
</Button>
```

---

## 6. Environments & Privacy

- Analytics scripts should be **enabled only in production** by default.  
- Respect `NEXT_PUBLIC_ANALYTICS_*` env vars from `env-config.md`.  
- Ensure the privacy policy mentions the chosen analytics provider and what’s collected.

---

## 7. Minimal Dashboard Questions

When you log into the analytics tool, aim to answer:

1. How many visitors viewed `/contact` this week vs last week?  
2. What percentage of `/contact` views resulted in a `contact_submit_success`?  
3. Which `/shop` categories are most visited?  
4. Which products have the highest `product_view` and `buy_button_click` counts?  
5. Are visitors using nav CTAs (`nav_click_cta`) more than hero CTAs, or vice versa?

---

**End of Amplexus Health Analytics & Events v1**

