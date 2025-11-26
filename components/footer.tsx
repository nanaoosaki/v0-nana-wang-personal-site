"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/30 border-t border-accent-secondary/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted text-center md:text-left font-mono">© Nana Wang. Always experimenting.</p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="mailto:hello@nanawang.com"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
