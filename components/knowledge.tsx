"use client"

import { Card } from "@/components/ui/card"

const notes = [
  {
    title: "Prompt Engineering Patterns",
    description: "Systematic approaches to crafting effective prompts for LLMs",
    tags: ["LLM", "Techniques", "AI"],
  },
  {
    title: "Building RAG Systems",
    description: "Retrieval-Augmented Generation for context-aware AI",
    tags: ["RAG", "Architecture", "Advanced"],
  },
  {
    title: "AI Governance Framework",
    description: "Principles and practices for responsible AI deployment",
    tags: ["Ethics", "Governance", "Strategy"],
  },
  {
    title: "Cost Optimization in AI",
    description: "Strategies for reducing AI infrastructure costs",
    tags: ["Operations", "Economics", "Production"],
  },
]

const questions = [
  {
    question: "How do we measure the impact of AI systems on user outcomes?",
    context: "Exploring metrics beyond accuracy and latency",
  },
  {
    question: "What are the emerging patterns in multi-agent AI systems?",
    context: "Investigating coordination and communication patterns",
  },
  {
    question: "How can we make AI systems more interpretable to stakeholders?",
    context: "Bridging the gap between technical and business understanding",
  },
]

export default function Knowledge() {
  return (
    <section id="knowledge" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Thinking in public</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Notes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Knowledge notes</h3>
          {notes.map((note, idx) => (
            <Card key={idx} className="bg-card border border-border p-4 hover:border-primary/50 transition-colors">
              <h4 className="font-medium text-foreground mb-1">{note.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{note.description}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Right Column - Questions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Questions I'm asking</h3>
          {questions.map((item, idx) => (
            <Card key={idx} className="bg-card border border-border p-4 hover:border-primary/50 transition-colors">
              <h4 className="font-medium text-foreground mb-2">{item.question}</h4>
              <p className="text-sm text-muted-foreground italic">{item.context}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
