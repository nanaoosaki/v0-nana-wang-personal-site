const tool = {
  name: "LinkedIn Connections Exporter",
  subtitle: "Manifest V3 Chrome extension for exporting LinkedIn connections to CSV",
  summary:
    "Runs inside the LinkedIn connections page, progressively loads visible connections, extracts structured data directly from the DOM, and exports it as a local CSV file.",
  approach:
    "DOM-based, client-side architecture: no LinkedIn API dependency and no backend service. The extension triggers LinkedIn's own loading behavior, reads the rendered page structure, and generates CSV locally in the browser.",
  highlights: [
    "Progressively loads all visible connections through LinkedIn's own page behavior.",
    "Extracts structured fields such as name, profile URL, headline, connected date, and message URL.",
    "Exports a local CSV download with no external data transfer.",
    "Uses a resilient DOM parsing strategy designed for practical maintenance.",
  ],
  repoUrl: "https://github.com/nanaoosaki/linkedin_connections",
  releaseUrl: "https://github.com/nanaoosaki/linkedin_connections/releases",
  logoUrl: "https://raw.githubusercontent.com/nanaoosaki/linkedin_connections/main/logo.png",
}

export default function LinkedInConnectionsExporterPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <section className="max-w-4xl mx-auto px-6">
        <a href="/#public-tools" className="text-sm text-accent font-semibold hover:text-accent-secondary transition-colors">
          ← Back to Public Tools
        </a>

        <div className="mt-6 p-8 bg-white border border-accent-secondary/40 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <img src={tool.logoUrl} alt="LinkedIn Connections Exporter logo" className="w-20 h-20 object-contain" />
            <div>
              <p className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded inline-block mb-3">
                Public Tool
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{tool.name}</h1>
              <p className="text-muted mt-2">{tool.subtitle}</p>
            </div>
          </div>

          <p className="text-foreground leading-relaxed mb-5">{tool.summary}</p>
          <p className="text-muted leading-relaxed mb-8">{tool.approach}</p>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-foreground mb-3">What it does</h2>
            <ul className="space-y-2">
              {tool.highlights.map((item) => (
                <li key={item} className="text-sm text-muted leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={tool.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 inline-block"
            >
              View GitHub Repo ↗
            </a>
            <a
              href={tool.releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300 inline-block"
            >
              View Releases ↗
            </a>
          </div>

          <p className="text-xs text-muted mt-6">
            Chrome Web Store URL will be added once the listing is publicly available.
          </p>
        </div>
      </section>
    </main>
  )
}
