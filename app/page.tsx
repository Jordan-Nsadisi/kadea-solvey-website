import { homeMetadata } from "@/constants/seo";
import Admission from '@/components/sections/Admission'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Institution from '@/components/sections/Institution'
import Navbar from '@/components/sections/Navbar'
import Partners from '@/components/sections/Partners'
import Programme from '@/components/sections/Programme'
import Sessions from '@/components/sections/Sessions'
import OtherFieldsSection from "@/components/sections/other-fields";

export const metadata = homeMetadata;

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
        <Admission />
        <OtherFieldsSection />
      </main>
      <Footer />
    </div>
  )
}