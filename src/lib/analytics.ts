export type AnalyticsEvent =
  | "primary_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "service_explored"
  | "team_viewed"
  | "linkedin_click";

export function trackEvent(
  eventName: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  try {
    // 1. Standard browser DOM event for decoupling and testing
    const customEvent = new CustomEvent("ethisyn:telemetry", {
      detail: {
        event: eventName,
        properties,
        timestamp: Date.now(),
      },
    });
    window.dispatchEvent(customEvent);

    // 2. Privacy-respecting analytics provider (e.g. Plausible if present)
    const win = window as unknown as {
      plausible?: (event: string, opts?: { props?: Record<string, string | number | boolean> }) => void;
    };
    if (typeof win.plausible === "function") {
      win.plausible(eventName, { props: properties });
    }
  } catch {
    // Fail silently in restricted environments
  }
}
