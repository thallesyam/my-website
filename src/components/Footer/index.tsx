import Link from 'next/link'

import { NavLink } from '../NavLink'

import style from './styles.module.scss'

export function Footer() {
  return (
    <header className={style.footer}>
      <section>
        <Link href="/">Created by Thalles with 🖤</Link>

        <nav>
          <NavLink
            href="https://www.linkedin.com/in/thalles-ian/"
            text="Linkedin"
          />
          <NavLink href="" text="Whatsapp" />
          <NavLink href="https://www.github.com/thallesyam" text="Github" />
          <NavLink href="" text="Download Cv" />
        </nav>
      </section>
    </header>
  )
}
