import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TP</span>
              </div>
              <span className="text-xl font-bold">TechParts Hub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for computer parts and components. Quality products, competitive prices, and
              excellent service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-white text-sm transition-colors">
                Shop
              </Link>
              <Link href="/deals" className="text-gray-400 hover:text-white text-sm transition-colors">
                Deals
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/shop/laptops" className="text-gray-400 hover:text-white text-sm transition-colors">
                Laptops
              </Link>
              <Link href="/shop/processors" className="text-gray-400 hover:text-white text-sm transition-colors">
                Processors
              </Link>
              <Link href="/shop/graphics-cards" className="text-gray-400 hover:text-white text-sm transition-colors">
                Graphics Cards
              </Link>
              <Link href="/shop/motherboards" className="text-gray-400 hover:text-white text-sm transition-colors">
                Motherboards
              </Link>
              <Link href="/shop/memory" className="text-gray-400 hover:text-white text-sm transition-colors">
                Memory & Storage
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Subscribe to get special offers and updates.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechParts Hub. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
