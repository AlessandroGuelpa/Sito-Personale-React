import { track } from "@vercel/analytics";

// Track intent and public identifiers only, never contact form values.
export function trackEvent(name: string, properties?: Record<string, string>) {
  if (typeof window !== "undefined") track(name, properties);
}
