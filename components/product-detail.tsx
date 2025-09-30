"use client"

import { useState } from "react"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductSpecs } from "@/components/product-specs"
import { ProductReviews } from "@/components/product-reviews"
import { RecommendedProducts } from "@/components/recommended-products"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Mock product data - in a real app, this would come from an API
const getProductById = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "AMD Ryzen 9 7900X Processor",
      brand: "AMD",
      category: "Processors",
      price: 549.99,
      originalPrice: 649.99,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      stockCount: 15,
      images: [
        "/amd-ryzen-processor.png",
        "/placeholder.svg?height=400&width=400&text=AMD+Ryzen+Side",
        "/placeholder.svg?height=400&width=400&text=AMD+Ryzen+Box",
        "/placeholder.svg?height=400&width=400&text=AMD+Ryzen+Detail",
      ],
      description:
        "The AMD Ryzen 9 7900X is a high-performance desktop processor designed for enthusiasts and content creators. Built on the advanced Zen 4 architecture and manufactured using a cutting-edge 5nm process, this processor delivers exceptional performance for gaming, streaming, and productivity tasks.",
      features: [
        "12 Cores, 24 Threads",
        "Base Clock: 4.7 GHz",
        "Max Boost Clock: 5.6 GHz",
        "105W TDP",
        "AM5 Socket",
        "PCIe 5.0 Support",
        "DDR5 Memory Support",
        "Integrated Graphics",
      ],
      specifications: {
        Processor: {
          Cores: "12",
          Threads: "24",
          "Base Clock": "4.7 GHz",
          "Max Boost Clock": "5.6 GHz",
          Cache: "76MB Total",
          TDP: "105W",
          Socket: "AM5",
          Architecture: "Zen 4",
          Process: "5nm",
        },
        "Memory Support": {
          "Memory Type": "DDR5",
          "Memory Speed": "Up to DDR5-5200",
          "Memory Channels": "2",
          "Max Memory": "128GB",
        },
        Graphics: {
          "Integrated Graphics": "AMD Radeon Graphics",
          "Graphics Cores": "2",
          "Graphics Base Clock": "2200 MHz",
        },
        Connectivity: {
          "PCIe Support": "PCIe 5.0",
          "PCIe Lanes": "24 Lanes",
        },
      },
      warranty: "3 Years Limited Warranty",
      sku: "100-100000589WOF",
    },
    "2": {
      id: 2,
      name: "NVIDIA GeForce RTX 4080 Super",
      brand: "NVIDIA",
      category: "Graphics Cards",
      price: 999.99,
      originalPrice: 1199.99,
      rating: 4.9,
      reviews: 89,
      inStock: true,
      stockCount: 8,
      images: [
        "/nvidia-graphics-card.png",
        "/placeholder.svg?height=400&width=400&text=RTX+4080+Side",
        "/placeholder.svg?height=400&width=400&text=RTX+4080+Ports",
        "/placeholder.svg?height=400&width=400&text=RTX+4080+Box",
      ],
      description:
        "The NVIDIA GeForce RTX 4080 Super delivers exceptional 4K gaming performance and AI-accelerated content creation. Built on the advanced Ada Lovelace architecture, it features 16GB of high-speed GDDR6X memory and supports the latest ray tracing and DLSS 3 technologies.",
      features: [
        "16GB GDDR6X Memory",
        "10240 CUDA Cores",
        "Ray Tracing Cores (3rd Gen)",
        "Tensor Cores (4th Gen)",
        "DLSS 3 Support",
        "AV1 Encoding",
        "PCIe 4.0 Interface",
        "3x DisplayPort 1.4a, 1x HDMI 2.1",
      ],
      specifications: {
        GPU: {
          GPU: "AD103",
          "CUDA Cores": "10240",
          "RT Cores": "80 (3rd Gen)",
          "Tensor Cores": "320 (4th Gen)",
          "Base Clock": "2295 MHz",
          "Boost Clock": "2550 MHz",
          Memory: "16GB GDDR6X",
          "Memory Bus": "256-bit",
          "Memory Bandwidth": "736 GB/s",
        },
        Display: {
          DisplayPort: "3x DisplayPort 1.4a",
          HDMI: "1x HDMI 2.1",
          "Max Resolution": "7680x4320 @ 60Hz",
          "Multi-Monitor": "Up to 4 displays",
        },
        Power: {
          "Total Graphics Power": "320W",
          "Minimum PSU": "750W",
          "Power Connectors": "1x 16-pin (adapter included)",
        },
        Physical: {
          Length: "304mm",
          Width: "137mm",
          Slot: "3-slot",
          Weight: "1.29kg",
        },
      },
      warranty: "3 Years Limited Warranty",
      sku: "RTX4080S-16G-GAMING",
    },
  }

  return products[id as keyof typeof products] || null
}

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = getProductById(productId)
  const [activeTab, setActiveTab] = useState("specs")

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/shop?category=${product.category}`}>{product.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <ProductImageGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Product Details Tabs */}
      <div className="border-t border-gray-200 pt-8 mb-12">
        <div className="flex space-x-8 mb-8">
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-2 border-b-2 font-medium transition-colors ${
              activeTab === "specs"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 border-b-2 font-medium transition-colors ${
              activeTab === "reviews"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews ({product.reviews})
          </button>
        </div>

        {activeTab === "specs" && <ProductSpecs specifications={product.specifications} />}
        {activeTab === "reviews" && <ProductReviews productId={productId} />}
      </div>

      {/* Recommended Products */}
      <RecommendedProducts currentProductId={productId} category={product.category} />
    </div>
  )
}
