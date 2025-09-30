import { Shield, Truck, RotateCcw, Award, MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechParts Hub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner for computer parts and components since 2015. We're passionate about helping builders,
          gamers, and tech enthusiasts create their dream systems with quality products and exceptional service.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              At TechParts Hub, we believe that everyone deserves access to high-quality computer components at
              competitive prices. Our mission is to democratize technology by making cutting-edge hardware accessible to
              builders of all skill levels.
            </p>
            <p>
              Whether you're building your first gaming PC, upgrading your workstation, or creating a high-performance
              server, we're here to provide the components, expertise, and support you need to succeed.
            </p>
            <p>
              We carefully curate our inventory from trusted manufacturers and rigorously test products to ensure they
              meet our high standards for quality and reliability.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/placeholder.svg?height=400&width=600&text=Modern+Tech+Warehouse"
            alt="TechParts Hub Warehouse"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose TechParts Hub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">
                All products come with manufacturer warranties and our quality guarantee for peace of mind.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $50 with same-day processing for orders placed before 2 PM.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <RotateCcw className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                30-day hassle-free returns with free return shipping on defective or incompatible items.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Our technical support team is here to help with compatibility questions and build advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/placeholder.svg?height=150&width=150&text=CEO+Portrait"
                alt="Sarah Johnson - CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 text-sm mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Former hardware engineer with 15+ years in the tech industry. Passionate about making technology
                accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/placeholder.svg?height=150&width=150&text=CTO+Portrait"
                alt="Mike Chen - CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Mike Chen</h3>
              <p className="text-blue-600 text-sm mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Expert in system architecture and performance optimization. Leads our technical team and product
                curation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/placeholder.svg?height=150&width=150&text=Support+Lead"
                alt="Alex Rodriguez - Support Lead"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Alex Rodriguez</h3>
              <p className="text-blue-600 text-sm mb-3">Customer Success Lead</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer has an exceptional experience. Leads our support and success teams.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">TechParts Hub by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
        </div>
      </div>

      {/* Location & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Warehouse</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">TechParts Hub Headquarters</p>
                <p className="text-gray-600">1234 Technology Drive</p>
                <p className="text-gray-600">San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Business Hours</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM PST</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Contact Information</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: info@techpartshub.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We're committed to environmental responsibility and sustainable business practices. Our packaging uses
              recycled materials, and we partner with manufacturers who share our values.
            </p>
            <p>
              As a member of the Better Business Bureau and various industry associations, we maintain the highest
              standards of business ethics and customer service.
            </p>
            <p>
              Our team is constantly working to improve our services, expand our product selection, and provide the best
              possible experience for our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
