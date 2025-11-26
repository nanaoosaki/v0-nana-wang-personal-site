"use client"

export default function WhatPeopleSay() {
  const testimonials = [
    {
      quote:
        "Nana is an expert in her field and constantly pushing the boundaries of what can be done. She's quick to help others and offers good advice. She is very smart and has a strong desire to be better at her job. She asks for feedback often and makes changes based on it.",
      role: "Supervisor",
    },
    {
      quote:
        "Nana is the real starter who thinks outside of the box and challenges others. She is remarkably intelligent and a great coworker. She is the one person on our team willing to ask hard questions, and I seen it as a quiet but confident leader among her peers.",
      role: "Colleague",
    },
    {
      quote:
        "She very well understands her professional domain and opportunity for contribution to the wider organization. She communicates problems in a clear and thoughtful way - careful to understand the general so she doesn't narrow context. She is transparent with her work and thinking and regularly seeks input, earnestly incorporating feedback into her work and process.",
      role: "Colleague",
    },
    {
      quote:
        "She cares about understanding the business needs and effectively collaborating with business stakeholders to ensure a data science solution is actionable.",
      role: "Colleague",
    },
    {
      quote: "Nana's energy and attitude always inspired people to push harder, no matter how big or small the problem or idea.",
      role: "Colleague",
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
