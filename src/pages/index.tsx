import dynamic from 'next/dynamic'
import { AboutSection } from '../components/AboutSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Footer } from '../components/Footer'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectSection } from '../components/ProjectSection'
import { StartSection } from '../components/StartSection'

const ScrollReveal = dynamic(() => import('../components/ScrollReveal'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <StartSection />

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <ExperienceSection />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectSection />
      </ScrollReveal>

      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>

      <Footer />
    </main>
  )
}
