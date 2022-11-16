import Link from 'next/link'

import { NavLink } from '../NavLink'
import { Logo } from '../../assets/Logo'

import style from './styles.module.scss'
import { MobileMenu } from '../MobileMenu'

export function Header() {
  return (
    <header className={style.header}>
      <section>
        <Link href="/">
          <Logo />
        </Link>

        <nav className={style.desktop_menu}>
          <NavLink href="#home" text="Ínicio" />
          <NavLink href="#about" text="Quem sou" />
          <NavLink href="#projects" text="Projetos" />
          <NavLink href="#experience" text="Experiência" />
          <NavLink href="#knowledge" text="Conhecimentos" />
        </nav>

        <MobileMenu />
      </section>
    </header>
  )
}
