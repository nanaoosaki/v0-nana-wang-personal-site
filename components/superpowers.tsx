"use client"

import { Zap, Code, MessageCircle } from "lucide-react"

const superpowers = [
  {
    icon: Zap,
    title: "Analytical rigor",
    description: "Deep data-driven insights applied to complex problems",
  },
  {
    icon: Code,
    title: "Hands-on AI engineering",
    description: "From prototypes to production-scale implementations",
  },
  {
    icon: MessageCircle,
    title: "Proactive communication",
    description: "Translating technical concepts for all stakeholders",
  },
]

export default function Superpowers() {
  return (
    <section className="bg-muted/30 border-y border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {superpowers.map((power, idx) => {
            const Icon = power.icon
            return (
              <div key={idx} className="flex flex-col items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{power.title}</h3>
                  <p className="text-sm text-muted-foreground">{power.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
