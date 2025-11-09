import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Providers } from "@/components/providers"
import { InstallPrompt } from "@/components/install-prompt" // Import InstallPrompt component
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://aitechified.com"),
  title: "Tech Skills for Africa | Free AI Scholarships | AiTechified",
  description:
    "Empowering African Tech Talents with 100% free AI scholarships. Learn YouTube automation, AI web development, and app development. Access free AI tools instantly.",
  keywords: [
    "Tech Skills for Africa",
    "AI Tech Academy Nigeria",
    "Free AI Scholarships",
    "Empowering African Tech Talents",
    "YouTube Transcript Downloader",
    "AI Coding School",
    "Free AI Tools Nigeria",
    "Tech Academy Africa",
    "AI Web Development",
    "AI App Development",
  ],
  authors: [{ name: "AiTechified" }],
  creator: "AiTechified",
  publisher: "AiTechified",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitechified.com",
    title: "Tech Skills for Africa | Free AI Scholarships | AiTechified",
    description:
      "Empowering African Tech Talents with 100% free AI scholarships. Learn YouTube automation, AI web development, and app development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AiTechified - Tech Skills for Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Skills for Africa | AiTechified",
    description: "Empowering African Tech Talents with 100% free AI scholarships",
    creator: "@aitechified",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Tech Skills for Africa",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8W7LL1B750" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8W7LL1B750');
          `}
        </Script>

        {/* JSON-LD Structured Data for Organization and Academy */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "AiTechified",
              description: "AI Tech Academy equipping young Africans with digital and AI coding skills",
              url: "https://aitechified.com",
              logo: "https://aitechified.com/logo.svg",
              sameAs: [
                "https://instagram.com/aitechified",
                "https://twitter.com/aitechified",
                "https://linkedin.com/company/aitechified",
                "https://tiktok.com/@aitechified",
              ],
              areaServed: ["NG", "Africa"],
              educationalCredentialAwarded: "Certificate",
            }),
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AiTechified" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        <Providers>
          <InstallPrompt /> {/* Added InstallPrompt component for PWA installation */}
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
