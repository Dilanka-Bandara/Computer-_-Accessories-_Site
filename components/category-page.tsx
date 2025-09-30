"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { ProductSort } from "@/components/product-sort"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

interface CategoryPageProps {
  category: string
  title: string
  description: string
}

// Sample products data filtered by category
const allProducts = [
  {
    id: 1,
    name: "Gaming Laptop Pro X1",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "/gaming-laptop.png",
    rating: 4.8,
    reviews: 124,
    brand: "TechBrand",
    category: "laptops",
    availability: "in-stock",
    features: ["Intel i7", "RTX 4060", "16GB RAM", "512GB SSD"],
  },
  {
    id: 2,
    name: "Intel Core i9-13900K",
    price: 589.99,
    image: "/intel-processor.png",
    rating: 4.9,
    reviews: 89,
    brand: "Intel",
    category: "processors",
    availability: "in-stock",
    features: ["24 Cores", "5.8GHz Boost", "LGA1700", "125W TDP"],
  },
  {
    id: 3,
    name: "NVIDIA RTX 4080 Super",
    price: 999.99,
    image: "/nvidia-graphics-card.png",
    rating: 4.7,
    reviews: 156,
    brand: "NVIDIA",
    category: "graphics-cards",
    availability: "in-stock",
    features: ["16GB GDDR6X", "Ray Tracing", "DLSS 3", "4K Gaming"],
  },
  {
    id: 4,
    name: "ASUS ROG Strix Z790-E",
    price: 449.99,
    image: "/placeholder-azrut.png",
    rating: 4.6,
    reviews: 78,
    brand: "ASUS",
    category: "motherboards",
    availability: "in-stock",
    features: ["LGA1700", "DDR5", "WiFi 6E", "RGB Lighting"],
  },
  {
    id: 5,
    name: "Corsair Vengeance DDR5-5600",
    price: 179.99,
    image: "/ram-memory.png",
    rating: 4.5,
    reviews: 92,
    brand: "Corsair",
    category: "memory",
    availability: "in-stock",
    features: ["32GB Kit", "5600MHz", "RGB", "Low Latency"],
  },
  {
    id: 6,
    name: "Samsung 980 PRO 2TB",
    price: 199.99,
    image: "/placeholder-y530q.png",
    rating: 4.8,
    reviews: 203,
    brand: "Samsung",
    category: "storage",
    availability: "in-stock",
    features: ["NVMe M.2", "7000MB/s", "2TB Capacity", "5 Year Warranty"],
  },
]

export function CategoryPage({ category, title, description }: CategoryPageProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    brands: [] as string[],
    availability: "all",
  })
  const [sortBy, setSortBy] = useState("featured")

  // Filter products by category
  const categoryProducts = useMemo(() => {
    return allProducts.filter((product) => product.category === category)
  }, [category])

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    const filtered = categoryProducts.filter((product) => {
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand)
      const matchesAvailability = filters.availability === "all" || product.availability === filters.availability

      return matchesPrice && matchesBrand && matchesAvailability
    })

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // Keep original order for newest
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [categoryProducts, filters, sortBy])

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
            <Filter className="w-4 h-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filters Sidebar */}
        <aside className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
          <ProductFilters filters={filters} onFiltersChange={setFilters} />
        </aside>

        {/* Products Section */}
        <div className="flex-1">
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing {filteredProducts.length} products</p>
            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>

          {/* Products Grid */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  )
}
