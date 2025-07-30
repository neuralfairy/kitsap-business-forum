"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 h-96">
          <Card className="h-full shadow-2xl">
            <CardHeader className="bg-sky-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Live Support</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-sky-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sky-100 text-sm">We're here to help!</p>
            </CardHeader>
            <CardContent className="flex flex-col h-full p-0">
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Hi! How can we help you with iGCT today?</p>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  />
                  <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-sky-600 hover:bg-sky-700 rounded-full w-14 h-14 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}
