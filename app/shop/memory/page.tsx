import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Memory & RAM - TechParts Hub",
  description: "Upgrade your system with high-speed RAM and memory modules from trusted brands.",
}

export default function MemoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="memory"
        title="Memory & RAM"
        description="Boost your system performance with high-speed memory and RAM modules."
      />
      <Footer />
    </div>
  )
}
