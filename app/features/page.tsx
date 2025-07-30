import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Phone, BarChart3, Shield, Zap, Users, Headphones, Settings, Cloud } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "iGCT Features - Global Cloud Telephony Platform | Kitsapbusinessforum",
  description:
    "Explore powerful iGCT features including global reach, advanced analytics, enterprise security, and seamless integrations for your business communications.",
  keywords:
    "igct features, cloud telephony features, global calling platform, voice solutions, business communications",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect to 150+ countries with premium voice quality",
      details: [
        "Local presence numbers in major markets",
        "Premium carrier partnerships worldwide",
        "Intelligent call routing for optimal quality",
        "Real-time network monitoring",
      ],
    },
    {
      icon: Phone,
      title: "Cloud-Based Platform",
      description: "Fully managed infrastructure with 99.9% uptime SLA",
      details: [
        "Auto-scaling based on demand",
        "Redundant data centers globally",
        "Zero maintenance required",
        "Instant provisioning",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and detailed reporting",
      details: [
        "Call success rates and quality metrics",
        "Cost analysis and optimization",
        "Team performance dashboards",
        "Custom reporting and exports",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance",
      details: [
        "End-to-end call encryption",
        "SOC 2 Type II certified",
        "GDPR and HIPAA compliant",
        "Regular security audits",
      ],
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Deploy in minutes with intuitive setup",
      details: [
        "One-click integrations",
        "API-first architecture",
        "Bulk number provisioning",
        "Automated configuration",
      ],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user dashboards and role management",
      details: [
        "Role-based access control",
        "Team performance tracking",
        "Shared contact lists",
        "Collaborative workflows",
      ],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support whenever you need it",
      details: [
        "Dedicated account managers",
        "Technical support team",
        "Live chat and phone support",
        "Comprehensive documentation",
      ],
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description: "Seamless integration with popular CRMs",
      details: ["Salesforce native integration", "HubSpot connector", "Custom API integrations", "Real-time data sync"],
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Grows with your business needs",
      details: [
        "Unlimited concurrent calls",
        "Global load balancing",
        "Edge computing optimization",
        "Elastic scaling",
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful iGCT Features for{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to scale your global communications with enterprise-grade reliability, security, and
              performance.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800"
              asChild
            >
              <Link href="/pricing">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-sky-100 rounded-lg p-3 w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See iGCT in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience our platform with an interactive demo</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="mb-4">$ igct-demo --start</div>
                  <div className="mb-2">✓ Connecting to global network...</div>
                  <div className="mb-2">✓ Provisioning local numbers...</div>
                  <div className="mb-2">✓ Initializing analytics dashboard...</div>
                  <div className="mb-4">✓ Ready to make calls worldwide!</div>
                  <div className="text-yellow-400">Demo Mode: Try calling +1-555-DEMO-123</div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800"
                    asChild
                  >
                    <Link href="/contact">Request Live Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Start your free trial today and see how iGCT can transform your business communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/pricing">Start Free Trial</Link>
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
          </div>
        </div>
      </section>
    </main>
  )
}
