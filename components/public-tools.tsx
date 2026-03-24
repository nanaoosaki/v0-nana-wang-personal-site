"use client"

const publicTools = [
  {
    name: "LinkedIn Connections Exporter",
    category: "Chrome Extension",
    status: "Live (GitHub Release)",
    logoUrl: "https://raw.githubusercontent.com/nanaoosaki/linkedin_connections/main/logo.png",
    description:
      "Runs inside the LinkedIn connections page, progressively loads all visible connections, extracts structured data from the DOM, and exports everything as a local CSV file.",
    techStack:
      "DOM-based, client-side approach with no LinkedIn API dependency. It triggers LinkedIn's own loading behavior and keeps data processing local in the browser.",
    repoUrl: "https://github.com/nanaoosaki/linkedin_connections",
    releaseUrl: "https://github.com/nanaoosaki/linkedin_connections/releases",
    detailsPath: "/tools/linkedin-connections-exporter",
  },
]

export default function PublicTools() {
  return (
    <section id="public-tools" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">Public Tools</h2>
          <p className="text-muted text-lg">Small tools shipped in public and designed for practical daily use.</p>
          <div className="w-12 h-1 bg-accent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-6 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={tool.logoUrl}
                    alt={`${tool.name} logo`}
                    className="w-10 h-10 object-contain rounded border border-accent-secondary/30 bg-white p-1"
                  />
                  <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">{tool.category}</span>
                </div>
                <span className="text-xs font-mono text-accent-secondary/80 bg-accent-secondary/10 px-2 py-1 rounded">{tool.status}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{tool.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{tool.description}</p>
              <p className="text-sm text-muted leading-relaxed">{tool.techStack}</p>

              <div className="flex flex-wrap gap-4 mt-5">
                <a
                  href={tool.detailsPath}
                  className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors"
                >
                  View details →
                </a>
                <a
                  href={tool.releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors"
                >
                  Release page ↗
                </a>
                <a
                  href={tool.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors"
                >
                  GitHub repo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
