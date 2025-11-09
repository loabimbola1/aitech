"use client"

import type React from "react"

import { useEffect } from "react"
import { initScrollTracking } from "@/lib/scroll-depth"
import { InstallPrompt } from "@/components/install-prompt"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll depth tracking
    const cleanup = initScrollTracking()
    return cleanup
  }, [])

  return (
    <>
      <InstallPrompt />
      {children}
    </>
  )
}
