import { HTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

import style from './styles.module.scss'

type Props = HTMLAttributes<HTMLHeadingElement> & {
  text: string
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  asChild?: boolean
  highlightText?: string
}

export function Title({
  text,
  asChild = false,
  tagName,
  highlightText = '.',
  ...rest
}: Props) {
  const Component = asChild ? Slot : `${tagName}`

  return (
    <Component className={style.title} {...rest}>
      {text}
      <span>{highlightText}</span>
    </Component>
  )
}
