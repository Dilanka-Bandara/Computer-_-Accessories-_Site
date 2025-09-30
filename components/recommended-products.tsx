"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

// Mock recommended products
const getRecommendedProducts = (currentProductId: string, category: string) => {
  const allProducts = [
    {
      id: 3,
      name: "ASUS ROG Strix B650E-E Gaming",
      category: "Motherboards",
      price: 329.99,
      originalPrice: 399.99,
      rating: 4.7,
      reviews: 156,
      image: "/asus-motherboard.png",
    },
    {
      id: 4,
      name: "Corsair Vengeance DDR5 32GB Kit",
      category: "Memory",
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.6,
      reviews: 203,
      image: "/corsair-ram.png",
    },
    {
      id: 5,
      name: "Samsung 980 PRO 2TB NVMe SSD",
      category: "Storage",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 312,
      image: "/placeholder.svg?height=200&width=200&text=Samsung+SSD",
    },
    {
      id: 6,
      name: "Intel Core i7-13700K",
      category: "Processors",
      price: 409.99,
      originalPrice: 459.99,
      rating: 4.7,
      reviews: 178,
      image: "/placeholder.svg?height=200&width=200&text=Intel+i7",
    },
  ]

  return allProducts.filter((product) => product.id.toString() !== currentProductId).slice(0, 4)
}

interface RecommendedProductsProps {
  currentProductId: string
  category: string
}

export function RecommendedProducts({ currentProductId, category }: RecommendedProductsProps) {
  const recommendedProducts = getRecommendedProducts(currentProductId, category)

  return (
    <section className="border-t border-gray-200 pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Products</h2>
        <p className="text-gray-600">Complete your build with these compatible components</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    SALE
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">{product.category}</p>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

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
    </section>
  )
}
