"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Nana's ability to translate complex AI concepts into actionable business strategy is unmatched. A true strategic thinker.",
    role: "CEO, Tech Startup",
    name: "Sarah Chen",
  },
  {
    quote: "Working with Nana on our LLM implementation was transformative. The technical execution was flawless.",
    role: "CTO, Enterprise AI",
    name: "James Rodriguez",
  },
  {
    quote: "Nana brings both deep technical expertise and strategic vision to every project. Rare combination.",
    role: "Colleague, Research Lab",
    name: "Dr. Michael Park",
  },
  {
    quote: "The insights from Nana's work fundamentally changed how we approach AI governance.",
    role: "Policy Director",
    name: "Emma Thompson",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setIsAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
  }

  return (
    <section className="bg-muted/20 border-y border-border py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What people say</h2>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 min-h-64 flex flex-col justify-between">
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 text-balance">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx)
                    setIsAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-border"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-border hover:bg-muted bg-transparent"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-border hover:bg-muted bg-transparent"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
