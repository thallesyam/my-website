import Link from 'next/link'
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import style from './styles.module.scss'

type NavigationRootProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

function NavigationRoot({ children, ...rest }: NavigationRootProps) {
  return <nav {...rest}>{children}</nav>
}

type NavigationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  href: string
}

function NavigationLink({ text, href, ...rest }: NavigationLinkProps) {
  return (
    <Link
      {...rest}
      className={`${style.link} ${rest.className ? rest.className : ''}`}
      href={href}
    >
      {text}
    </Link>
  )
}

NavigationRoot.displayName = 'Navigation.Root'
NavigationLink.displayName = 'Navigation.Link'

export const Navigation = {
  Root: NavigationRoot,
  Link: NavigationLink,
}
