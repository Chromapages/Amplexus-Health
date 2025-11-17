# Amplexus Health – Environment Config

> **Scope:** Central reference for all environment variables required by the Amplexus Health Next.js + Shopify project. This doc is for developers and technical collaborators so setup is repeatable and low-stress.
>
> Conventions:
> - All secrets live in `.env.local` (never committed to git).
> - Non‑secret config can be exposed via `NEXT_PUBLIC_…` variables where needed.

---

## 1. Overview

The project has three main integration areas:

1. **Shopify (Buy Button / Storefront)** – product data + checkout.  
2. **Forms / Email Delivery** – contact + request appointment form.  
3. **Analytics** (optional) – pageview + event tracking.

This document defines the variables for each area and shows an example `.env.local` stub.

---

## 2. Shopify Configuration

Used for:
- `ShopifyBuyButton` integration.  
- Potential future use of Shopify Storefront API.

### 2.1 Required Vars

**`SHOPIFY_STORE_DOMAIN`**  
- Example: `amplexus-health.myshopify.com`  
- Description: The full Shopify store domain.

**`SHOPIFY_STOREFRONT_ACCESS_TOKEN`**  
- Example: `shpat_XXXXXXXXXXXXXXXXXXXX`  
- Description: Storefront API access token for reading products/collections.  
- Where to find: Shopify Admin → Apps and sales channels → Develop apps → Storefront API access.

**`SHOPIFY_BUY_BUTTON_API_KEY`** (if using a dedicated key)
- Example: `xxxxxxxxxxxxxxxxxxxx`  
- Description: API key used by the Buy Button JS SDK if configured separately from Storefront.

**`SHOPIFY_DEFAULT_CURRENCY`**  
- Example: `USD`  
- Description: Currency code for prices displayed in the UI (should match Shopify store settings).

### 2.2 Optional Vars

**`SHOPIFY_COLLECTION_HANDLE_APPAREL`**  
- Example: `apparel`  
- Description: Shopify collection handle for Apparel.

**`SHOPIFY_COLLECTION_HANDLE_JOURNALS`**  
- Example: `journals-and-planners`  
- Description: Collection handle for Journals & Planners.

**`SHOPIFY_COLLECTION_HANDLE_SELFCARE`**  
- Example: `self-care-boxes`  
- Description: Collection handle for curated self‑care boxes.

> These collection vars are helpful if you ever move to dynamic Storefront API queries while keeping config declarative.

---

## 3. Frontend-Exposed Shopify Vars

Some values must be available in the browser for Buy Button initialization. When you need them client‑side, mirror them as `NEXT_PUBLIC_…`.

**`NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`**  
- Usually the same as `SHOPIFY_STORE_DOMAIN`.  
- Used in client‑side script initialization.

**`NEXT_PUBLIC_SHOPIFY_BUY_BUTTON_API_KEY`**  
- Public API key for Buy Button.  
- Only expose keys that Shopify explicitly treats as public; keep secrets server‑side.

> When in doubt, keep tokens server‑side and pass minimal config into the client where possible.

---

## 4. Forms & Email Delivery

The contact / request appointment form needs a delivery mechanism (email, database, or both).

You can use whatever service you prefer (Resend, SendGrid, AWS SES, Formspree, etc.). Here’s a generic pattern:

### 4.1 Generic Email Service

**`EMAIL_FROM_ADDRESS`**  
- Example: `no-reply@amplexushealth.com`  
- Description: From address used for transactional emails.

**`EMAIL_TO_ADDRESS_CONTACT`**  
- Example: `intake@amplexushealth.com`  
- Description: Destination for Contact / Request Appointment submissions.

**`EMAIL_SMTP_HOST`**  
- Example: `smtp.sendgrid.net`  
- Description: SMTP server host (if using direct SMTP).

**`EMAIL_SMTP_PORT`**  
- Example: `587`

**`EMAIL_SMTP_USER`**  
- Example: `apikey` / username.

**`EMAIL_SMTP_PASSWORD`**  
- Example: `********`  
- Description: SMTP password or API key.

