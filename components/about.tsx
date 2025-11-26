"use client"

const coreValues = [
  { label: "Systems thinking", description: "Understanding complex interconnections" },
  { label: "First principles", description: "Always dig deeper than surface answers" },
  { label: "Human-centered", description: "Tech must serve people, not vice versa" },
]

const experience = [
  { role: "AI Systems Builder", time: "2023–present", focus: "Enterprise AI architecture & strategy" },
  { role: "ML Research Engineer", time: "2021–2023", focus: "LLM systems & applied ML" },
  { role: "Product Strategist", time: "2020–2021", focus: "AI product development & go-to-market" },
]

const languages = ["English", "Mandarin", "Spanish"]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">About</h2>
          <div className="w-12 h-1 bg-accent" />
        </div>

        {/* Bio */}
        <div className="mb-16 max-w-2xl">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I design and build AI systems that solve real problems. My approach combines research rigor, engineering
            pragmatism, and deep curiosity about how AI can genuinely improve human work.
          </p>
          <p className="text-base text-muted leading-relaxed">
            Whether it's architecting enterprise AI pipelines, building AI products from scratch, or advising on
            strategy—I'm obsessed with the gap between AI capability and real-world utility.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Values */}
          <div className="p-6 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all">
            <h3 className="text-lg font-bold mb-6 text-foreground">Values</h3>
            <div className="space-y-4">
              {coreValues.map((value) => (
                <div key={value.label}>
                  <p className="text-sm font-semibold text-accent mb-1">{value.label}</p>
                  <p className="text-xs text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="p-6 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all">
            <h3 className="text-lg font-bold mb-6 text-foreground">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.role}>
                  <p className="text-sm font-semibold text-foreground mb-1">{exp.role}</p>
                  <p className="text-xs text-accent-secondary/80">{exp.time}</p>
                  <p className="text-xs text-muted mt-1">{exp.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Skills */}
          <div className="p-6 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all">
            <h3 className="text-lg font-bold mb-6 text-foreground">Fluencies</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-accent mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "LLMs", "PostgreSQL", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
