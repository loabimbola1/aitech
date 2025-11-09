import { trackScrollDepth } from "@/lib/analytics"

const scrollTracked = {
  25: false,
  50: false,
  75: false,
  100: false,
}

export function initScrollTracking() {
  if (typeof window === "undefined") return

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY

    const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

    const depths = [25, 50, 75, 100]
    depths.forEach((depth) => {
      if (scrollPercent >= depth && !scrollTracked[depth as keyof typeof scrollTracked]) {
        scrollTracked[depth as keyof typeof scrollTracked] = true
        trackScrollDepth(depth)
      }
    })
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}
