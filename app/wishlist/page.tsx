import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WishlistPage } from "@/components/wishlist-page"

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <WishlistPage />
      </main>
      <Footer />
    </div>
  )
}
