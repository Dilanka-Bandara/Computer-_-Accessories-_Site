import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Laptops - TechParts Hub",
  description: "Browse our extensive collection of laptops, gaming laptops, and ultrabooks from top brands.",
}

export default function LaptopsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="laptops"
        title="Laptops & Notebooks"
        description="Discover high-performance laptops, gaming notebooks, and ultrabooks for work and play."
      />
      <Footer />
    </div>
  )
}
