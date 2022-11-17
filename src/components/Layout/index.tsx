import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, ReactNode } from 'react'
import style from './styles.module.scss'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  asChild?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Layout({
  children,
  asChild = false,
  size = 'md',
  ...rest
}: Props) {
  const Component = asChild ? Slot : 'section'
  const containerClass =
    size === 'md'
      ? style.container_medium
      : size === 'sm'
      ? style.container_small
      : style.container_large

  return (
    <Component
      {...rest}
      className={`${containerClass} ${rest.className ? rest.className : ''}`}
    >
      {children}
    </Component>
  )
}
