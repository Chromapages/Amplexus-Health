# Amplexus Health – Component API Reference

Scope: Public API for the core React components used in the Amplexus Health Next.js frontend. This reference sits on top of the **Design System** and **Component Hierarchy** docs and is meant for day‑to‑day implementation.

Conventions:

- All components are written in **TypeScript + React** and styled with **Tailwind CSS**.
- Props interfaces live under `types/` where they are reused across multiple components.
- Accessibility requirements are part of the API (for example, required `ariaLabel` on certain components).

---

## 1. Atoms

### 1.1 `<Button />`

**File:** `components/atoms/Button.tsx`

**Purpose:** Primary clickable action for the site (CTAs, form submits, key actions).

**Props:**

```ts
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;        // visual style, default "primary"
  size?: ButtonSize;              // size scale, default "md"
  fullWidth?: boolean;            // if true, width: 100%
  isLoading?: boolean;            // shows loading state, disables button
}
```

**Usage:**

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Start Now
</Button>
```

**Accessibility Notes:**

- Always uses `<button>` (not `<div>`). For external links, use `<ButtonLink />` instead.
- Keyboard focus ring is always enabled and visible (`focus:ring`, `focus:outline-none`).
- Minimum height should be ≥ 44px to satisfy touch target guidelines.

---

### 1.2 `<ButtonLink />`

**File:** `components/atoms/ButtonLink.tsx`

**Purpose:** Semantic link styled as a button, for navigation actions.

**Props:**

```ts
interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefetch?: boolean; // pass through to next/link
}
```

**Accessibility Notes:**

- Renders `<Link>` → `<a>` under the hood with `role="link"` (no button role).
- Use for navigation; use `<Button />` for form submits.

---

### 1.3 `<Heading />`

**File:** `components/atoms/Heading.tsx`

**Purpose:** Unified heading component that maps to h1–h6 while applying correct typography from the design system.

**Props:**

```ts
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  as?: HeadingLevel;         // defaults to 2
  children: React.ReactNode;
  className?: string;
}
```

**Usage:**

```tsx
<Heading as={1}>Amplexus Health</Heading>
```

**Accessibility Notes:**

- Ensure there is exactly one `<Heading as={1}>` per page.
- Maintain logical order (no jumping from h1 to h4 purely for visuals).

---

### 1.4 `<Text />`

**File:** `components/atoms/Text.tsx`

**Purpose:** Standardized body text and small text component using Inter.

**Props:**

```ts
type TextVariant = "body" | "muted" | "caption";

interface TextProps {
  as?: "p" | "span" | "div";
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}
```

---

### 1.5 `<Input />`, `<Textarea />`, `<Select />`

**File:** `components/atoms/Input.tsx` etc.

**Purpose:** Base form controls used by `FormField`.

**Shared Props:**

- Extend the corresponding HTML element attributes (`InputHTMLAttributes`, etc.).
- Always accept `id`, `name`, and `aria-*` props.

**Accessibility Notes:**

- Used only within `<FormField />` or with manually associated `<label>` elements.

---

## 2. Molecules

### 2.1 `<FormField />`

**File:** `components/molecules/FormField.tsx`

**Purpose:** Encapsulates label + input + helper/error text with consistent spacing and accessibility wiring.

**Props:**

```ts
interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactElement;          // typically <Input /> or <Textarea />
  required?: boolean;
  description?: string;                  // helper text
  error?: string;                        // error message, if any
}
```

**Usage:**

```tsx
<FormField
  id="email"
  label="Email"
  required
  error={errors.email}
