"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experiments", href: "#experiments" },
    { label: "Writing", href: "#writing" },
    { label: "Lab Notes", href: "#lab-notes" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-accent-secondary/30">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-foreground hover:text-accent transition-colors duration-300"
        >
          Nana Wang
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-accent-secondary/30 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
