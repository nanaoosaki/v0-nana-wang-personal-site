"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import WhatPeopleSay from "@/components/what-people-say"
import Experiments from "@/components/experiments"
import PublicTools from "@/components/public-tools"
import Writing from "@/components/writing"
import LabNotes from "@/components/lab-notes"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatPeopleSay />
        <Experiments />
        <PublicTools />
        <Writing />
        <LabNotes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
