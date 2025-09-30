"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question, need technical support, or want to learn more about our products? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                  <p className="text-gray-600 mb-1">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9 AM - 6 PM PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-600 mb-1">support@techpartshub.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                  <p className="text-gray-600 mb-1">Available on our website</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9 AM - 6 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Visit Our Store</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">TechParts Hub</p>
                <p className="text-gray-600">1234 Technology Drive</p>
                <p className="text-gray-600">San Francisco, CA 94105</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <div className="text-sm text-gray-600">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Store+Location+Map"
                  alt="Store Location Map"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </CardContent>
          </Card>

          {/* Support Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Support Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Headphones className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Technical Support</p>
                  <p className="text-sm text-gray-600">Product compatibility & troubleshooting</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Order Support</p>
                  <p className="text-sm text-gray-600">Shipping, returns & order status</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">General Inquiries</p>
                  <p className="text-sm text-gray-600">Questions about our services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="returns">Returns & Exchanges</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Business Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What is your return policy?</h4>
                <p className="text-gray-600 text-sm">
                  We offer a 30-day return policy for most items. Products must be in original condition with all
                  packaging and accessories.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer technical support?</h4>
                <p className="text-gray-600 text-sm">
                  Yes! Our technical team can help with compatibility questions, installation guidance, and
                  troubleshooting.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h4>
                <p className="text-gray-600 text-sm">
                  Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional
                  fee.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you price match?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, we offer price matching on identical products from authorized retailers. Contact us with details
                  for verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
