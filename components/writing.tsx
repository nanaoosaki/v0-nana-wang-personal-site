"use client"

import { useState } from "react"

const writingData = {
  "English – Professional": [
    {
      title: "The Future of Agentic AI in Enterprise",
      platform: "LinkedIn",
      date: "Recent",
      hook: "Why the next wave of AI won't be about models, but about agents that actually ship.",
    },
    {
      title: "Building Scalable LLM Systems",
      platform: "Superlinear",
      date: "2 weeks ago",
      hook: "From prototype to production: patterns I've learned shipping LLM systems at scale.",
    },
    {
      title: "AI Strategy: From Experimentation to Production",
      platform: "LinkedIn",
      date: "1 month ago",
      hook: "How to think about AI strategy when everything is moving at light speed.",
    },
  ],
  "Chinese – Tech & Vibe": [
    {
      title: "如何构建可扩展的 AI 系统",
      platform: "Substack",
      date: "Recent",
      hook: "关于 LLM 系统架构和实战经验",
    },
    {
      title: "大语言模型的实战应用",
      platform: "Medium",
      date: "3 weeks ago",
      hook: "从研究到产品：大模型如何落地",
    },
  ],
  "Chinese – Life": [
    {
      title: "关于平衡、学习和成长的思考",
      platform: "Personal Blog",
      date: "Recent",
      hook: "How to stay curious while staying sane.",
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

              {/* Hook */}
              <p className="text-sm text-muted leading-relaxed mb-4">{article.hook}</p>

              {/* CTA */}
              <button className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors">
                Read article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
