# Amplexus Health – Accessibility Checklist

Scope: Practical AA‑focused accessibility checklist for the Amplexus Health Next.js + Shopify site. Use this before launch and before any major release.

Goal: Reasonable alignment with WCAG 2.1 AA for a small marketing + shop site, with special care for mental‑health content and crisis boundaries.

---

## 1. Global Semantics & Structure

- Every page has exactly one `<h1>` that matches the main page heading.
- Headings follow a logical order (`h1` → `h2` → `h3`), not used only for styling.
- Structural landmarks are used consistently:
  - `<header>` wraps the global header.
  - `<nav aria-label="Main">` wraps the primary navigation.
  - `<main id="main-content">` wraps the page’s main content.
  - `<footer aria-label="Footer">` wraps the site footer.
- Each page has a unique, descriptive `<title>` and meta description that match its purpose.
- Any modal or dialog (if added later) uses an appropriate role (e.g., `role="dialog"`), has a clear heading, traps focus while open, and returns focus to the trigger when closed.

---

## 2. Keyboard Navigation

- All interactive elements can be reached and used with keyboard only (Tab, Shift+Tab, Enter, Space, arrow keys as needed).
- A visible focus style is shown on links, buttons, form fields, accordions, and the mobile menu toggle.
- A "Skip to main content" link is present at the top of the page and moves focus to `<main>` when activated.
- There are no keyboard traps (it is always possible to tab away from menus, dialogs, Buy Button widgets, etc.).

---

## 3. Color, Contrast, and States

- Body text and important UI text meet WCAG AA contrast:
  - Normal text has at least 4.5:1 contrast.
  - Large text (18px+ or 14px bold) has at least 3:1 contrast.
- Buttons and important controls are clearly distinguishable from surrounding content (not only by color).
- Focus styles are easy to see against their backgrounds.
- Hover, active, and disabled states are noticeable through more than just color (weight, underline, border, or shape changes also help).
- Errors and success states are not indicated by color alone; there is accompanying text or icon.

---

## 4. Text, Language, and Mental‑Health Context

- Headings and section titles clearly describe the content beneath them.
- Link text is descriptive and makes sense out of context (avoid plain "click here" or "learn more").
- Buttons use clear action labels like "Start Now", "Send Request", "Explore Self‑Care".
- Content avoids diagnostic, promising, or alarming language; it does not claim to cure or treat conditions.
- Product and shop copy clearly state that self‑care items do not replace therapy, diagnosis, or crisis services.
- Pages where users may seek help (Resources, Contact, Crisis page) clearly explain that Amplexus is not an emergency service and point to crisis options.
- Instructions and validation messages use plain, straightforward language.

---

## 5. Images and Media

- Informative images (product photos, clinician headshots, icons that convey meaning) have descriptive `alt` text.
- Decorative or purely aesthetic images use empty alt (`alt=""`) or are implemented as CSS backgrounds so they are ignored by screen readers.
- The main logo has meaningful alt text such as "Amplexus Health".
- Product image alt text describes the item and any key visible wording.
- No auto‑playing audio or video. If media is added later, it includes visible controls, can be paused, and is keyboard accessible.

---

## 6. Forms, Validation, and Non‑Emergency Disclaimer

- Every form input has a programmatically associated label using `<label for="...">` and a matching `id` on the input.
- Placeholder text is not used as the only label.
- Required fields are clearly indicated in the label or helper text.
- Error messages are placed near the relevant field and explain what is wrong (for example, "Enter a valid email address").
- Error and success messages are exposed to assistive tech via `role="alert"` or an `aria-live` region.
- Validation feedback is not communicated by color alone (include text and, where appropriate, icons).
- The Contact / Request Appointment page includes a clear non‑emergency disclaimer and points people to crisis resources.
- After successful submission, a confirmation message appears near the form and is exposed to assistive tech.

---

## 7. Navigation and Menus

- The main navigation uses `<nav aria-label="Main">`.
- The current page is indicated visually and with `aria-current="page"` on the active nav link where appropriate.
- The mobile menu toggle button exposes `aria-expanded` and `aria-controls`.
- Focus moves into the mobile menu when it is opened and returns to the toggle button when closed.
- Pressing Escape closes the mobile menu.
- Footer links are grouped under clear headings (Practice, Shop, Policies, Contact) and, where useful, groups or navs have `aria-label`s.

---

## 8. Site‑Specific Components

### FAQ Accordion

- Each FAQ question is rendered as a button or similar control.
- The button toggles `aria-expanded` between true and false.
- `aria-controls` on each question references the corresponding answer panel.
- Each answer panel has `role="region"` and `aria-labelledby` referencing its question.
- The accordion can be fully operated by keyboard (Enter or Space toggles each item).

### Product Detail and Buy Button

- The Buy Button area is wrapped in a `<section>` element with an accessible label such as `aria-label="Purchase options for [Product Name]"`.
- Add‑to‑cart / Buy Now controls inside the Buy Button are reachable and usable with keyboard.
- Any iframe or third‑party widget (if present) has a descriptive `title` attribute or appropriate ARIA labeling.
- Product detail pages include a brief note that the product does not replace therapy or crisis care.

### Alerts and Banners

- Success, info, and error banners use `role="status"` (for neutral updates) or `role="alert"` (for errors) where appropriate.
- Alerts appear close to the related action and clearly describe what changed.

---

## 9. Responsive Layout and Zoom

- The site is usable on small screens (down to around 320px wide) without content being cut off.
- Important actions (navigation, CTAs, forms, Buy Button area) remain visible and usable on mobile.
- At 200% browser zoom, users can still read text and operate controls without excessive horizontal scrolling.

---

## 10. QA Integration

- This checklist is used alongside the QA Test Plan before launch.
- A keyboard‑only walkthrough is performed for at least these flows:
  - Home → Services → Contact → form submit
  - Home → Shop → Product Detail → Buy Button
- A quick screen‑reader sanity check (VoiceOver, NVDA, or similar) is done on at least one marketing page and one shop page.
- Any accessibility issues found are logged as tasks and prioritized with other bugs before release.

---

End of Amplexus Health Accessibility Checklist
