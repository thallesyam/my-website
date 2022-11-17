import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Header } from '../components/Header'
import { StartSection } from '../components/StartSection'
import { AboutSection } from '../components/AboutSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ProjectSection } from '../components/ProjectSection'
import { SkillsSection } from '../components/SkillsSection'
import { Footer } from '../components/Footer'

import style from '../styles/pages/Home.module.scss'

const ScrollReveal = dynamic(() => import('../components/ScrollReveal'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>Portifólio | Thalles Ian</title>
      </Head>

      <Header />

      <main>
        <StartSection />

        <ScrollReveal
          className={`${style.container} ${style.light}`}
          id="about"
        >
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal className={style.container} id="experience">
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal
          className={`${style.container} ${style.light}`}
          id="project"
        >
          <ProjectSection />
        </ScrollReveal>

        <ScrollReveal className={style.container} id="skill">
          <SkillsSection />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  )
}
