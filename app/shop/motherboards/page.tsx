import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Motherboards - TechParts Hub",
  description: "Choose from a wide range of motherboards compatible with the latest processors and components.",
}

export default function MotherboardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="motherboards"
        title="Motherboards"
        description="Build the foundation of your PC with our premium motherboard selection."
      />
      <Footer />
    </div>
  )
}
