"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import Link from "next/link"

// Mock product data
const allProducts = [
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
    inStock: true,
    isOnSale: true,
    features: ["12 Cores", "24 Threads", "4.7GHz Boost"],
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
    inStock: true,
    isOnSale: true,
    features: ["16GB GDDR6X", "Ray Tracing", "DLSS 3"],
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
    inStock: true,
    isOnSale: true,
    features: ["AM5 Socket", "DDR5", "PCIe 5.0"],
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
    inStock: true,
    isOnSale: true,
    features: ["5600MHz", "32GB (2x16GB)", "RGB"],
  },
  {
    id: 5,
    name: "Samsung 980 PRO 2TB NVMe SSD",
    brand: "Samsung",
    category: "Storage",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 312,
    image: "/placeholder.svg?height=200&width=200&text=Samsung+SSD",
    inStock: true,
    isOnSale: true,
    features: ["7000MB/s Read", "2TB Capacity", "PCIe 4.0"],
  },
  {
    id: 6,
    name: "Intel Core i7-13700K",
    brand: "Intel",
    category: "Processors",
    price: 409.99,
    originalPrice: 459.99,
    rating: 4.7,
    reviews: 178,
    image: "/placeholder.svg?height=200&width=200&text=Intel+i7",
    inStock: true,
    isOnSale: true,
    features: ["16 Cores", "24 Threads", "5.4GHz Boost"],
  },
  {
    id: 7,
    name: "MSI GeForce RTX 4070 Gaming X Trio",
    brand: "MSI",
    category: "Graphics Cards",
    price: 599.99,
    originalPrice: 649.99,
    rating: 4.6,
    reviews: 94,
    image: "/placeholder.svg?height=200&width=200&text=MSI+RTX+4070",
    inStock: false,
    isOnSale: false,
    features: ["12GB GDDR6X", "Triple Fan", "RGB Mystic Light"],
  },
  {
    id: 8,
    name: "Gigabyte B650 AORUS Elite AX",
    brand: "Gigabyte",
    category: "Motherboards",
    price: 199.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 87,
    image: "/placeholder.svg?height=200&width=200&text=Gigabyte+B650",
    inStock: true,
    isOnSale: false,
    features: ["AM5 Socket", "WiFi 6E", "USB 3.2 Gen2"],
  },
]

interface ProductGridProps {
  filters: {
    priceRange: number[]
    brands: string[]
    categories: string[]
    availability: string
  }
  sortBy: string
}

export function ProductGrid({ filters, sortBy }: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    // Price range filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false
    }

    // Brand filter
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false
    }

    // Availability filter
    if (filters.availability === "in-stock" && !product.inStock) {
      return false
    }
    if (filters.availability === "on-sale" && !product.isOnSale) {
      return false
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high":
        return a.price - b.price
      case "price-high-low":
        return b.price - a.price
      case "best-rated":
        return b.rating - a.rating
      case "name-a-z":
        return a.name.localeCompare(b.name)
      case "most-popular":
        return b.reviews - a.reviews
      case "newest":
      default:
        return b.id - a.id
    }
  })

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage)

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className="space-y-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isOnSale && <Badge className="bg-red-500 text-white">SALE</Badge>}
                  {!product.inStock && <Badge variant="secondary">Out of Stock</Badge>}
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{product.brand}</span>
                </div>

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

                <div className="flex flex-wrap gap-1 mb-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More / Pagination */}
      {currentPage < totalPages && (
        <div className="text-center">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      )}

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your filters.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  )
}
