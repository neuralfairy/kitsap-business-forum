import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features-preview"
import Testimonials from "@/components/testimonials"
import ROICalculator from "@/components/roi-calculator"
import CTA from "@/components/cta-section"
import TrustBadges from "@/components/trust-badges"

export const metadata: Metadata = {
  title: "iGCT Global Cloud Telephony Solutions | Kitsapbusinessforum Solutions",
  description:
    "Scale your outreach with our global cloud-based telephony solutions. Professional iGCT services for B2B sales teams. Start your free trial today.",
  keywords: "cloud telephony, global calling, voice solutions, igct, global cloud telephony, B2B sales tools",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Features />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </main>
  )
}
