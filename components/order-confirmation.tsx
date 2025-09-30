"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Package, Truck, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrderConfirmation() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || "TP123456"

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600">Thank you for your purchase. Your order has been received.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Order Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="w-5 h-5" />
              <span>Order Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">#{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">Credit Card ending in 3456</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order Status:</span>
              <span className="font-medium text-green-600">Confirmed</span>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Shipping Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-medium">{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Method:</span>
              <span className="font-medium">Standard Shipping</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tracking Number:</span>
              <span className="font-medium">Will be provided via email</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What happens next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Order Confirmation</h3>
              <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details.</p>
            </div>
            <div className="text-center">
              <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Processing</h3>
              <p className="text-sm text-gray-600">We'll prepare your items for shipment within 1-2 business days.</p>
            </div>
            <div className="text-center">
              <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Shipping</h3>
              <p className="text-sm text-gray-600">You'll receive tracking information once your order ships.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" asChild>
          <Link href="/shop">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/order-tracking?orderId=${orderId}`}>
            <Package className="w-4 h-4 mr-2" />
            Track Your Order
          </Link>
        </Button>
      </div>

      {/* Support Information */}
      <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
        <p className="text-gray-600 mb-4">
          If you have any questions about your order, please don't hesitate to contact us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact Support
          </Link>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="mailto:support@techpartshub.com" className="text-blue-600 hover:text-blue-700 font-medium">
            support@techpartshub.com
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-700 font-medium">
            (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  )
}
