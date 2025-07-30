import { Button } from "@/components/ui/button"
import { Globe, Phone, BarChart3, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function FeaturesPreview() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect to 150+ countries with premium voice quality and local presence numbers.",
    },
    {
      icon: Phone,
      title: "Cloud-Based Platform",
      description: "Fully managed cloud infrastructure with 99.9% uptime SLA and automatic scaling.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time call analytics, performance metrics, and detailed reporting dashboards.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and comprehensive data protection.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Deploy in minutes with our intuitive setup wizard and API integrations.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user dashboards, role-based access, and team performance tracking.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful iGCT Features for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to scale your global communications with enterprise-grade reliability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-sky-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800"
            asChild
          >
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
