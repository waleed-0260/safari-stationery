"use client"
import React from "react"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Review {
  id: number
  name: string
  email: string
  message: string
}

export default function Reviews({productId}: {productId: String}) {
  const [reviews, setReviews] = useState<Review[]>([])

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      try {
        const res = await fetch(`/api/products/${productId}/review`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();

        if (res.ok) {
          // Optionally update local state with latest reviews
          setReviews([data.data[data.data.length - 1], ...reviews]);
          setFormData({ name: "", email: "", message: "" });
          setOpen(false);
        } else {
          console.error("Error submitting review:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
          <p className="text-muted-foreground mt-2">See what our customers are saying</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              Add Review
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-[400px] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add a Review</DialogTitle>
              <DialogDescription>
                Share your experience with others. Your review will help future customers.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Write your review..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="cursor-pointer">Submit Review</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {reviews?.map((review, index) => (
          <div key={index}>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">{review.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.email}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed pl-14">{review.message}</p>
            </div>
            {index < reviews.length - 1 && <div className="border-b border-gray-200 mt-6"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
