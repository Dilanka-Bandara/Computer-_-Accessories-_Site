"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "AMD Ryzen 9 7900X",
    price: 549.99,
    originalPrice: 649.99,
    rating: 4.8,
    reviews: 124,
    image: "/amd-ryzen-processor.png",
    category: "Processors",
  },
  {
    id: 2,
    name: "NVIDIA RTX 4080 Super",
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 89,
    image: "/nvidia-graphics-card.png",
    category: "Graphics Cards",
  },
  {
    id: 3,
    name: "ASUS ROG Strix B650E",
    price: 329.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 156,
    image: "/asus-motherboard.png",
    category: "Motherboards",
  },
  {
    id: 4,
    name: "Corsair Vengeance 32GB DDR5",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.6,
    reviews: 203,
    image: "/corsair-ram.png",
    category: "Memory",
  },
  {
    id: 5,
    name: "Samsung 980 PRO 2TB NVMe",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 312,
    image: "/placeholder-vlhvr.png",
    category: "Storage",
  },
]

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Top picks from our tech experts</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(currentIndex, currentIndex + 4).map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      SALE
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
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
      </div>
    </section>
  )
}
