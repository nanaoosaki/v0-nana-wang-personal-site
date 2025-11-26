"use client"

export default function Experiments() {
  const experiments = [
    {
      title: "LLM-powered Call Resolution Analytics",
      subtitle: "Enterprise AI Agent Coaching Tool",
      impact: "Reduced resolution time by 40% for support teams",
      experimental: "Real-time LLM analysis of call transcripts",
      tags: ["LLM", "Analytics", "Enterprise"],
      status: "Live",
      type: "Enterprise",
    },
    {
      title: "Resume Parsing & Tailoring Tool",
      subtitle: "AI-powered career assistant",
      impact: "Helped 500+ users land interviews faster",
      experimental: "Semantic understanding + dynamic customization",
      tags: ["NLP", "Career", "Personalization"],
      status: "Live",
      type: "Personal",
    },
    {
      title: "Linda – Your Daily Health Companion",
      subtitle: "Personal health tracking with AI insights",
      impact: "Users tracked health metrics 3x more consistently",
      experimental: "Context-aware health coaching via AI",
      tags: ["Health", "AI", "Wellness"],
      status: "Prototype",
      type: "Health",
    },
  ]

  return (
    <section id="experiments" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">
            Experiments & systems I've shipped
          </h2>
          <p className="text-muted text-lg">Prototypes that proved real impact</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((exp, idx) => (
            <div
              key={idx}
              className="group bg-white border border-accent-secondary/40 rounded-lg overflow-hidden hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300"
            >
              <div className="h-1 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Type & Status */}
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">{exp.type}</span>
                  <span className="text-xs font-mono text-accent-secondary/80 bg-accent-secondary/10 px-2 py-1 rounded">
                    {exp.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted">{exp.subtitle}</p>
                </div>

                {/* Impact */}
                <p className="text-base text-accent font-medium">{exp.impact}</p>

                {/* Experimental angle */}
                <p className="text-sm text-muted italic">{exp.experimental}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 px-4 py-2 border border-accent text-accent text-sm font-semibold rounded hover:bg-accent/10 transition-colors duration-300">
                  View project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
