import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | AiTechified",
  description: "Review AiTechified's terms of service and conditions for using our website and services.",
  openGraph: {
    title: "Terms of Service | AiTechified",
    description: "Review AiTechified's terms of service and conditions for using our website and services.",
    url: "https://aitechified.com/terms",
    siteName: "AiTechified",
    locale: "en_US",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-background/70">Last updated: November 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the AiTechified website (aitechified.com) and our services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p>We grant you a limited, non-exclusive, revocable license to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and use the website for lawful purposes</li>
              <li>Use our free AI tools (YouTube Thumbnail Downloader, Transcript Downloader, Notepad)</li>
              <li>Apply for scholarship programs</li>
              <li>Contact us through provided channels</li>
            </ul>
            <p className="mt-4">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reproduce, distribute, or transmit content without permission</li>
              <li>Engage in any form of hacking or unauthorized access</li>
              <li>Use automated bots or scrapers on our website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or defame other users</li>
              <li>Infringe on intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
            <p>
              All content on our website (text, graphics, logos, images, software) is the property of AiTechified or its
              content suppliers and is protected by copyright laws. You may not copy, reproduce, or redistribute any
              content without explicit permission.
            </p>
            <p>
              User-generated content submitted through our tools or forms may be used by AiTechified for improvement and
              analytics purposes, unless prohibited by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Scholarship Application Terms</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Eligibility</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Must be aged 18-40 years old</li>
              <li>Must have access to internet and basic computing device</li>
              <li>Must have basic English literacy</li>
              <li>Must commit to the full 4-week program</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Selection Process</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Applications are reviewed based on motivation, commitment, and need</li>
              <li>Acceptance decisions are made at AiTechified's sole discretion</li>
              <li>Selected candidates will be notified within 7 days</li>
              <li>Scholarship grants may be revoked if terms are violated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. AI Tools Usage</h2>
            <p>Our free AI tools are provided "as-is" without warranties. When using our tools:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You may not use them for illegal or harmful purposes</li>
              <li>You must respect YouTube's Terms of Service</li>
              <li>You assume responsibility for downloaded content</li>
              <li>We are not liable for tool failures or data loss</li>
              <li>You must not attempt to circumvent content protection measures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties,
              expressed or implied, regarding:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accuracy or completeness of content</li>
              <li>Functionality of tools or features</li>
              <li>Fitness for a particular purpose</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall AiTechified be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of our website or services, even if advised of the possibility of such
              damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
            <p>
              Our website contains links to third-party websites. We are not responsible for the content, accuracy, or
              practices of external sites. Your use of third-party sites is at your own risk and subject to their terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. User Conduct</h2>
            <p>
              You agree to use our website in compliance with all applicable laws and these terms. Prohibited conduct
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Harassment, threats, or abusive language</li>
              <li>Spam or unsolicited promotions</li>
              <li>Fraudulent or deceptive activities</li>
              <li>Transmission of viruses or malware</li>
              <li>Unauthorized data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Suspension and Termination</h2>
            <p>
              AiTechified reserves the right to suspend or terminate your access to our website and services at any
              time, for any reason, with or without notice. This includes violations of these terms or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
            <p>
              We may modify these Terms of Service at any time. Changes are effective upon posting. Your continued use
              constitutes acceptance of updated terms. We recommend reviewing this page regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Nigeria, without
              regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
            <p>For questions regarding these Terms of Service, please contact:</p>
            <div className="bg-foreground/10 p-6 rounded-lg mt-4 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@aitechified.com" className="text-primary hover:underline">
                  info@aitechified.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="https://wa.me/2348129499438" className="text-primary hover:underline">
                  +234 812 9499 438
                </a>
              </p>
              <p>
                <strong>Address:</strong> Lagos, Nigeria
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
