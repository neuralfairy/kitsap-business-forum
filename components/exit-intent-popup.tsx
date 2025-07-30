"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Gift } from "lucide-react"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    let hasShown = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        hasShown = true
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardHeader className="text-center relative">
          <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="absolute right-2 top-2">
            <X className="h-4 w-4" />
          </Button>
          <div className="bg-sky-100 rounded-full p-3 w-fit mx-auto mb-4">
            <Gift className="h-8 w-8 text-sky-600" />
          </div>
          <CardTitle className="text-2xl text-gray-900">Wait! Don't Miss Out</CardTitle>
          <p className="text-gray-600">Get 30% off your first 3 months of iGCT service</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-sky-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sky-600 mb-1">30% OFF</div>
            <div className="text-sm text-gray-600">Limited time offer for new customers</div>
          </div>

          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="w-full bg-sky-600 hover:bg-sky-700">Claim Your Discount</Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            No spam, unsubscribe at any time. Offer valid for new customers only.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
