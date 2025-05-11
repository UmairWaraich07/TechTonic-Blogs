"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    content:
      "TechTonic has become my go-to resource for staying updated with the latest tech trends. The articles are well-researched, insightful, and presented in an easy-to-understand manner.",
    author: "Alex Johnson",
    role: "Software Engineer at Google",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "As someone new to programming, I've found TechTonic's tutorials incredibly helpful. They break down complex concepts into digestible pieces that make learning enjoyable.",
    author: "Sarah Chen",
    role: "Web Developer",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "The depth of technical content on TechTonic is impressive. Their articles on AI and machine learning have helped me implement several innovative solutions for my company.",
    author: "Michael Rodriguez",
    role: "CTO at TechStart",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    content:
      "I appreciate how TechTonic stays ahead of emerging technologies. Their analysis of industry trends has informed many of our strategic decisions.",
    author: "Priya Patel",
    role: "Product Manager",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Readers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover why tech professionals and enthusiasts choose TechTonic as their trusted source for tech insights.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-none bg-primary/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-12 w-12 text-primary/40 mb-6" />
                  <p className="text-xl md:text-2xl italic mb-8">{testimonials[currentIndex].content}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
