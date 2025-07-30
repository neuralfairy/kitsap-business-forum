import { Shield, Award, Lock, CheckCircle } from "lucide-react"

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">Enterprise-grade security and compliance you can rely on</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-white rounded-full p-4 shadow-md">
              <Shield className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-sm font-semibold text-gray-900">SOC 2 Certified</div>
            <div className="text-xs text-gray-600">Security Compliance</div>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-white rounded-full p-4 shadow-md">
              <Lock className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-sm font-semibold text-gray-900">GDPR Compliant</div>
            <div className="text-xs text-gray-600">Data Protection</div>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-white rounded-full p-4 shadow-md">
              <Award className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-sm font-semibold text-gray-900">ISO 27001</div>
            <div className="text-xs text-gray-600">Information Security</div>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-white rounded-full p-4 shadow-md">
              <CheckCircle className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-sm font-semibold text-gray-900">99.9% Uptime</div>
            <div className="text-xs text-gray-600">Reliability SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
