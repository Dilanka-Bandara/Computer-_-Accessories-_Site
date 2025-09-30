import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <ProductDetail productId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
