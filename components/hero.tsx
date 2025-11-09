"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"
import { trackApplicationClick } from "@/lib/analytics"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
          Learn AI & Tech Skills <span className="gradient-text">That Actually Pay</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          100% Free Scholarships • 4-Week Intensive Programs • Expert Mentorship • Africa-Wide Access
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => {
              trackApplicationClick("hero_cta_primary")
              window.open(SITE_CONFIG.links.applicationForm, "_blank")
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 text-base group"
          >
            Join the Next Cohort
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })
              trackApplicationClick("hero_cta_secondary")
            }}
            className="border-border hover:bg-muted h-14 px-8 text-base"
          >
            Try Free AI Tools
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-foreground/60 pt-8 border-t border-border/50">
          <div>
            <div className="font-bold text-foreground">1000+</div>
            <div>Young Africans Trained</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div>
            <div className="font-bold text-foreground">100%</div>
            <div>Tuition-Free Programs</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div>
            <div className="font-bold text-foreground">4 Weeks</div>
            <div>Fast-Track Learning</div>
          </div>
        </div>
      </div>
    </section>
  )
}
