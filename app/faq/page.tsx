import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ - iGCT Cloud Telephony Questions | Kitsapbusinessforum Solutions",
  description:
    "Find answers to common questions about iGCT global cloud telephony services, pricing, setup, and support.",
  keywords: "igct faq, cloud telephony questions, global calling support, voice solutions help",
}

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is iGCT (Global Cloud Telephony)?",
        answer:
          "iGCT is our comprehensive cloud-based telephony platform that enables businesses to make and receive calls globally through the internet. It eliminates the need for traditional phone systems and provides advanced features like analytics, CRM integration, and global reach.",
      },
      {
        question: "How quickly can I get started with iGCT?",
        answer:
          "You can be up and running in minutes! Our platform offers instant setup with automated provisioning. Simply sign up, configure your preferences, and start making calls immediately.",
      },
      {
        question: "Do I need any special hardware or software?",
        answer:
          "No special hardware is required. iGCT works through your web browser, mobile app, or can integrate with your existing CRM and business tools. All you need is an internet connection.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "How does iGCT pricing work?",
        answer:
          "We offer transparent monthly pricing with three tiers: Starter ($29/month), Professional ($79/month), and Enterprise ($199/month). Each plan includes a set number of minutes with additional usage billed at competitive per-minute rates.",
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer:
          "No setup fees, no hidden costs. Our pricing is completely transparent with no long-term contracts required. You only pay for what you use.",
      },
      {
        question: "Can I change my plan at any time?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.",
      },
    ],
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        question: "Which countries can I call with iGCT?",
        answer:
          "iGCT provides coverage to 150+ countries worldwide with premium voice quality. We have local presence numbers in major markets and partnerships with top-tier carriers globally.",
      },
      {
        question: "Can iGCT integrate with my CRM?",
        answer:
          "Yes! We offer native integrations with popular CRMs like Salesforce, HubSpot, and many others. We also provide API access for custom integrations.",
      },
      {
        question: "What analytics and reporting features are available?",
        answer:
          "Our platform provides comprehensive analytics including call success rates, quality metrics, cost analysis, team performance dashboards, and custom reporting with data exports.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer 24/7 support for all customers with multiple channels including live chat, phone support, and email. Enterprise customers get dedicated account managers and priority support.",
      },
      {
        question: "What is your uptime guarantee?",
        answer:
          "We provide a 99.9% uptime SLA backed by redundant data centers globally and real-time network monitoring. Our infrastructure is designed for maximum reliability.",
      },
      {
        question: "How secure is the iGCT platform?",
        answer:
          "Security is our top priority. We use end-to-end encryption, are SOC 2 Type II certified, and comply with GDPR and HIPAA requirements. Regular security audits ensure ongoing protection.",
      },
    ],
  },
  {
    category: "Account Management",
    questions: [
      {
        question: "How do I manage multiple users on my account?",
        answer:
          "Our platform includes comprehensive user management with role-based access control, team performance tracking, and collaborative workflows. Admins can easily add, remove, and manage user permissions.",
      },
      {
        question: "Can I port my existing phone numbers?",
        answer:
          "Yes, we support number porting from most carriers. Our team will handle the entire process to ensure a smooth transition with minimal downtime.",
      },
      {
        question: "What happens if I need to cancel my service?",
        answer:
          "You can cancel anytime with no penalties or fees. We provide data export options and will assist with transitioning to ensure business continuity.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-sky-100 rounded-full p-4 w-fit mx-auto mb-6">
              <HelpCircle className="h-12 w-12 text-sky-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about iGCT and our global cloud telephony services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">Our support team is here to help you get the most out of iGCT.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-sky-100 rounded-full p-4 w-fit mx-auto mb-4">
                    <Phone className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                  <Button className="bg-sky-600 hover:bg-sky-700" asChild>
                    <Link href="tel:+15095550123">+1 (509) 555-0123</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-sky-100 rounded-full p-4 w-fit mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant answers to your questions</p>
                  <Button
                    variant="outline"
                    className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Start Chat</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />
    </main>
  )
}
