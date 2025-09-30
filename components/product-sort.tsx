"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductSortProps {
  sortBy: string
  onSortChange: (value: string) => void
}

export function ProductSort({ sortBy, onSortChange }: ProductSortProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="price-low-high">Price: Low to High</SelectItem>
          <SelectItem value="price-high-low">Price: High to Low</SelectItem>
          <SelectItem value="best-rated">Best Rated</SelectItem>
          <SelectItem value="most-popular">Most Popular</SelectItem>
          <SelectItem value="name-a-z">Name: A to Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
