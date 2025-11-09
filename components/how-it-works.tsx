"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Fill out the scholarship application form. Takes only 5 minutes.",
      details: "Share your goals and why you're interested in AiTechified",
    },
    {
      number: 2,
      title: "Get Selected",
      description: "We review applications and notify accepted students within 7 days.",
      details: "Selection is merit-based on motivation and commitment",
    },
    {
      number: 3,
      title: "Learn & Build",
      description: "Join our 4-week intensive program with live classes & real projects.",
      details: "Expert mentorship, peer learning, and hands-on experience",
    },
    {
      number: 4,
      title: "Launch Your Career",
      description: "Graduate with portfolio, certificate, and job-ready skills.",
      details: "Career guidance, freelancing support, and job placement assistance",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Your Learning Journey</h2>
          <p className="text-lg text-foreground/60">Simple steps to transform your tech career</p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step Card */}
              <Card className="p-6 h-full border-border/50 hover:border-primary/50 transition-all">
                {/* Step Number */}
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4 flex-shrink-0">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>

                {/* Step Description */}
                <p className="text-sm text-foreground/70 mb-2">{step.description}</p>

                {/* Step Details */}
                <p className="text-xs text-foreground/60 italic">{step.details}</p>
              </Card>

              {/* Arrow connector (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
