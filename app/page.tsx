import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Stack } from '@/components/sections/Stack'
import { Projects } from '@/components/sections/Projects'
import { AISection } from '@/components/sections/AISection'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-[#E8F0FE] overflow-x-hidden">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <AISection />
      <Experience />
      <Contact />
    </main>
  )
}
