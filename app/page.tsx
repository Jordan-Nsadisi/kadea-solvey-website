import Hero from '@/components/sections/Hero'
import Institution from '@/components/sections/Institution'
import Navbar from '@/components/sections/Navbar'
import Partners from '@/components/sections/Partners'
import Programme from '@/components/sections/Programme'
import Sessions from '@/components/sections/Sessions'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Institution />
        <Programme />
        <Sessions />
        {/* <Admission /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}