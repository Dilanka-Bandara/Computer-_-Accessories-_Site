import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Up to <span className="text-blue-600">30% Off</span> on Gaming PCs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Build your dream setup with premium computer parts and components. From high-performance processors to
              cutting-edge graphics cards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
              >
                View Deals
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder-976v2.png"
              alt="Gaming PC Setup"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
              30% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
