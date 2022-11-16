import dynamic from 'next/dynamic'
import { AboutSection } from '../components/AboutSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Footer } from '../components/Footer'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectSection } from '../components/ProjectSection'
import { StartSection } from '../components/StartSection'
import Head from 'next/head'

const ScrollReveal = dynamic(() => import('../components/ScrollReveal'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>Portifólio | Thalles Ian</title>
      </Head>

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
