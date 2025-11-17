# Amplexus Health – Navigation & Footer Spec

> **Scope:** Detailed spec for the global header navigation and footer for the Amplexus Health website (Next.js + Shopify Buy Button). This should stay in sync with `sitemap.md`, the PRD, and the copy deck.

---

## 1. Global Header Navigation

### 1.1 Layout & Behavior

- **Position:** Sticky at the top of the viewport on scroll (desktop + mobile).  
- **Height:** ~64–72px on desktop, slightly shorter on mobile.  
- **Background:** `bg-white/90` with subtle blur (`backdrop-blur`) and bottom border (`border-b border-neutral-100`).  
- **Content Width:** Wrapped in `Container` component (`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`).

**Structure (Desktop):**
- Left: Brand lockup (hummingbird logo + wordmark) linking to `/`.  
- Center/Right: Primary nav links.  
- Far right: Primary CTA button (Start Now → `/contact`).

**Structure (Mobile):**
- Left: Brand lockup (smaller).  
- Right: Hamburger menu button (icon-only).  
- Mobile menu: full-screen or slide-out panel with stacked nav links and CTA button.

### 1.2 Header Nav Links

**Primary Nav Items (Desktop & Mobile):**

1. **Services**  
   - Label: `Services`  
   - URL: `/services`

2. **Our Team**  
   - Label: `Our Team`  
   - URL: `/team`

3. **Shop**  
   - Label: `Shop`  
   - URL: `/shop`

4. **Resources** (optional v1)  
   - Label: `Resources`  
   - URL: `/resources`

5. **Contact** (optional as a link, if CTA is also present)  
   - Label: `Contact`  
   - URL: `/contact`

> **Note:** Whether `Contact` appears as a text link as well as a CTA button can be decided based on visual density. Mobile menu should always include a plain `Contact` link, even if the CTA button is also displayed.

### 1.3 Primary CTA Button

- Label: `Start Now`  
- URL: `/contact`  
- Purpose: Primary entry into the Request Appointment flow.

**Styles (Tailwind-ish):**

```html
<Button
  href="/contact"
  className="ml-4 hidden sm:inline-flex rounded-full bg-brand-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#97c4d0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
>
  Start Now
</Button>
```

- On mobile, the same CTA appears within the open menu as a full-width button near the bottom of the stack.

### 1.4 Mobile Menu Behavior

- **Trigger:** Hamburger icon button on the right side of the header.  
- **ARIA:** Use `aria-expanded` and `aria-controls` on the trigger, with `role="dialog"` or `role="menu"` on the panel as appropriate.  
- **Content:** Stacked nav links in this order:  
  1. Home  
  2. Services  
  3. Our Team  
  4. Shop  
  5. Resources (if used)  
  6. Contact  
  7. Primary CTA button `Start Now` (may duplicate Contact link but styled as a button).

- **Dismissal:** Tapping the close icon, tapping outside the panel (if using overlay), or pressing `Esc` closes the menu.

### 1.5 Active & Hover States

- **Active Link:**  
  - Class: `text-brand-primary font-semibold` and optional underline/indicator.  
  - Determined by current route prefix (e.g., `/services` → Services).

- **Hover Link:**  
  - Class: `text-brand-secondary` or underlined on hover.  

---

## 2. Footer Spec

### 2.1 Layout & Structure

- **Background:** `bg-brand-dark` or deep navy; text in light neutral (`text-neutral-50`).  
- **Layout:** 2–4 columns on desktop, single column stacks on mobile.  
- **Padding:** `py-10 md:py-12`.

**Recommended Column Layout:**

1. **Brand + Short Description**  
2. **Site Links (Services & Info)**  
3. **Shop & Policies**  
4. **Contact & Crisis Disclaimer**

### 2.2 Column 1 – Brand

- **Logo/Wordmark:** Small hummingbird mark + "Amplexus Health" text.  
- **Short Description:**  
  > Amplexus Health is a mental health group practice offering psychotherapy services and supportive self‑care products to help you care for your mental health in daily life.

- **Optional Social Links:**  
  - Instagram, Facebook, etc. when provided.  
  - Icons with `aria-label` (e.g., `aria-label="Amplexus Health on Instagram"`).

### 2.3 Column 2 – Services & Info

**Heading:** `Practice`

**Links:**
- `Services` → `/services`  
- `Our Team` → `/team`  
- `Resources & FAQs` (if used) → `/resources`

### 2.4 Column 3 – Shop & Policies

**Heading:** `Shop`

**Links:**
- `Self‑Care Shop` → `/shop`

**Heading:** `Policies`

**Links:**
- `Privacy Policy` → `/privacy`  
- `Terms of Use` → `/terms`  
- `Shipping & Returns` → `/policies/shipping-and-returns`  
- `Refund Policy` → `/policies/refunds`

> Telehealth disclaimer and extended crisis resources can be linked here as they are created.

### 2.5 Column 4 – Contact & Crisis Disclaimer

**Heading:** `Contact`

- `Contact & Request Appointment` → `/contact`

**Contact Details (when finalized):**
- Email: `info@amplexushealth.com` (placeholder)  
- Phone: `[phone number]` (placeholder)  
- Location: City/State or "Telehealth-based" as needed.

**Crisis Disclaimer (Short):**

> Amplexus Health is not a crisis or emergency service. If you are in crisis or concerned about your immediate safety, call 988 (in the U.S.), go to your nearest emergency room, or contact local emergency services.

**Link:**
- `View Crisis Resources` → `/crisis-resources` (optional dedicated page).

### 2.6 Footer Bottom Bar

A slim bar below the main footer columns.

**Content:**
- Left: `© [Year] Amplexus Health LLC. All rights reserved.`  
- Right (optional): Small secondary link(s), e.g., `Site by Chromapages` → external URL.

**Behavior:**
- Year auto-updates via code.  
- Ensure text remains readable against background with sufficient contrast.

---

## 3. Accessibility Considerations

- Use `<header>` with `<nav aria-label="Main">` for the global navigation.  
- Use `<footer>` with `<nav aria-label="Footer">` for footer link groups.  
- All links must have clear, descriptive text (no "Click here").  
- Maintain visible focus states for keyboard users on all nav and footer links/buttons.  
- Ensure color contrast ratio meets WCAG AA for text and icons.

---

## 4. Implementation Notes

- Keep nav items and footer links in a shared config file (e.g., `nav.config.ts`) so they can be reused across components and updated in one place.  
- For the App Router, define `HeaderNav` and `Footer` once in `app/layout.tsx` and keep page content focused on main sections.  
- If new sections/pages are added, update this spec, `sitemap.md`, and the shared nav config together.

---

**End of Navigation & Footer Spec v1**

