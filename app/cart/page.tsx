import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartPage } from "@/components/cart-page"

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <CartPage />
      </main>
      <Footer />
    </div>
  )
}
