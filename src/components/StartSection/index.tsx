import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WhatsappLogo, LinkedinLogo } from 'phosphor-react'

import { Layout } from '../Layout'

import { useSingleTextQuery } from '../../graphql/generated'

const ScrollReveal = dynamic(() => import('../ScrollReveal'), {
  ssr: false,
})

import style from './styles.module.scss'
import { Title } from '../Title'

export function StartSection() {
  const { data } = useSingleTextQuery()
  const titleSpliced = data?.singleTexts[0].titleH1?.split(' ')
  const subtitle = data?.singleTexts[0].subtitle

  const principal = titleSpliced?.splice(0, titleSpliced?.length - 2).join(' ')
  const highlight = titleSpliced
    ?.splice(titleSpliced?.length - 2, titleSpliced?.length)
    .join(' ')

  return (
    <section className={style.start_container}>
      <Layout className={style.title_section} id="home" size="sm">
        <ScrollReveal>
          <Title
            text={principal as string}
            tagName="h1"
            highlightText={highlight}
          />
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
      </Layout>
    </section>
  )
}
