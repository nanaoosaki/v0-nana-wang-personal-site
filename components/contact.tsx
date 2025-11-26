"use client"

import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/50 border-y border-accent-secondary/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
          Let's build something interesting
        </h2>

        <p className="text-lg text-muted leading-relaxed mb-12 max-w-xl mx-auto">
          I'm always interested in collaborating on ambitious AI systems, experimental prototypes, and projects that
          push what's possible. Reach out if you have something we should talk about.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:nwangwk@gmail.com"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/nana-wang-00593465/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
