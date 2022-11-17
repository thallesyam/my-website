import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import style from './styles.module.scss'

type MenuRootProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

function MenuRoot({ children, ...rest }: MenuRootProps) {
  return <section {...rest}>{children}</section>
}

type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean
  toggle: () => void
}

function MenuButton({ isActive, toggle, ...rest }: MenuButtonProps) {
  return (
    <button
      className={`${style.mobile_menu} ${isActive ? style.isActive : ''}`}
      onClick={toggle}
    >
      <div className={`${style.line1} ${isActive ? style.isActive : ''}`}></div>
      <div className={`${style.line2} ${isActive ? style.isActive : ''}`}></div>
      <div className={`${style.line3} ${isActive ? style.isActive : ''}`}></div>
    </button>
  )
}

MenuRoot.displayName = 'Menu.Root'
MenuButton.displayName = 'Menu.Button'

export const Menu = {
  Root: MenuRoot,
  Button: MenuButton,
}
