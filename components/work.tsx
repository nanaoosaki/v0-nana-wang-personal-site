"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    badge: "Enterprise",
    title: "LLM-powered Call Resolution Analytics",
    description:
      "AI system that analyzes customer service calls to identify resolution patterns and coaching opportunities",
    tags: ["LLM", "NLP", "Analytics"],
    cta: "View demo",
    image: "/enterprise-ai-dashboard.jpg",
  },
  {
    badge: "Health AI",
    title: "Linda – Your Daily Health Companion",
    description: "Personalized health and wellness application powered by conversational AI",
    tags: ["AI", "Health", "Mobile"],
    cta: "Try it live",
    image: "/health-app-interface.jpg",
  },
  {
    badge: "Enterprise",
    title: "RAG-powered CX Intelligence Assistant",
    description:
      "CX research chatbot that reduced qualitative analysis from days to minutes using hybrid search and cross-encoder reranking",
    tags: ["RAG", "LLM", "Hybrid Search"],
    cta: "View demo",
    image: "/enterprise-ai-dashboard.jpg",
  },
  {
    badge: "Enterprise",
    title: "Agent Coaching Tool",
    description: "Real-time AI coaching system for customer service representatives",
    tags: ["LLM", "Real-time", "Coaching"],
    cta: "View demo",
    image: "/coaching-platform.jpg",
  },
]

const badgeColors: Record<string, string> = {
  Enterprise: "bg-primary/10 text-primary border-primary/30",
  Personal: "bg-accent/10 text-accent border-accent/30",
  "Health AI": "bg-green-500/10 text-green-700 border-green-500/30 dark:text-green-400",
}

export default function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Selected AI projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
          >
            {/* Image */}
            <div className="relative w-full h-48 bg-muted overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${badgeColors[project.badge]}`}
                >
                  {project.badge}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                <a href="#">{project.cta}</a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
