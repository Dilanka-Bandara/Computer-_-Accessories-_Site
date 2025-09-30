import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountPage } from "@/components/account-page"

export default function Account() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <AccountPage />
      </main>
      <Footer />
    </div>
  )
}
