"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-background to-[#F9F5EF]"
    >
      <div className="absolute inset-0 opacity-20 grid-pattern" />
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "rgba(44, 124, 135, 0.08)",
          left: `${mousePos.x * 0.05}px`,
          top: `${mousePos.y * 0.05}px`,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4 tracking-tight text-foreground">
              Nana Wang
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold tracking-wide mb-4">AI BUILDER & STRATEGIST</p>
            <p className="text-lg text-muted leading-relaxed max-w-md">
              I build AI experiments that turn messy reality into real tools.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#experiments"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 inline-block"
            >
              Explore my experiments
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300 inline-block"
            >
              Work with me
            </Link>
          </div>

          {/* Signature Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["Systems thinking", "AI product experiments", "Human-centered tooling"].map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 border border-accent-secondary rounded-lg text-sm text-muted hover:border-accent hover:bg-accent/5 transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-8">
          {/* Light Medallion Circle */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border border-accent-secondary/40 animate-spin"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-4 rounded-full border border-accent-secondary/20 animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
            />
            {/* Light gradient medallion */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-[#F4FBFD] to-accent-secondary/20 border-2 border-accent-secondary/60 flex items-center justify-center shadow-sm">
              <div className="text-center text-foreground">
                <div className="text-5xl font-bold">NW</div>
              </div>
            </div>
          </div>

          {/* Experimental Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["Prototype first", "Curious by default", "No black-box thinking"].map((tag) => (
              <div
                key={tag}
                className="px-3 py-1 bg-white border border-accent-secondary/60 rounded-full text-xs text-muted"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
