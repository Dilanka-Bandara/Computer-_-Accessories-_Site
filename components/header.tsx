"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, User, Menu, X, LogOut, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { useTheme } from "@/contexts/theme-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state: cartState } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const { state: wishlistState } = useWishlist()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TP</span>
            </div>
            <span className="text-xl font-bold text-foreground">TechParts Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Shop
            </Link>
            <Link href="/deals" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Deals
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products, brands, categories..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="hidden sm:flex">
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span className="hidden lg:inline">Wishlist</span>
                {wishlistState.itemCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistState.itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden lg:inline">Cart</span>
                <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              </Button>
            </Link>

            {/* User Account */}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span className="hidden lg:inline">{user.firstName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Order History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">Sign In</span>
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 w-full" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-muted-foreground hover:text-primary font-medium py-2">
                  Home
                </Link>
                <Link href="/shop" className="text-muted-foreground hover:text-primary font-medium py-2">
                  Shop
                </Link>
                <Link href="/deals" className="text-muted-foreground hover:text-primary font-medium py-2">
                  Deals
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary font-medium py-2">
                  About
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary font-medium py-2">
                  Contact
                </Link>
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className="text-muted-foreground hover:text-primary font-medium py-2 text-left flex items-center space-x-2"
                >
                  {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </button>
                {isAuthenticated ? (
                  <>
                    <Link href="/account" className="text-muted-foreground hover:text-primary font-medium py-2">
                      My Account
                    </Link>
                    <button onClick={logout} className="text-red-600 hover:text-red-700 font-medium py-2 text-left">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="text-muted-foreground hover:text-primary font-medium py-2">
                    Sign In
                  </Link>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
