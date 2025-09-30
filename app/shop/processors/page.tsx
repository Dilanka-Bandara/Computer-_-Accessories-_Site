import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Processors - TechParts Hub",
  description: "Shop the latest CPUs and processors from Intel, AMD, and other leading manufacturers.",
}

export default function ProcessorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="processors"
        title="Processors & CPUs"
        description="Power your build with high-performance processors from Intel, AMD, and more."
      />
      <Footer />
    </div>
  )
}
