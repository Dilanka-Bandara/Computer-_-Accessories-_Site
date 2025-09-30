"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Star, ShoppingCart, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock deals data
const featuredDeals = [
  {
    id: 1,
    name: "AMD Ryzen 9 7900X Processor",
    brand: "AMD",
    category: "Processors",
    price: 549.99,
    originalPrice: 649.99,
    rating: 4.8,
    reviews: 124,
    image: "/amd-ryzen-processor.png",
    discount: 15,
    timeLeft: "2 days",
    isLimitedTime: true,
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4080 Super",
    brand: "NVIDIA",
    category: "Graphics Cards",
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 89,
    image: "/nvidia-graphics-card.png",
    discount: 17,
    timeLeft: "5 hours",
    isLimitedTime: true,
  },
  {
    id: 3,
    name: "ASUS ROG Strix B650E-E Gaming",
    brand: "ASUS",
    category: "Motherboards",
    price: 329.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 156,
    image: "/asus-motherboard.png",
    discount: 18,
    timeLeft: "1 day",
    isLimitedTime: false,
  },
  {
    id: 4,
    name: "Corsair Vengeance DDR5 32GB Kit",
    brand: "Corsair",
    category: "Memory",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.6,
    reviews: 203,
    image: "/corsair-ram.png",
    discount: 17,
    timeLeft: "3 days",
    isLimitedTime: false,
  },
]

export function DealsPage() {
  const [filter, setFilter] = useState("all")

  const filteredDeals = featuredDeals.filter((deal) => {
    if (filter === "limited") return deal.isLimitedTime
    if (filter === "processors") return deal.category === "Processors"
    if (filter === "graphics") return deal.category === "Graphics Cards"
    if (filter === "motherboards") return deal.category === "Motherboards"
    if (filter === "memory") return deal.category === "Memory"
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          <span>Limited Time Offers</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Deals & Offers</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Save big on top computer components with our exclusive deals. Limited quantities and time-sensitive offers!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={filter === "all" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          All Deals
        </Button>
        <Button
          variant={filter === "limited" ? "default" : "outline"}
          onClick={() => setFilter("limited")}
          className={filter === "limited" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          Limited Time
        </Button>
        <Button
          variant={filter === "processors" ? "default" : "outline"}
          onClick={() => setFilter("processors")}
          className={filter === "processors" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          Processors
        </Button>
        <Button
          variant={filter === "graphics" ? "default" : "outline"}
          onClick={() => setFilter("graphics")}
          className={filter === "graphics" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          Graphics Cards
        </Button>
        <Button
          variant={filter === "motherboards" ? "default" : "outline"}
          onClick={() => setFilter("motherboards")}
          className={filter === "motherboards" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          Motherboards
        </Button>
        <Button
          variant={filter === "memory" ? "default" : "outline"}
          onClick={() => setFilter("memory")}
          className={filter === "memory" ? "bg-blue-600 text-white" : "bg-transparent"}
        >
          Memory
        </Button>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  <Badge className="bg-red-500 text-white">{deal.discount}% OFF</Badge>
                  {deal.isLimitedTime && <Badge className="bg-orange-500 text-white">LIMITED</Badge>}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center justify-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Ends in {deal.timeLeft}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {deal.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{deal.brand}</span>
                </div>

                <Link href={`/product/${deal.id}`}>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {deal.name}
                  </h3>
                </Link>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({deal.reviews})</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${deal.price}</span>
                    <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    You save ${(deal.originalPrice - deal.price).toFixed(2)}
                  </p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Never Miss a Deal!</h2>
        <p className="text-blue-100 mb-6">
          Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
