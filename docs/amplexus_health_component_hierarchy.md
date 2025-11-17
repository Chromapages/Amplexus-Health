# Amplexus Health Component Hierarchy

> **Scope:** Component architecture for the Amplexus Health marketing + shop site built with **Next.js, TypeScript, Tailwind CSS, and Shopify Buy Button**.
>
> Goal: Create a clean, reusable library that makes it easy to build pages, keep visuals consistent with the Design System, and isolate the Shopify integration.

---

## 1. Layering Model

We’ll use a simple **atoms → molecules → organisms → templates → pages** mental model.

- **Atoms:** Basic UI building blocks (buttons, text, inputs, icons, layout primitives).  
- **Molecules:** Small combinations of atoms (form fields, card shells, nav link groups).  
- **Organisms:** Larger, reusable sections of the interface (hero, grids, header, footer, product modules).  
- **Templates:** Page-level layouts composed of organisms (HomeTemplate, ServicesTemplate, etc.).  
- **Pages:** Next.js route files that wire data + templates (e.g., `app/page.tsx`, `app/services/page.tsx`).

File structure example:

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    shopify/
  templates/
  lib/
  app/
```

---

## 2. Atoms

### 2.1 Button

**Component:** `Button`

- Variants: `primary`, `secondary`, `ghost`, `link`.  
- Props: `variant`, `size`, `as` (for polymorphic usage), `href` when rendered as link.  
- Uses brand accent/primary colors and rounded-full shape.

### 2.2 TextLink

**Component:** `TextLink`

- Styled anchor for inline usage (body copy links, secondary actions).  
- Props: `href`, `children`, `intent` (e.g., `default`, `subtle`, `emphasis`).

### 2.3 Heading & Text

**Components:** `Heading`, `Text`

- Wrap the typography system (DM Serif Text for display, Inter for body).  
- Props: `level` (`1–4`), `as`, `align`, `tone`.

### 2.4 Tag / Badge

**Component:** `Tag`

- Small pill for labels like "New", "Telehealth", "Limited".  
- Props: `variant` (`accent`, `neutral`, `outline`), `icon` (optional).

### 2.5 Input, Textarea, Select, Checkbox, Radio

**Components:** `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`

- Basic form controls styled according to the Design System.  
- All support `id`, `name`, `value`, `onChange`, `aria-*` props.

### 2.6 IconWrapper

**Component:** `IconWrapper`

- Provides consistent sizing, color, and background for icons.

### 2.7 Layout Primitives

**Components:** `Container`, `Section`

- `Container`: centers content with max-width and horizontal padding.  
- `Section`: wraps a section with vertical padding and optional background.

---

## 3. Molecules

### 3.1 NavLinkGroup

**Component:** `NavLinkGroup`

- Renders header navigation links from a config array.  
- Props: `links` (`{ href, label }[]`), `alignment` (`left`, `center`, `right`).

### 3.2 BrandMark

**Component:** `BrandMark`

- Encapsulates the hummingbird logo + wordmark lockup.  
- Props: `variant` (`full`, `icon-only`, `horizontal`), `size`.

### 3.3 FormField

**Component:** `FormField`

- Combines label + control + helper/error text.  
- Props: `label`, `htmlFor`, `error`, `helper`, `required`, `children`.

### 3.4 FAQItem

**Component:** `FAQItem`

- A single accordion item for FAQs.  
- Props: `question`, `answer`, `defaultOpen`.  
- Handles `aria-expanded`, `aria-controls`, keyboard interaction.

### 3.5 TestimonialSnippet

**Component:** `TestimonialSnippet`

- Small quote block with name, role, optional avatar.  
- Props: `quote`, `name`, `role`.

### 3.6 StatItem

**Component:** `StatItem`

- Icon + numeric/stat + label (e.g., "5+ clinicians", "Telehealth available").

### 3.7 Breadcrumbs

**Component:** `Breadcrumbs`

- Used on Shop and Product pages.  
- Props: `items` (`{ label, href? }[]`).

---

## 4. Organisms

### 4.1 HeaderNav

**Component:** `HeaderNav`

- Fixed/top header with logo, nav links, and primary CTA.

**Composition:**
- `BrandMark`  
- `NavLinkGroup`  
- `Button` ("Request Appointment")  
- Mobile menu toggle & drawer

### 4.2 Footer

**Component:** `Footer`

- Site footer with navigation, policies, disclaimers, and social links.

**Composition:**
- Link columns (About, Services, Shop, Resources)  
- Policies (Privacy, Terms, Shipping/Returns)  
- Crisis disclaimer ("Not for emergencies")

### 4.3 HeroSection

**Component:** `HeroSection`

- Used on Home and other pages (with variations).  
- Props: `eyebrow`, `title`, `subtitle`, `primaryCta`, `secondaryCta`, `image`.

**Composition:**
- `Heading`, `Text`, `Button`s, optional illustration or image.

### 4.4 ServicesGrid

**Component:** `ServicesGrid`

- Grid of core services (Individual Therapy, Couples/Family, Telehealth, etc.).

**Subcomponent:** `ServiceCard`

- Props: `title`, `summary`, `icon`, `href`, `tag`.

### 4.5 ClinicianGrid

**Component:** `ClinicianGrid`

- Displays clinicians with photo, name, credentials, specialties.

**Subcomponent:** `ClinicianCard`

- Props: `name`, `credentials`, `specialties`, `photo`, `bioSnippet`, `href`.

### 4.6 FAQAccordion

**Component:** `FAQAccordion`

- List of `FAQItem` components grouped under a section header.

### 4.7 ContactSection / AppointmentForm

**Components:** `ContactSection`, `AppointmentForm`

- `ContactSection` wraps copy + `AppointmentForm`.  
- `AppointmentForm` uses `FormField`, `Input`, `Textarea`, and handles validation + submit states.

### 4.8 ShopHighlight

**Component:** `ShopHighlight`

- A section on Home that highlights 3–6 products with tiles.

**Subcomponent:** `ProductTile`

- Props: `title`, `description`, `price`, `image`, `productId` (Shopify), `href`.  
- Composes with `ShopifyBuyButton` (see Shopify section).

### 4.9 ShopGrid

**Component:** `ShopGrid`

- Core grid layout for the `/shop` page.

**Composition:**
- Filter bar (simple category toggles or tabs).  
- Grid of `ProductTile`s.

### 4.10 ProductDetailModule

**Component:** `ProductDetailModule`

- Main content block for a product detail page.

**Composition:**
- Product imagery gallery  
- Title, description, price, highlights  
- `ShopifyBuyButton`  
- Additional info (care, usage, notes)

Props: `title`, `summary`, `detail`, `price`, `imageGallery`, `productId`, `benefits`, `care`, `tags`.

---

## 5. Shopify Integration Components

All Shopify-related logic should live under `components/shopify` to simplify future migrations.

### 5.1 ShopifyBuyButton

**Component:** `ShopifyBuyButton`

- Wraps Shopify `buybutton.js` script and renders a single product Buy Button.

Props (example):
- `productId: string`  
- `shopDomain: string`  
- `storefrontAccessToken: string`  
- `buttonText?: string`  
- `ariaLabel?: string`

Responsibilities:
- Load script once.  
- Initialize Buy Button UI for given product.  
- Render inside an accessible wrapper (`<section role="region">`).

### 5.2 ShopifyCartToggle (Optional v1+)

**Component:** `ShopifyCartToggle`

- Button/icon that opens the Buy Button cart widget if used.

### 5.3 ShopifyCollectionEmbed (Optional v2)

**Component:** `ShopifyCollectionEmbed`

- For embedding a Shopify collection (e.g., "Journals & Planners") using Buy Button collection components.

Props: `collectionId`, `title`, `description`.

---

## 6. Templates

Templates are page-level compositions of organisms, used by Next.js route files.

### 6.1 HomeTemplate

**Component:** `HomeTemplate`

Sections (in order):
1. `HeroSection` (care + self-care positioning)  
2. `ServicesGrid` (short service overview)  
3. `ShopHighlight` (featured products)  
4. Trust/values section with `StatItem`s and/or `TestimonialSnippet`s  
5. `FAQAccordion` (top FAQs)  
6. `ContactSection` / CTA

### 6.2 ServicesTemplate

**Component:** `ServicesTemplate`

Sections:
- Hero (Services focus)  
- `ServicesGrid` with more detailed cards  
- Insurance & payment section  
- CTA: `AppointmentForm` or link to Contact page

### 6.3 TeamTemplate

**Component:** `TeamTemplate`

Sections:
- Hero (Our Team)  
- `ClinicianGrid`  
- Optional highlight of approach or shared values

### 6.4 ShopTemplate

**Component:** `ShopTemplate`

Sections:
- Shop hero (explaining self-care focus)  
- Filter bar (category toggles)  
- `ShopGrid` of `ProductTile`s  
- FAQ slice for shipping/returns

### 6.5 ProductTemplate

**Component:** `ProductTemplate`

Sections:
- `Breadcrumbs`  
- `ProductDetailModule`  
- Related products (`ShopHighlight` or simple `ProductTile` row)  
- Policy snippet (shipping, returns)

### 6.6 ContactTemplate

**Component:** `ContactTemplate`

Sections:
- Hero (Getting in touch)  
- `ContactSection` with `AppointmentForm`  
- Side panel with contact info, disclaimers, map (if needed)

---

## 7. Pages (Next.js Routes)

With the App Router, pages live in `app/`:

- `app/page.tsx` → Home  
- `app/services/page.tsx` → Services  
- `app/team/page.tsx` → Our Team  
- `app/shop/page.tsx` → Shop  
- `app/shop/[handle]/page.tsx` → Product detail (handle-based routing)  
- `app/resources/page.tsx` (optional) → Resources & FAQs  
- `app/contact/page.tsx` → Contact / Request Appointment

Each page file:

- Fetches or imports any content/data it needs.  
- Renders the appropriate Template.  
- Wraps in a global layout (`app/layout.tsx`) that includes `HeaderNav` and `Footer`.

---

## 8. Implementation Notes

1. **Strict TypeScript:** Define interfaces for component props in each component file.  
2. **Design Tokens in Tailwind:** Colors, fonts, and spacing are configured centrally in `tailwind.config.js` and not hard-coded in components.  
3. **Accessibility:**  
   - Ensure all interactive elements use semantic HTML (`<button>`, `<a>`, etc.).  
   - Provide `aria-label`s on icons and Shopify regions.  
4. **Shopify Isolation:** All direct Shopify logic (script loading, client configs, IDs) lives in `components/shopify`. Product and collection IDs should be read from environment/config, not hard-coded across the app.  
5. **Future Storefront API Migration:** Keep the `ProductTile`, `ShopGrid`, and `ProductDetailModule` props shape compatible with potential Storefront API data to simplify migration.

---

**End of Amplexus Health Component Hierarchy v1**

