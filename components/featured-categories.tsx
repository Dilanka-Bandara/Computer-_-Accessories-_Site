import Link from "next/link"
import {
  Laptop,
  Cpu,
  Monitor,
  HardDrive,
  MemoryStick,
  CircuitBoardIcon as Motherboard,
  Headphones,
  Mouse,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Laptops", icon: Laptop, href: "/shop/laptops", color: "text-blue-600" },
  { name: "Processors", icon: Cpu, href: "/shop/processors", color: "text-green-600" },
  { name: "Graphics Cards", icon: Monitor, href: "/shop/graphics-cards", color: "text-blue-600" },
  { name: "Motherboards", icon: Motherboard, href: "/shop/motherboards", color: "text-green-600" },
  { name: "Memory", icon: MemoryStick, href: "/shop/memory", color: "text-blue-600" },
  { name: "Storage", icon: HardDrive, href: "/shop/storage", color: "text-green-600" },
  { name: "Accessories", icon: Headphones, href: "/shop?category=accessories", color: "text-blue-600" },
  { name: "Peripherals", icon: Mouse, href: "/shop?category=peripherals", color: "text-green-600" },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">Find exactly what you need for your build</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group border-border">
                <CardContent className="p-6 text-center">
                  <category.icon
                    className={`w-8 h-8 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="font-medium text-foreground text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
