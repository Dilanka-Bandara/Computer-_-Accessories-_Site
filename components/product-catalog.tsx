"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { ProductSort } from "@/components/product-sort"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

export function ProductCatalog() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    brands: [],
    categories: [],
    availability: "all",
  })
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Computer Parts</h1>
        <p className="text-gray-600">Discover the latest in computer hardware and components</p>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <ProductFilters filters={filters} onFiltersChange={setFilters} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort and Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">Showing 1-24 of 156 products</p>
            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>

          {/* Product Grid */}
          <ProductGrid filters={filters} sortBy={sortBy} />
        </div>
      </div>
    </div>
  )
}
