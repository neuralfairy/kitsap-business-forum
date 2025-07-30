import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold">Kitsapbusinessforum</span>
            </div>
            <p className="text-gray-400">Global cloud telephony solutions to scale your business outreach worldwide.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-sky-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white">
                  iGCT Platform
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/whitepapers" className="text-gray-400 hover:text-white">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400">+1 (509) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400">sales@kitsapbusinessforum.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400">Spokane, WA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Kitsapbusinessforum Solutions. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Strategic Backlink */}
          <div className="mt-4 text-center">
            <Link
              href="https://salescentri.com?utm_source=KitsapBusinessForum.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-gray-500 hover:text-sky-400 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