### 4.2 Resend (Example Option)

If you choose Resend:

**`RESEND_API_KEY`**  
- Example: `re_xxxxxxxxxxxxxxxxxx`  
- Used by server‑side route handlers to send emails.

---

## 5. Analytics (Optional)

If/when you add analytics, choose one provider and keep config minimal.

### 5.1 Plausible / Simple Analytics (Privacy-Friendly)

**`NEXT_PUBLIC_ANALYTICS_DOMAIN`**  
- Example: `amplexushealth.com`

**`NEXT_PUBLIC_ANALYTICS_SRC`**  
- Example: script URL for Plausible / other provider.

### 5.2 Google Analytics (If Used)

**`NEXT_PUBLIC_GA_MEASUREMENT_ID`**  
- Example: `G-XXXXXXXXXX`  
- Used to initialize GA in a client‑side hook or page layout.

> Only add analytics after discussing privacy and consent expectations with the client.

---

## 6. App Runtime & Misc

### 6.1 Next.js Runtime

**`NODE_ENV`**  
- Values: `development`, `production`  
- Managed by hosting platform (Vercel, etc.).

**`NEXT_PUBLIC_SITE_URL`**  
- Example: `https://amplexushealth.com`  
- Used for OG tags, canonical URLs, and some redirects.

**`NEXTAUTH_URL`** (if authentication is added in future)  
- Only if you later add auth; not needed for v1 marketing + shop setup.

### 6.2 Feature Flags (Optional)

These can be used to toggle future features without code removal:

**`NEXT_PUBLIC_FEATURE_SHOP_ENABLED`**  
- Example: `true` / `false`  
- Use to hide or show the Shop nav and `/shop` content while product catalog is in early stages.

**`NEXT_PUBLIC_FEATURE_GROUP_CLASSES_ENABLED`**  
- Use to reveal group class details when they’re ready.

---

## 7. Example `.env.local`

Below is a sample (with fake values) showing how a local env file might look:

```bash
# Shopify
SHOPIFY_STORE_DOMAIN="amplexus-health.myshopify.com"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="shpat_XXXXXXXXXXXXXXXXXXXX"
SHOPIFY_BUY_BUTTON_API_KEY="xxxxxxxxxxxxxxxxxxxx"
SHOPIFY_DEFAULT_CURRENCY="USD"

SHOPIFY_COLLECTION_HANDLE_APPAREL="apparel"
SHOPIFY_COLLECTION_HANDLE_JOURNALS="journals-and-planners"
SHOPIFY_COLLECTION_HANDLE_SELFCARE="self-care-boxes"

NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN="amplexus-health.myshopify.com"
NEXT_PUBLIC_SHOPIFY_BUY_BUTTON_API_KEY="xxxxxxxxxxxxxxxxxxxx"

# Forms / Email
EMAIL_FROM_ADDRESS="no-reply@amplexushealth.com"
EMAIL_TO_ADDRESS_CONTACT="intake@amplexushealth.com"
EMAIL_SMTP_HOST="smtp.sendgrid.net"
EMAIL_SMTP_PORT="587"
EMAIL_SMTP_USER="apikey"
EMAIL_SMTP_PASSWORD="your-sendgrid-api-key"

# or Resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxx"

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_DOMAIN="amplexushealth.com"
NEXT_PUBLIC_ANALYTICS_SRC="https://plausible.io/js/script.js"
# or
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Site
NEXT_PUBLIC_SITE_URL="https://amplexushealth.com"
```

---

## 8. Workflow & Secrets Management

- **Local Dev:** Use `.env.local` (never commit).  
- **Staging/Production:** Set env vars through your hosting provider’s dashboard (e.g., Vercel project settings).  
- **Rotation:** If a secret is leaked or shared in the wrong place, generate a new key in the provider’s dashboard and update all environments.

> Anytime you add a new integration (e.g., a CMS or new email provider), update this doc so the full env surface area stays easy to understand.

---

**End of Amplexus Health Env Config v1**

