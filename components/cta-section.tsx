import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Phone className="h-16 w-16 text-white mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Communications?
          </h2>

          <p className="text-xl text-sky-100 mb-8">
            Join over 10,000 businesses worldwide who trust iGCT for their global telephony needs. Start your free trial
            today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/pricing">
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
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          <p className="text-sky-200 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
