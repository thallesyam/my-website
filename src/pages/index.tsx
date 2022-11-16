import { AboutSection } from '../components/AboutSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { Footer } from '../components/Footer'
import { KnowledgeSection } from '../components/KnowledgeSection'
import { ProjectSection } from '../components/ProjectSection'
import { StartSection } from '../components/StartSection'

export default function Home() {
  return (
    <main>
      <StartSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <KnowledgeSection />
      <Footer />
    </main>
  )
}
