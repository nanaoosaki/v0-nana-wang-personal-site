"use client"

export default function WhatPeopleSay() {
  const testimonials = [
    {
      quote:
        "Nana's ability to translate complex AI concepts into actionable business strategy is unmatched. A true strategic thinker.",
      name: "Sarah Chen",
      role: "CEO, Tech Startup",
    },
    {
      quote: "Working with Nana on our LLM implementation was transformative. The technical execution was flawless.",
      name: "James Rodriguez",
      role: "CTO, Enterprise AI",
    },
    {
      quote: "Nana brings both deep technical expertise and strategic vision to every project. Rare combination.",
      name: "Dr. Michael Park",
      role: "Colleague, Research Lab",
    },
    {
      quote: "The insights from Nana's work fundamentally changed how we approach AI governance.",
      name: "Emma Thompson",
      role: "Policy Director",
    },
    {
      quote: "Exceptional at connecting research to real-world impact. Every collaboration leaves us better prepared.",
      name: "David Kumar",
      role: "Product Lead",
    },
    {
      quote: "A rare combination of technical depth and human-centered thinking. Transformative to work with.",
      name: "Lisa Chen",
      role: "Co-founder, AI Ethics Lab",
    },
  ]

  return (
    <section className="py-24" style={{ backgroundColor: "#F9F5EF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#132128" }}>
            What people say
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#4B5A63" }}>
            A few words from collaborators and leaders I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#D7E2E8",
                borderWidth: "1px",
              }}
            >
              {/* Quote */}
              <p className="text-base leading-relaxed mb-4" style={{ color: "#132128" }}>
                "{testimonial.quote}"
              </p>

              <div className="flex justify-center mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D1A85C" }} aria-hidden="true" />
              </div>

              {/* Attribution */}
              <div>
                <p className="font-semibold text-sm" style={{ color: "#132128" }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: "#2C7C87" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
