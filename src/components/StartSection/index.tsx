import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WhatsappLogo, LinkedinLogo } from 'phosphor-react'
import { useSingleTextQuery } from '../../graphql/generated'
import { Header } from '../Header'

const ScrollReveal = dynamic(() => import('../ScrollReveal'), {
  ssr: false,
})

import style from './styles.module.scss'

export function StartSection() {
  const { data } = useSingleTextQuery()
  const titleSpliced = data?.singleTexts[0].titleH1?.split(' ')
  const subtitle = data?.singleTexts[0].subtitle

  const principal = titleSpliced?.splice(0, titleSpliced.length - 2).join(' ')
  const highlight = titleSpliced
    ?.splice(titleSpliced.length - 2, titleSpliced.length)
    .join(' ')

  return (
    <section className={style.start_container}>
      <Header />

      <section className={style.title_section} id="home">
        <ScrollReveal>
          <h1>
            {principal}
            <span>{highlight}</span>
          </h1>
        </ScrollReveal>

        <p>{subtitle}</p>

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
