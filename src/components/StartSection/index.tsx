import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WhatsappLogo, LinkedinLogo } from 'phosphor-react'
import { Header } from '../Header'

const ScrollReveal = dynamic(() => import('../ScrollReveal'), {
  ssr: false,
})

import style from './styles.module.scss'

export function StartSection() {
  return (
    <section className={style.start_container}>
      <Header />

      <section className={style.title_section} id="home">
        <ScrollReveal>
          <h1>
            Navegando pelo mundo da programação e ajudando empresas a
            construírem
            <span>jornadas inesquecíveis.</span>
          </h1>
        </ScrollReveal>

        <p>
          Sempre priorizando a experiência do usuário e trazendo uma visão que
          vai destacar o seu produto no mercado.
        </p>

        <div>
          <Link
            target="_blank"
            href="https://encurtador.com.br/joW16"
            className={style.btn_primary}
          >
            <WhatsappLogo size={16} />
            <p>Whatsapp</p>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/thalles-ian/"
            className={style.btn_secondary}
          >
            <LinkedinLogo size={16} />
            <p>Linkedin</p>
          </Link>
        </div>
      </section>
    </section>
  )
}
