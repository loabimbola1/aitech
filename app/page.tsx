import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { WhyAiTechified } from "@/components/why-aitechified"
import { HowItWorks } from "@/components/how-it-works"
import { ToolsSection } from "@/components/ai-tools/tools-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Courses />
      <WhyAiTechified />
      <HowItWorks />
      <ToolsSection />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
