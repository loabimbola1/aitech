import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | AiTechified",
  description: "Learn about how AiTechified uses cookies and similar technologies.",
  openGraph: {
    title: "Cookie Policy | AiTechified",
    description: "Learn about how AiTechified uses cookies and similar technologies.",
    url: "https://aitechified.com/cookies",
    siteName: "AiTechified",
    locale: "en_US",
    type: "website",
  },
}

export default function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-background/70">Last updated: November 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a
              website. They help websites remember your preferences and enhance your browsing experience. Cookies can be
              temporary (session cookies) or persistent (stored long-term).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>User authentication and login sessions</li>
              <li>Preference storage (dark mode, language)</li>
              <li>Security and fraud prevention</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Analytics Cookies</h3>
            <p>
              We use Google Analytics 4 (GA-8W7LL1B750) to understand how users interact with our website. These cookies
              help us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Track page visits and user flow</li>
              <li>Measure engagement and time spent</li>
              <li>Identify popular content and features</li>
              <li>Monitor conversion rates and goals</li>
              <li>Improve overall user experience</li>
            </ul>
            <p className="mt-4 text-sm">
              Learn more:{" "}
              <a
                href="https://support.google.com/analytics/answer/12017362"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics 4 Privacy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Functional Cookies</h3>
            <p>These cookies remember your choices to provide a personalized experience:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Saved preferences (theme, layout)</li>
              <li>Form data to simplify resubmission</li>
              <li>Application form progress</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Marketing Cookies</h3>
            <p>If enabled, these cookies help us:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Track advertising effectiveness</li>
              <li>Show relevant content recommendations</li>
              <li>Build audience segments for retargeting</li>
              <li>Measure campaign performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookie Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-foreground/20">
                <thead>
                  <tr className="bg-foreground/10">
                    <th className="border border-foreground/20 p-3 text-left">Cookie Name</th>
                    <th className="border border-foreground/20 p-3 text-left">Type</th>
                    <th className="border border-foreground/20 p-3 text-left">Duration</th>
                    <th className="border border-foreground/20 p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-foreground/20">
                    <td className="border border-foreground/20 p-3">_ga</td>
                    <td className="border border-foreground/20 p-3">Analytics</td>
                    <td className="border border-foreground/20 p-3">2 years</td>
                    <td className="border border-foreground/20 p-3">Google Analytics user ID</td>
                  </tr>
                  <tr className="border-b border-foreground/20">
                    <td className="border border-foreground/20 p-3">_gid</td>
                    <td className="border border-foreground/20 p-3">Analytics</td>
                    <td className="border border-foreground/20 p-3">24 hours</td>
                    <td className="border border-foreground/20 p-3">Google Analytics session ID</td>
                  </tr>
                  <tr className="border-b border-foreground/20">
                    <td className="border border-foreground/20 p-3">_gat</td>
                    <td className="border border-foreground/20 p-3">Analytics</td>
                    <td className="border border-foreground/20 p-3">1 minute</td>
                    <td className="border border-foreground/20 p-3">Request throttling</td>
                  </tr>
                  <tr className="border-b border-foreground/20">
                    <td className="border border-foreground/20 p-3">aitechified_theme</td>
                    <td className="border border-foreground/20 p-3">Functional</td>
                    <td className="border border-foreground/20 p-3">1 year</td>
                    <td className="border border-foreground/20 p-3">Dark/light mode preference</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 p-3">aitechified_session</td>
                    <td className="border border-foreground/20 p-3">Essential</td>
                    <td className="border border-foreground/20 p-3">Session</td>
                    <td className="border border-foreground/20 p-3">User session management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
            <p>We use these third-party services that set cookies:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking
              </li>
              <li>
                <strong>Google Fonts:</strong> Performance optimization for typography
              </li>
              <li>
                <strong>YouTube:</strong> Thumbnail and transcript retrieval (limited data collection)
              </li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies. We recommend reviewing them on their respective websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. How to Control Cookies</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
            <p>Most browsers allow you to control cookies through settings:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Opt-Out Options</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Disable all cookies (may impact website functionality)</li>
              <li>Delete cookies after each session</li>
              <li>Use private/incognito browsing mode</li>
              <li>
                Opt out of Google Analytics:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
            </ul>

            <p className="mt-4 text-sm italic">
              Note: Disabling essential cookies may prevent the website from functioning properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
            <p>
              Cookie data is retained according to their type and purpose. Analytics data is typically stored for 2
              years. Essential and functional cookies are retained as long as necessary for their purpose. You can clear
              cookies at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. NDPR Compliance</h2>
            <p>
              AiTechified complies with the Nigeria Data Protection Regulation (NDPR) regarding cookie usage. We only
              use cookies where necessary or with user consent. You have the right to access, correct, or delete your
              cookie data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements.
              Changes are effective upon posting. We encourage you to review this policy regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p>If you have questions about our cookie practices, please contact:</p>
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
