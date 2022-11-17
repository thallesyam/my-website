import Link from 'next/link'

import { Logo } from '../../assets/Logo'

import style from './styles.module.scss'
import { MobileMenu } from '../MobileMenu'
import { Navigation } from '../Navigation'

export function Header() {
  return (
    <header className={style.header}>
      <section>
        <Link href="/">
          <Logo />
        </Link>

        <Navigation.Root className={style.desktop_menu}>
          <Navigation.Link href="#home" text="Ínicio" />
          <Navigation.Link href="#about" text="Quem sou" />
          <Navigation.Link href="#experience" text="Experiência" />
          <Navigation.Link href="#project" text="Projetos" />
          <Navigation.Link href="#skill" text="Conhecimentos" />
        </Navigation.Root>

        <MobileMenu />
      </section>
    </header>
  )
}
