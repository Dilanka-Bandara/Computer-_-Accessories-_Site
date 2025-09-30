import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderConfirmation } from "@/components/order-confirmation"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <OrderConfirmation />
      </main>
      <Footer />
    </div>
  )
}
