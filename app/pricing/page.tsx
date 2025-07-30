import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "iGCT Pricing Plans - Transparent Cloud Telephony Pricing | Kitsapbusinessforum",
  description:
    "Choose the perfect iGCT plan for your business. Transparent pricing for Starter, Professional, and Enterprise cloud telephony solutions.",
  keywords: "igct pricing, cloud telephony pricing, global calling rates, voice solutions cost, business phone plans",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "1,000 minutes included",
        "Basic analytics",
        "Email support",
        "50+ countries coverage",
        "CRM integration",
        "Mobile app access",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "5,000 minutes included",
        "Advanced analytics",
        "Priority support",
        "150+ countries coverage",
        "All CRM integrations",
        "API access",
        "Custom reporting",
        "Team management",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For large organizations with custom needs",
      features: [
        "Unlimited users",
        "20,000 minutes included",
        "Real-time analytics",
        "Dedicated support",
        "Global coverage",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
        "Advanced security",
        "Custom onboarding",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                iGCT Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees or
              long-term contracts.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Check className="w-4 h-4 mr-2" />
              14-day free trial • No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-shadow relative ${
                  plan.popular ? "ring-2 ring-sky-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pricing Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens after my free trial?</h3>
                <p className="text-gray-600">
                  Your free trial lasts 14 days with full access to all features. No credit card required to start.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any setup fees?</h3>
                <p className="text-gray-600">
                  No setup fees, no hidden costs. Pay only for what you use with transparent monthly billing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What about international rates?</h3>
                <p className="text-gray-600">
                  All plans include competitive international rates with transparent per-minute pricing for calls
                  outside your plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Join thousands of businesses worldwide who trust iGCT for their global communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-700 px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="text-sky-200 text-sm mt-6">No credit card required • Cancel anytime • 24/7 support</p>
          </div>
        </div>
      </section>
    </main>
  )
}
