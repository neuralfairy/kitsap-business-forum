import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LiveChat from "@/components/live-chat"
import ExitIntentPopup from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kitsapbusinessforum Solutions - iGCT Global Cloud Telephony",
  description: "Professional global cloud telephony solutions to scale your business outreach",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kitsapbusinessforum Solutions",
              url: "https://kitsapbusinessforum.com",
              logo: "https://kitsapbusinessforum.com/logo.png",
              description: "Global cloud telephony solutions provider specializing in iGCT services",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Spokane",
                addressRegion: "WA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-509-555-0123",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <LiveChat />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
