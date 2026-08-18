export type AnalyticsEvent =
  | "primary_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "domain_explored"
  | "linkedin_click";

export function trackEvent(
  eventName: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  // Custom privacy-first dispatch (compatible with Plausible / standard DOM event)
  try {
    const customEvent = new CustomEvent("ethisyn:telemetry", {
      detail: { event: eventName, properties, timestamp: Date.now() },
    });
    window.dispatchEvent(customEvent);

    // If Plausible exists on window
    const win = window as unknown as { plausible?: (event: string, opts?: object) => void };
    if (typeof win.plausible === "function") {
      win.plausible(eventName, { props: properties });
    }
  } catch {
    // Fail silently in restricted environments
  }
}
