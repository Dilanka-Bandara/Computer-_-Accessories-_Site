import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealsPage } from "@/components/deals-page"

export default function Deals() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <DealsPage />
      </main>
      <Footer />
    </div>
  )
}
