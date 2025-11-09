"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Code, Smartphone } from "lucide-react"
import { SITE_CONFIG } from "@/lib/config"
import { trackApplicationClick } from "@/lib/analytics"

export function Courses() {
  const courseIcons = {
    "youtube-automation": Zap,
    "web-dev": Code,
    "app-dev": Smartphone,
  }

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-2">SCHOLARSHIP PROGRAMS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transform Your Future with In-Demand Skills
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">All Scholarship Courses are 100% Tuition-Free</p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SITE_CONFIG.courses.map((course) => {
            const IconComponent = courseIcons[course.id as keyof typeof courseIcons]
            return (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-all border-border/50 hover:border-primary/50 group overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      SCHOLARSHIP
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{course.name}</h3>

                  {/* Duration and Price */}
                  <div className="flex gap-4 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-xs text-foreground/60 uppercase font-semibold">Duration</p>
                      <p className="font-bold text-foreground">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 uppercase font-semibold">Price</p>
                      <p className="font-bold text-primary">{course.price}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">{course.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Skills:</p>
                    <ul className="space-y-2">
                      {course.skills.map((skill, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary font-bold mt-0.5">+</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => {
                      trackApplicationClick(`course_card_${course.id}`)
                      window.open(SITE_CONFIG.links.applicationForm, "_blank")
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn"
                  >
                    Join the Next Cohort
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">New cohorts start monthly. Apply now to secure your spot!</p>
        </div>
      </div>
    </section>
  )
}
