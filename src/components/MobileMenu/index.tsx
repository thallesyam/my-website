import { useEffect, useState } from 'react'
import { Menu } from '../Menu'
import { Navigation } from '../Navigation'
import style from './styles.module.scss'

export function MobileMenu() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!window) return
    const body = window.document.getElementsByTagName('body')[0]
    if (!body) return

    if (isActive) {
      body.className = 'menu_active'
      return
    }

    body.className = ''
  }, [isActive])

  function handleToggle() {
    setIsActive(!isActive)
  }

  return (
    <Menu.Root>
      <Menu.Button isActive={isActive} toggle={handleToggle} />

      <Navigation.Root
        className={`
          ${style.mobile_list_menu} 
          ${isActive ? style.isActive : ''}
        `}
      >
        <Navigation.Link
          onClick={() => setIsActive(false)}
          href="#home"
          text="Ínicio"
        />
        <Navigation.Link
          onClick={() => setIsActive(false)}
          href="#about"
          text="Quem sou"
        />
        <Navigation.Link
          onClick={() => setIsActive(false)}
          href="#projects"
          text="Projetos"
        />
        <Navigation.Link
          onClick={() => setIsActive(false)}
          href="#experience"
          text="Experiência"
        />
        <Navigation.Link
          onClick={() => setIsActive(false)}
          href="#knowledge"
          text="Conhecimentos"
        />
      </Navigation.Root>
    </Menu.Root>
  )
}
