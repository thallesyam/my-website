import { WhatsappLogo, LinkedinLogo } from 'phosphor-react'

import { Header } from '../components/Header'

import style from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <main>
      <Header />

      <section className={style.title_section}>
        <h1>
          Navegando pelo mundo da programação e ajudando empresas a construírem
          <span>jornadas inesquecíveis.</span>
        </h1>

        <p>
          Sempre priorizando a experiência do usuário e trazendo uma visão que
          vai destacar o seu produto no mercado.
        </p>

        <div>
          <button className={style.btn_primary}>
            <WhatsappLogo size={16} />
            <p>Whatsapp</p>
          </button>
          <button className={style.btn_secondary}>
            <LinkedinLogo size={16} />
            <p>Linkedin</p>
          </button>
        </div>
      </section>
    </main>
  )
}
