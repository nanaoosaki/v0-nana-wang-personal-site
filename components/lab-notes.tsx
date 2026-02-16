"use client"

const notes = [
  {
    title: "Beyond Notebooks: Docker Debugging & Abstraction Layers",
    description:
      "A Docker debugging session revealed that a PostgreSQL authentication error was actually a port conflict hidden across abstraction layers. Explores how studying AI's reasoning path can sharpen our own engineering thinking.",
    stage: "Working theory",
    link: "https://www.linkedin.com/posts/nana-wang-00593465_aiengineering-mlops-engineeringmindset-activity-7429181527906897920-0qmI",
  },
]

export default function LabNotes() {
  return (
    <section id="lab-notes" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">Lab notes</h2>
          <p className="text-muted">Thinking out loud, theories in progress, and questions I'm exploring.</p>
          <div className="w-12 h-1 bg-accent mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note, idx) => {
            const cardContent = (
              <>
                {/* Stage Badge */}
                <div className="inline-block mb-3">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      note.stage === "Working theory"
                        ? "bg-accent/20 text-accent"
                        : note.stage === "Half-baked"
                          ? "bg-accent-secondary/20 text-accent-secondary"
                          : "bg-accent-secondary/10 text-accent-secondary/70"
                    }`}
                  >
                    {note.stage}
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {note.title}
                </h4>
                <p className="text-sm text-muted">{note.description}</p>
                {note.link && (
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Read on LinkedIn &rarr;
                  </span>
                )}
              </>
            )

            return note.link ? (
              <a
                key={idx}
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all group cursor-pointer no-underline"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={idx}
                className="p-5 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all group cursor-pointer"
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