>
  <Input
    id="email"
    name="email"
    type="email"
    value={values.email}
    onChange={handleChange}
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
</FormField>
```

**Accessibility Notes:**

- `<FormField />` is responsible for rendering `<label>` with `htmlFor={id}` and error text with `id="{id}-error"` when `error` is present.
- Ensures `aria-describedby` links to error/description when provided.

---

### 2.2 `<Card />`

**File:** `components/molecules/Card.tsx`

**Purpose:** Generic panel for grouping content (services, clinicians, products, etc.).

**Props:**

```ts
interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}
```

**Accessibility Notes:**

- Use `as="article"` when the card contains a standalone piece of content (for example, clinician profile).
- For cards containing interactive content, ensure there is a single primary interactive target or clear hierarchy.

---

### 2.3 `<Section />` and `<Container />`

**Files:**

- `components/molecules/Section.tsx`
- `components/molecules/Container.tsx`

**Purpose:**

- `<Container />` wraps content to the max width and horizontal padding.
- `<Section />` adds vertical spacing and optional background variants.

**Props:**

```ts
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

type SectionVariant = "default" | "muted" | "emphasis";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant; // controls background color
  ariaLabel?: string;       // optional label for landmarks
}
```

---

## 3. Organisms

### 3.1 `<HeaderNav />`

**File:** `components/organisms/HeaderNav.tsx`

**Purpose:** Global site header with logo, primary navigation, and CTA.

**Props:**

```ts
interface HeaderNavProps {
  navItems: Array<{ label: string; href: string }>;
}
```

**Behavior:**

- Desktop: inline nav links + primary CTA (`Start Now`).
- Mobile: hamburger menu that opens a vertically stacked nav.

**Accessibility Notes:**

- Wraps nav with `<nav aria-label="Main">`.
- Mobile menu toggle has `aria-expanded` and `aria-controls`.
- The current page link uses `aria-current="page"`.

---

### 3.2 `<Footer />`

**File:** `components/organisms/Footer.tsx`

**Purpose:** Site footer with navigation columns, contact info, and crisis disclaimer.

**Props:**

```ts
interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  columns: FooterColumn[];
}
```

**Accessibility Notes:**

- Uses `<footer aria-label="Footer">`.
- Crisis disclaimer is rendered as body text with clear language.

---

### 3.3 `<HeroHome />`

**File:** `components/organisms/HeroHome.tsx`

**Purpose:** Home page hero section introducing Amplexus and routing into Services and Contact.

**Props:**

```ts
interface HeroHomeProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
```

**Accessibility Notes:**

- Should not render `<h1>` if the page already uses another component as the h1; coordinate with `HomeTemplate`.
- Primary CTA should be high contrast and keyboard focusable.

---

### 3.4 `<ServiceCard />`

**File:** `components/organisms/ServiceCard.tsx`

**Purpose:** Display individual service (e.g., Individual Therapy, Group Support).

**Props:**

```ts
interface ServiceCardProps {
  title: string;
  description: string;
  href?: string; // optional link to more detail
}
```

---

### 3.5 `<TeamGrid />` / `<ClinicianCard />`

**Files:**

- `components/organisms/TeamGrid.tsx`
- `components/organisms/ClinicianCard.tsx`

**Purpose:** Show list of clinicians with basic info.

**ClinicianCard Props:**

```ts
interface ClinicianCardProps {
  name: string;
  credentials: string;
  specialties: string[];
  imageSrc?: string;
  imageAlt?: string;
}
```

**Accessibility Notes:**

- `imageAlt` should describe the clinician (for example, "Portrait of [Name], Licensed Clinical Social Worker").

---

### 3.6 `<ShopGrid />` and `<ProductTile />`

**Files:**

- `components/organisms/ShopGrid.tsx`
- `components/organisms/ProductTile.tsx`

**Purpose:** Product listing for `/shop`.

**ProductTile Props:**

```ts
interface ProductTileProps {
  handle: string;
  title: string;
  price: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}
