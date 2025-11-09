export const GA_MEASUREMENT_ID = "G-8W7LL1B750"

export const trackApplicationClick = (source: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "application_click", {
      event_category: "conversion",
      event_label: source,
      value: 1,
    })
  }
}

export const trackWhatsAppClick = (source: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: source,
    })
  }
}

export const trackToolUsage = (toolName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "tool_usage", {
      event_category: "ai_tools",
      event_label: toolName,
    })
  }
}

export const trackScrollDepth = (depth: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll_depth", {
      event_category: "engagement",
      event_label: `${depth}%`,
    })
  }
}

declare global {
  interface Window {
    gtag: Function
    dataLayer: any[]
  }
}
