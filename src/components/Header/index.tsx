import Link from 'next/link'

import { NavLink } from '../NavLink'
import { Logo } from '../../assets/Logo'

import style from './styles.module.scss'

export function Header() {
  return (
    <header className={style.header}>
      <section>
        <Link href="/">
          <Logo />
        </Link>

        <nav>
          <NavLink href="#home" text="Ínicio" />
          <NavLink href="#about" text="Quem sou" />
          <NavLink href="#projects" text="Projetos" />
          <NavLink href="#experience" text="Experiência" />
          <NavLink href="#knowledge" text="Conhecimentos" />
          <NavLink href="#contact" text="Contato" />
        </nav>
      </section>
    </header>
  )
}
