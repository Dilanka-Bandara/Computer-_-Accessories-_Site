import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Graphics Cards - TechParts Hub",
  description: "Find the best graphics cards and GPUs for gaming, content creation, and professional work.",
}

export default function GraphicsCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="graphics-cards"
        title="Graphics Cards & GPUs"
        description="Unleash stunning visuals with our selection of high-end graphics cards and GPUs."
      />
      <Footer />
    </div>
  )
}
