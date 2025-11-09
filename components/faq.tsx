"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can apply for the scholarship?",
      answer:
        "Young Africans aged 18-40 with access to internet and basic English literacy. No prior tech experience required! We welcome complete beginners and experienced professionals looking to upskill.",
    },
    {
      question: "Are the scholarships really 100% free?",
      answer:
        "Yes! Absolutely no tuition fees. All our scholarship programs are completely free. We believe education should be accessible to everyone, regardless of financial background.",
    },
    {
      question: "How long are the courses?",
      answer:
        "All scholarship courses are 4 weeks (one month) intensive programs. They're designed to be fast-paced and practical, focusing on real-world skills you can apply immediately.",
    },
    {
      question: "Do I need prior tech experience?",
      answer:
        "No! Our courses are designed for complete beginners. We make technology simple and accessible to everyone. Each course starts from the fundamentals and builds up progressively.",
    },
    {
      question: "What equipment do I need?",
      answer:
        "A smartphone or computer with internet connection. That's all! You don't need expensive equipment or software. We provide all necessary resources and tools.",
    },
    {
      question: "Are classes live or recorded?",
      answer:
        "Hybrid: Live sessions 2-3x/week + recorded sessions for review. You can choose in-person attendance (Nigeria) or online participation. This flexibility allows you to learn at your own pace while staying engaged.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes! You'll receive a certificate upon successful completion of the 4-week program. This certificate is recognized and can be added to your professional portfolio and LinkedIn profile.",
    },
    {
      question: "How do I apply?",
      answer:
        'Click the "Join the Next Cohort" button and fill out our Google Form. It takes just 5 minutes! We\'ll review your application and respond within 7 days with the selection results.',
    },
    {
      question: "When does the next cohort start?",
      answer:
        "New cohorts start monthly. Check the application form for specific start dates. The next cohort information is always available on our website.",
    },
    {
      question: "Do you offer in-person classes?",
      answer:
        "Yes! We offer both in-person (Nigeria) and virtual instruction for all programs. Choose the format that works best for your situation.",
    },
    {
      question: "What locations do you serve?",
      answer:
        "We primarily serve young Africans, with physical locations in Nigeria and virtual classes accessible continent-wide. Anyone with internet access can join our online programs.",
    },
    {
      question: "What happens after I complete the course?",
      answer:
        "You'll graduate with a portfolio of real projects, a certificate, and job-ready skills. We also provide career guidance, freelancing support, and job placement assistance to help you launch your career.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">Everything you need to know about AiTechified</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 pt-0 border-t border-border/50 bg-muted/30">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-8 bg-primary/10 border border-primary/20 rounded-lg text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">Didn't find your answer?</h3>
          <p className="text-foreground/70 mb-4">Reach out to us on WhatsApp and our team will be happy to help!</p>
          <a
            href="https://wa.me/2348129499438"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
