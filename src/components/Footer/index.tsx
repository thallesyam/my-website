import Link from 'next/link'
import { Layout } from '../Layout'

import { NavLink } from '../NavLink'

import style from './styles.module.scss'

export function Footer() {
  return (
    <Layout className={style.footer} asChild>
      <footer>
        <Link href="/">Created by Thalles with 🖤</Link>

        <nav>
          <NavLink
            href="https://www.linkedin.com/in/thalles-ian/"
            target="_blank"
            text="Linkedin"
          />
          <NavLink
            target="_blank"
            href="https://encurtador.com.br/joW16"
            text="Whatsapp"
          />

          <NavLink
            target="_blank"
            href="https://www.github.com/thallesyam"
            text="Github"
          />
          <NavLink
            target="_blank"
            href="curriculo.pdf"
            download
            text="Download Cv"
          />
        </nav>
      </footer>
    </Layout>
  )
}
