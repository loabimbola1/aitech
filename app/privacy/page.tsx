import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | AiTechified",
  description: "Learn about AiTechified's privacy practices and how we protect your personal data.",
  openGraph: {
    title: "Privacy Policy | AiTechified",
    description: "Learn about AiTechified's privacy practices and how we protect your personal data.",
    url: "https://aitechified.com/privacy",
    siteName: "AiTechified",
    locale: "en_US",
    type: "website",
  },
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-background/70">Last updated: November 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>
              AiTechified ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website (aitechified.com)
              and use our services, including our free AI tools and scholarship application platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do
              not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Information You Provide Directly</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Scholarship Applications:</strong> Name, email, phone number, age, education background, and
                motivation for applying
              </li>
              <li>
                <strong>Contact Forms:</strong> Name, email, subject, and message content
              </li>
              <li>
                <strong>WhatsApp Inquiries:</strong> Phone number and conversation content
              </li>
              <li>
                <strong>AI Tools Usage:</strong> YouTube URLs submitted to our transcript and thumbnail downloaders
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Device Information:</strong> Browser type, IP address, device type, operating system
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, links clicked, referral source
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics 4 tracking (GA-8W7LL1B750)
              </li>
              <li>
                <strong>Cookies:</strong> Session cookies and persistent cookies for functionality and analytics
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing scholarship applications and communicating decisions</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Sending educational content, course updates, and promotional materials (with consent)</li>
              <li>Analyzing website usage to improve our services and user experience</li>
              <li>Preventing fraud and maintaining security</li>
              <li>Complying with legal obligations</li>
              <li>Delivering personalized content and recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your information only in these
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Service Providers:</strong> With vendors who assist us (analytics, email, hosting)
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize us to share information
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no transmission over the
              internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">You have the right to:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies in your browser settings</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@aitechified.com" className="text-primary hover:underline">
                info@aitechified.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience. Cookies are small files stored on your device. You can control
              cookies through your browser settings. For detailed information about our cookie practices, see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. NDPR Compliance</h2>
            <p>
              AiTechified complies with the Nigeria Data Protection Regulation (NDPR). We are committed to handling
              personal data in accordance with NDPR requirements. If you have concerns about NDPR compliance, contact
              the Nigeria Data Protection Bureau (NDPB).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              Please review their privacy policies before sharing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect information from children
              under 13. If we become aware of such collection, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be effective when posted. Your continued use
              of our website constitutes acceptance of the updated policy. We encourage you to review this policy
              regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
