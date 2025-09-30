import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}
