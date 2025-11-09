"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Globe, Users, Trophy, Zap, BookOpen } from "lucide-react"

export function WhyAiTechified() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "100% Free Scholarships",
      description: "No tuition fees - completely free training for young Africans",
    },
    {
      icon: Zap,
      title: "4-Week Intensive",
      description: "Fast-track your tech career in just one month with intensive programs",
    },
    {
      icon: BookOpen,
      title: "AI-Focused Curriculum",
      description: "Future-proof skills in AI and automation for in-demand careers",
    },
    {
      icon: Trophy,
      title: "Job-Ready Skills",
      description: "Build real projects, earn while you learn, and launch your career",
    },
    {
      icon: Globe,
      title: "Hybrid Learning",
      description: "Both in-person (Nigeria) and online classes available",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of tech learners across Africa",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Why Choose AiTechified?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We're committed to making technology simple and accessible to everyone
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card
                key={idx}
                className="p-6 sm:p-8 hover:shadow-md transition-all border-border/50 hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
