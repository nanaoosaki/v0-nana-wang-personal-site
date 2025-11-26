"use client"

export default function Experiments() {
  const experiments = [
    {
      title: "LLM-powered Call Resolution Analytics and Agent Coaching Tool",
      subtitle: "Enterprise AI",
      description: "Enterprise-level AI system using LLM to analyze raw call transcripts, measure call resolution effectiveness, and distill actionable 'why' insights for customer support teams and agent coaching programs.",
      tags: ["Enterprise AI", "LLM Analytics", "Call Analytics", "Customer Support", "Agent Coaching"],
      status: "Enterprise Project",
      link: "#",
    },
    {
      title: "Resume Parsing & Tailoring Tool",
      subtitle: "LLM & GenAI",
      description: "LLM & GenAI powered tool for resume optimization",
      tags: ["LLM", "GenAI", "Python"],
      status: "Live",
      link: "https://jobsculptor.ai/",
    },
    {
      title: "Linda - Your Daily Health Companion",
      subtitle: "Health AI",
      description: "The first AI assistant that listens to your days, spots personal triggers for chronic pain, and coaches you towards fewer and milder attacks. Built around three core actions: Talk – foregrounds the voice-first, conversation-driven flow; Track – reassures data seekers that you still log and analyse; Tame – promises action and improvement, not just monitoring.",
      tags: ["Health AI", "Voice Interface", "Pain Management", "Personal Coach", "Chronic Care"],
      status: "Demo",
      link: "https://lindahealth.app/",
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
                  <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">{exp.subtitle}</span>
                  <span className="text-xs font-mono text-accent-secondary/80 bg-accent-secondary/10 px-2 py-1 rounded">
                    {exp.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{exp.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">{exp.description}</p>

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
                {exp.link !== "#" ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4 px-4 py-2 border border-accent text-accent text-sm font-semibold rounded hover:bg-accent/10 transition-colors duration-300 text-center"
                  >
                    {exp.status === "Live" ? "Try it Live" : exp.status === "Demo" ? "View Demo" : "View project"} →
                  </a>
                ) : (
                  <div className="w-full mt-4 px-4 py-2 text-muted text-sm text-center">
                    Enterprise Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
