"use client"

import { useState } from "react"
import { SITE_CONFIG } from "@/lib/config"
import { trackWhatsAppClick } from "@/lib/analytics"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={SITE_CONFIG.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="fixed bottom-6 right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse circle background */}
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 pulse-animation" />
      {isHovered && <div className="absolute inset-0 bg-green-500 rounded-full opacity-50 animate-ping" />}

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.902 10.182 1.519 2.357 4.038 3.75 6.814 3.75 2.121 0 4.093-.778 5.652-2.082l4.08.308-.33-4.612c.821-1.503 1.269-3.19 1.269-4.956 0-5.531-4.505-10.022-10.049-10.022z" />
        </svg>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none">
          Chat with us
        </div>
      )}
    </a>
  )
}
