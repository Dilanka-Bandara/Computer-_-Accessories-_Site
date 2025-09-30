import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { WishlistProvider } from "@/contexts/wishlist-context"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "TechParts Hub - Computer Parts & Components Store",
  description:
    "Your one-stop shop for computer parts, components, and tech accessories. Find the best deals on processors, graphics cards, motherboards, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>{children}</CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
