import { homeMetadata } from "@/constants/seo";
import Admission from '@/components/sections/Admission'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import NationalContext from '@/components/sections/NationalContext'
import Institution from '@/components/sections/Institution'
import Header from '@/components/sections/Header'
import Partners from '@/components/sections/Partners'
import Programme from '@/components/sections/Programme'
import Sessions from '@/components/sections/Sessions'
import Livrables from '@/components/sections/Livrables'
import OtherFieldsSection from "@/components/sections/other-fields";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <NationalContext />
        <Institution />
        <Programme />
        <Sessions />
        <Livrables />
        <Admission />
        <OtherFieldsSection />
      </main>
      <Footer />
    </div>
  )
}