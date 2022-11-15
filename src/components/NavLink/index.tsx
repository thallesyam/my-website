import Link from 'next/link'
import style from './styles.module.scss'

type Props = {
  text: string
  href: string
}

export function NavLink({ text, href }: Props) {
  return (
    <Link className={style.link} href={href}>
      <p>{text}</p>
    </Link>
  )
}
