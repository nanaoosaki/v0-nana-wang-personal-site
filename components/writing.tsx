"use client"

import { useState } from "react"

const writingData = {
  "English – Professional": [
    {
      title: "You've Got a Shiny AI Hammer—But Are You Hitting the Right Nails?",
      platform: "LinkedIn",
      date: "March 25, 2025",
      link: "https://www.linkedin.com/pulse/unlocking-call-analytics-beyond-traditional-methods-llms-nana-wang-4wefe/",
    },
    {
      title: "How to Design LLM-Powered Expert Decision Applications",
      platform: "LinkedIn",
      date: "April 14, 2025",
      link: "https://www.linkedin.com/pulse/how-design-llm-powered-expert-decision-applications-conceptual-wang-ettge/",
    },
  ],
  "Chinese – Tech & Vibe": [
    {
      title: "Cursor AGI - AI编程工具体验与思考",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/share-your-work/cursor-agi",
    },
    {
      title: "AI Vibe Coding - 与AI协作编程的艺术",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/share-your-work/ai-vibe-coding-a90fd2",
    },
  ],
  "Chinese – Life": [
    {
      title: "Coming soon - personal reflections and life experiences in Chinese.",
      platform: "Personal Blog",
      date: "Coming soon",
      link: "#",
    },
  ],
}

type WritingCategory = keyof typeof writingData

export default function Writing() {
  const [activeTab, setActiveTab] = useState<WritingCategory>("English – Professional")

  return (
    <section id="writing" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">Writing</h2>
          <div className="w-12 h-1 bg-accent mt-4" />
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {Object.keys(writingData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as WritingCategory)}
              className={`px-4 py-2 text-sm font-semibold whitespace-nowrap rounded transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-white"
                  : "text-muted hover:text-accent border border-accent-secondary/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writingData[activeTab].map((article, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300"
            >
              {/* Meta */}
              <div className="flex justify-between items-start gap-3 mb-3">
                <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">
                  {article.platform}
                </span>
                <span className="text-xs text-muted">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>

              {/* CTA */}
              {article.link !== "#" ? (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors"
                >
                  Read article →
                </a>
              ) : (
                <span className="text-muted text-sm italic">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