```

**ShopGrid Props:**

```ts
interface ShopGridProps {
  products: ProductTileProps[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}
```

**Accessibility Notes:**

- Use `<section aria-label="Self-care products">` around the grid.
- Category filters should be keyboard reachable and use clear labels.

---

### 3.7 `<ProductDetailModule />`

**File:** `components/organisms/ProductDetailModule.tsx`

**Purpose:** Main layout for `/shop/[handle]` product detail page.

**Props:**

```ts
interface ProductDetailProps {
  title: string;
  price: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  shopifyProductId: string;
}
```

**Behavior:**

- Renders hero image, title, price, description, bullet list, and purchase area.
- Hosts a `<ShopifyBuyButton />` instance.

**Accessibility Notes:**

- Wraps content in a `<section aria-labelledby="product-title">` pattern.
- Includes a short note that products support well‑being but do not replace therapy or crisis care.

---

### 3.8 `<FAQAccordion />`

**File:** `components/organisms/FAQAccordion.tsx`

**Purpose:** Accessible accordion for FAQs on Home and Resources.

**Props:**

```ts
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}
```

**Accessibility Notes:**

- Each question is a `<button>` with `aria-expanded` and `aria-controls`.
- Each answer panel has `role="region"` and `aria-labelledby` referencing the button.

---

### 3.9 `<AppointmentForm />`

**File:** `components/organisms/AppointmentForm.tsx`

**Purpose:** Core contact/intake form used on `/contact`.

**Props:**

```ts
interface AppointmentFormProps {
  onSubmitSuccess?: () => void; // optional callback
}
```

**Behavior:**

- Handles inline validation (on blur and on submit).
- Posts to `/api/contact` with JSON payload.
- Shows inline error messages under fields and global success/error messages.

**Accessibility Notes:**

- Uses `<FormField />` for all inputs.
- Error messages use `role="alert"` or are placed inside an `aria-live` region.
- Includes non‑emergency disclaimer text at top of form.

---

## 4. Shopify Integration Components

### 4.1 `<ShopifyBuyButton />`

**File:** `components/shopify/ShopifyBuyButton.tsx`

**Purpose:** Encapsulate Shopify Buy Button JS SDK integration for a single product.

**Props:**

```ts
interface ShopifyBuyButtonProps {
  productId: string;   // Shopify product ID for Buy Button
  productTitle: string;
}
```

**Behavior:**

- On mount, loads Buy Button script if not already loaded.
- Initializes a Buy Button instance inside an internal container.

**Accessibility Notes:**

- Renders inside a `<section aria-label="Purchase options for [Product Title]">`.
- Ensure keyboard focus can reach all controls inside the Buy Button.

---

## 5. Templates / Page Modules

Templates are higher‑order components that assemble organisms and molecules into page layouts.

### 5.1 `<HomeTemplate />`

**File:** `components/templates/HomeTemplate.tsx`

**Purpose:** Composes Home hero, services overview, shop preview, FAQ slice, and final CTA.

**Props:**

```ts
interface HomeTemplateProps {
  // receives structured content from copy deck / config
}
```

### 5.2 `<ServicesTemplate />`, `<TeamTemplate />`, `<ShopTemplate />`, `<ContactTemplate />`

**Files:**

- `components/templates/ServicesTemplate.tsx`
- `components/templates/TeamTemplate.tsx`
- `components/templates/ShopTemplate.tsx`
- `components/templates/ContactTemplate.tsx`

**Purpose:** Provide consistent layout and composition for each core page, using the components defined above.

---

## 6. Analytics Hook-in

Where relevant, components should expose obvious places to call the analytics helper (for example, `track(...)`):

- `<HeaderNav />`: track `nav_click_primary`, `nav_click_cta` on link/CTA clicks.
- `<ShopGrid />` / `<ProductTile />`: track `product_tile_click`.
- `<ProductDetailModule />`: track `product_view` on mount.
- `<ShopifyBuyButton />`: track `buy_button_click` via callbacks where possible.
- `<AppointmentForm />`: track `contact_submit_attempt` and `contact_submit_success`.

Implementation of the `track()` function is documented in `analytics-and-events.md`.

---

End of Amplexus Health Component API Reference
