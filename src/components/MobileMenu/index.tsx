import { useEffect, useState } from 'react'
import { NavLink } from '../NavLink'
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

  return (
    <>
      <button
        className={`${style.mobile_menu} ${isActive ? style.isActive : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`${style.line1} ${isActive ? style.isActive : ''}`}
        ></div>
        <div
          className={`${style.line2} ${isActive ? style.isActive : ''}`}
        ></div>
        <div
          className={`${style.line3} ${isActive ? style.isActive : ''}`}
        ></div>
      </button>

      <ul
        className={`
          ${style.mobile_list_menu} 
          ${isActive ? style.isActive : ''}
        `}
      >
        <NavLink
          onClick={() => setIsActive(false)}
          href="#home"
          text="Ínicio"
        />
        <NavLink
          onClick={() => setIsActive(false)}
          href="#about"
          text="Quem sou"
        />
        <NavLink
          onClick={() => setIsActive(false)}
          href="#projects"
          text="Projetos"
        />
        <NavLink
          onClick={() => setIsActive(false)}
          href="#experience"
          text="Experiência"
        />
        <NavLink
          onClick={() => setIsActive(false)}
          href="#knowledge"
          text="Conhecimentos"
        />
      </ul>
    </>
  )
}
