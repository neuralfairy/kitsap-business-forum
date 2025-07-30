"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp } from "lucide-react"

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50)
  const [callsPerDay, setCallsPerDay] = useState(100)
  const [currentCostPerCall, setCurrentCostPerCall] = useState(0.15)

  const calculateSavings = () => {
    const monthlyCallVolume = employees * callsPerDay * 22 // 22 working days
    const currentMonthlyCost = monthlyCallVolume * currentCostPerCall
    const igctMonthlyCost = monthlyCallVolume * 0.05 // 70% savings
    const monthlySavings = currentMonthlyCost - igctMonthlyCost
    const annualSavings = monthlySavings * 12

    return {
      monthlyCallVolume,
      currentMonthlyCost,
      igctMonthlyCost,
      monthlySavings,
      annualSavings,
      savingsPercentage: ((monthlySavings / currentMonthlyCost) * 100).toFixed(0),
    }
  }

  const results = calculateSavings()

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculate Your Potential Savings</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how much you could save by switching to our iGCT platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-sky-600" />
                Your Current Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="employees">Number of Sales Representatives</Label>
                <Input
                  id="employees"
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="calls">Average Calls per Rep per Day</Label>
                <Input
                  id="calls"
                  type="number"
                  value={callsPerDay}
                  onChange={(e) => setCallsPerDay(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="cost">Current Cost per Call ($)</Label>
                <Input
                  id="cost"
                  type="number"
                  step="0.01"
                  value={currentCostPerCall}
                  onChange={(e) => setCurrentCostPerCall(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-gradient-to-br from-sky-600 to-sky-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <TrendingUp className="h-5 w-5 mr-2" />
                Your Potential Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{results.monthlyCallVolume.toLocaleString()}</div>
                  <div className="text-sky-100 text-sm">Monthly Calls</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">{results.savingsPercentage}%</div>
                  <div className="text-sky-100 text-sm">Cost Reduction</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sky-100">Current Monthly Cost:</span>
                  <span className="font-bold">${results.currentMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sky-100">iGCT Monthly Cost:</span>
                  <span className="font-bold">${results.igctMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="border-t border-sky-400 pt-3">
                  <div className="flex justify-between items-center text-lg">
                    <span>Monthly Savings:</span>
                    <span className="font-bold">${results.monthlySavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold mt-2">
                    <span>Annual Savings:</span>
                    <span>${results.annualSavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-white text-sky-700 hover:bg-gray-100 font-semibold" size="lg">
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
