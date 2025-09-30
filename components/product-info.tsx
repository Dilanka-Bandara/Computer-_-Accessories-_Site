"use client"

import { useState } from "react"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  inStock: boolean
  stockCount: number
  description: string
  features: string[]
  warranty: string
  sku: string
}

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: "/amd-ryzen-processor.png", // In a real app, this would come from the product data
      inStock: product.inStock,
      quantity,
    })
  }

  return (
    <div className="space-y-6">
      {/* Product Title and Brand */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Badge variant="outline">{product.category}</Badge>
          <span className="text-sm text-gray-500">SKU: {product.sku}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-lg text-gray-600">by {product.brand}</p>
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
          <span className="text-lg font-medium text-gray-900">{product.rating}</span>
        </div>
        <span className="text-gray-500">({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <Badge className="bg-red-500 text-white">Save {discountPercentage}%</Badge>
            </>
          )}
        </div>
        {product.originalPrice > product.price && (
          <p className="text-sm text-green-600">You save ${(product.originalPrice - product.price).toFixed(2)}</p>
        )}
      </div>

      {/* Stock Status */}
      <div className="space-y-2">
        {product.inStock ? (
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium">In Stock</span>
            <span className="text-gray-500">({product.stockCount} available)</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-red-600 font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 text-gray-600 hover:text-gray-800"
              disabled={!product.inStock}
            >
              -
            </button>
            <input
              id="quantity"
              type="number"
              min="1"
              max={product.stockCount}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
              className="w-16 px-2 py-2 text-center border-0 focus:ring-0"
              disabled={!product.inStock}
            />
            <button
              onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
              className="px-3 py-2 text-gray-600 hover:text-gray-800"
              disabled={!product.inStock}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            size="lg"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={isWishlisted ? "text-red-600 border-red-600" : ""}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Shipping and Warranty Info */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Truck className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium text-gray-900">Free Shipping</p>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <RotateCcw className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900">30-Day Returns</p>
            <p className="text-sm text-gray-600">Easy returns and exchanges</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-purple-600" />
          <div>
            <p className="font-medium text-gray-900">{product.warranty}</p>
            <p className="text-sm text-gray-600">Manufacturer warranty included</p>
          </div>
        </div>
      </div>
    </div>
  )
}
