export default function OperatingModes() {
  const modes = [
    {
      title: "Signal extraction",
      description: "I sift through messy data and narratives until the real levers emerge.",
      icon: "◇",
    },
    {
      title: "Prototype to reality",
      description: "I build scrappy AI experiments, test with humans, then harden what works.",
      icon: "⚡",
    },
    {
      title: "Narrative clarity",
      description: "I translate weird AI behavior into stories humans can act on.",
      icon: "→",
    },
  ]

  return (
    <section id="operating-modes" className="py-20 bg-gradient-to-b from-background to-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">Operating modes</h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-3xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform">
                {mode.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{mode.title}</h3>
              <p className="text-muted leading-relaxed">{mode.description}</p>

              {/* Subtle pattern */}
              <div className="mt-6 pt-6 border-t border-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs text-accent/60 font-mono">← hover to explore</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
