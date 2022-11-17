import Link from 'next/link'
import { Layout } from '../Layout'
import { Navigation } from '../Navigation'

import style from './styles.module.scss'

export function Footer() {
  return (
    <Layout className={style.footer} asChild>
      <footer>
        <Link href="/">Created by Thalles with 🖤</Link>

        <Navigation.Root>
          <Navigation.Link
            href="https://www.linkedin.com/in/thalles-ian/"
            target="_blank"
            text="Linkedin"
          />
          <Navigation.Link
            target="_blank"
            href="https://encurtador.com.br/joW16"
            text="Whatsapp"
          />

          <Navigation.Link
            target="_blank"
            href="https://www.github.com/thallesyam"
            text="Github"
          />
          <Navigation.Link
            target="_blank"
            href="curriculo.pdf"
            download
            text="Download Cv"
          />
        </Navigation.Root>
      </footer>
    </Layout>
  )
}
