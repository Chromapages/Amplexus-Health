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

  // Plausible analytics integration
  // @ts-ignore
  if (window.plausible) {
    // @ts-ignore
    window.plausible(event, { props });
  }

  // Fallback to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event, props);
  }
}
