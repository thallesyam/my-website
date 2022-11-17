import React, { useRef, useEffect, ReactNode, HTMLAttributes } from 'react'
import scrollReveal from 'scrollreveal'

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
}

export default function ScrollReveal({ children, ...rest }: ScrollRevealProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
        origin: 'top',
        distance: '50px',
        duration: 2000,
      })
  }, [])

  return (
    <section ref={sectionRef} {...rest}>
      {children}
    </section>
  )
}
