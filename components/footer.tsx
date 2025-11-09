"use client"
import { SITE_CONFIG } from "@/lib/config"
import { trackApplicationClick } from "@/lib/analytics"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Instagram", url: SITE_CONFIG.links.instagram, icon: "📷" },
    { name: "Twitter", url: SITE_CONFIG.links.twitter, icon: "𝕏" },
    { name: "LinkedIn", url: SITE_CONFIG.links.linkedin, icon: "💼" },
    { name: "Facebook", url: SITE_CONFIG.links.facebook, icon: "f" },
    { name: "YouTube", url: SITE_CONFIG.links.youtube, icon: "▶" },
    { name: "TikTok", url: SITE_CONFIG.links.tiktok, icon: "♪" },
  ]

  return (
    <footer id="contact" className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">AiTechified</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering young Africans with AI and tech skills through free scholarships and practical education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-background/70 hover:text-background transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#tools" className="text-background/70 hover:text-background transition-colors">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Scholarship Programs</h4>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.courses.map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="text-background/70 hover:text-background transition-colors">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/2348129499438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  +234 812 9499 438
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@aitechified.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  info@aitechified.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">Lagos, Nigeria & Africa-Wide</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-background/10 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Ready to Transform Your Future?</h3>
              <p className="text-background/70 text-sm">
                Apply now for 100% free scholarships and join thousands of young Africans learning AI & tech.
              </p>
            </div>
            <div className="flex gap-3 justify-start md:justify-end">
              <button
                onClick={() => {
                  trackApplicationClick("footer_cta")
                  window.open(SITE_CONFIG.links.applicationForm, "_blank")
                }}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
              >
                Join the Next Cohort
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-background/10 mb-8">
          <h4 className="font-bold mb-4 text-center md:text-left">Follow Us</h4>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="w-10 h-10 bg-background/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all text-background"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10 text-center text-sm text-background/70">
          <p className="mb-2">
            © {currentYear} AiTechified. All rights reserved. Making Technology Simple and Accessible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-xs">
            <a href="/privacy" className="text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <span className="text-background/30">•</span>
            <a href="/terms" className="text-background/50 hover:text-background transition-colors">
              Terms of Service
            </a>
            <span className="text-background/30">•</span>
            <a href="/cookies" className="text-background/50 hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
