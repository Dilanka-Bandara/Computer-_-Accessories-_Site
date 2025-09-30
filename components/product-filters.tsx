"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

const brands = ["AMD", "Intel", "NVIDIA", "ASUS", "MSI", "Gigabyte", "Corsair", "G.Skill", "Samsung", "Western Digital"]

const categories = [
  "Processors",
  "Graphics Cards",
  "Motherboards",
  "Memory",
  "Storage",
  "Power Supplies",
  "Cases",
  "Cooling",
  "Accessories",
]

interface ProductFiltersProps {
  filters: {
    priceRange: number[]
    brands: string[]
    categories: string[]
    availability: string
  }
  onFiltersChange: (filters: any) => void
}

export function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange)

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked ? [...filters.brands, brand] : filters.brands.filter((b) => b !== brand)

    onFiltersChange({ ...filters, brands: newBrands })
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked ? [...filters.categories, category] : filters.categories.filter((c) => c !== category)

    onFiltersChange({ ...filters, categories: newCategories })
  }

  const handlePriceRangeChange = (value: number[]) => {
    setLocalPriceRange(value)
    onFiltersChange({ ...filters, priceRange: value })
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      priceRange: [0, 2000],
      brands: [],
      categories: [],
      availability: "all",
    }
    setLocalPriceRange([0, 2000])
    onFiltersChange(clearedFilters)
  }

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-blue-600 hover:text-blue-700">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={localPriceRange}
            onValueChange={handlePriceRangeChange}
            max={2000}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${localPriceRange[0]}</span>
            <span>${localPriceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={filters.availability}
            onValueChange={(value) => onFiltersChange({ ...filters, availability: value })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="availability-all" />
              <Label htmlFor="availability-all" className="text-sm font-normal cursor-pointer">
                All Products
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-stock" id="availability-in-stock" />
              <Label htmlFor="availability-in-stock" className="text-sm font-normal cursor-pointer">
                In Stock Only
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="on-sale" id="availability-on-sale" />
              <Label htmlFor="availability-on-sale" className="text-sm font-normal cursor-pointer">
                On Sale
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
