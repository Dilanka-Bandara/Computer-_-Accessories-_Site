"use client"

import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    author: "TechEnthusiast92",
    rating: 5,
    title: "Exceptional Performance!",
    content:
      "This processor exceeded my expectations. The performance boost from my old CPU is incredible. Gaming at 4K is smooth, and rendering times have been cut in half. Highly recommended for anyone looking to upgrade their system.",
    date: "2024-01-15",
    helpful: 24,
    notHelpful: 2,
    verified: true,
  },
  {
    id: 2,
    author: "BuilderPro",
    rating: 4,
    title: "Great CPU, runs a bit hot",
    content:
      "Fantastic performance for gaming and productivity. The only downside is that it runs quite hot under load, so make sure you have good cooling. With a proper cooler, it's an absolute beast.",
    date: "2024-01-10",
    helpful: 18,
    notHelpful: 1,
    verified: true,
  },
  {
    id: 3,
    author: "GamerGirl2024",
    rating: 5,
    title: "Perfect for content creation",
    content:
      "As a content creator, this CPU handles everything I throw at it. Video editing, streaming, and gaming simultaneously - no problem. The multi-threading performance is outstanding.",
    date: "2024-01-08",
    helpful: 15,
    notHelpful: 0,
    verified: true,
  },
]

const ratingDistribution = [
  { stars: 5, count: 78, percentage: 63 },
  { stars: 4, count: 32, percentage: 26 },
  { stars: 3, count: 8, percentage: 6 },
  { stars: 2, count: 4, percentage: 3 },
  { stars: 1, count: 2, percentage: 2 },
]

interface ProductReviewsProps {
  productId: string
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl font-bold text-gray-900">4.8</div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on 124 reviews</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Rating Breakdown</h4>
          <div className="space-y-2">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm">{rating.stars}</span>
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </div>
                <Progress value={rating.percentage} className="flex-1 h-2" />
                <span className="text-sm text-gray-600 w-8">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <h4 className="font-semibold text-gray-900">Reviews</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
          <option value="helpful">Most Helpful</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-gray-900">{review.author}</span>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
              </div>
            </div>

            <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
            <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Was this helpful?</span>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Yes ({review.helpful})
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                <ThumbsDown className="w-4 h-4 mr-1" />
                No ({review.notHelpful})
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        <Button variant="outline">Load More Reviews</Button>
      </div>
    </div>
  )
}
