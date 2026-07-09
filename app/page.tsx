import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        {/* <Institution /> */}
        {/* <Programme /> */}
        {/* <Sessions /> */}
        {/* <Admission /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}