"use client"

import Link from "next/link"
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWishlist } from "@/contexts/wishlist-context"
import { useCart } from "@/contexts/cart-context"

export function WishlistPage() {
  const { state, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      inStock: item.inStock,
      quantity: 1,
    })
  }

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save items you love for later by clicking the heart icon.</p>
          <Link href="/shop">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">{state.itemCount} items saved for later</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {state.items.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {item.originalPrice > item.price && <Badge className="bg-red-500 text-white">SALE</Badge>}
                  {!item.inStock && <Badge variant="secondary">Out of Stock</Badge>}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{item.brand}</span>
                </div>

                <Link href={`/product/${item.id}`}>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {item.name}
                  </h3>
                </Link>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!item.inStock}
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/shop">
          <Button variant="outline" className="bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
