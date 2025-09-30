import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Storage - TechParts Hub",
  description: "Find SSDs, HDDs, and storage solutions for all your data needs.",
}

export default function StoragePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPage
        category="storage"
        title="Storage Solutions"
        description="Store more with our collection of SSDs, HDDs, and external storage devices."
      />
      <Footer />
    </div>
  )
}
