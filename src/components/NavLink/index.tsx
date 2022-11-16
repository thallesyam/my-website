import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import style from './styles.module.scss'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  href: string
}

export function NavLink({ text, href, ...rest }: Props) {
  return (
    <Link {...rest} className={`${style.link} ${rest.className}`} href={href}>
      {text}
    </Link>
  )
}
