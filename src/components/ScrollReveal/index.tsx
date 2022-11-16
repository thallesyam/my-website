import React, { useRef, useEffect, CSSProperties, ReactNode } from 'react'
import scrollReveal from 'scrollreveal'

type ScrollRevealProps = {
  style?: CSSProperties
  children?: ReactNode
}

export default function ScrollReveal({ children, style }: ScrollRevealProps) {
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
    <section ref={sectionRef} style={style}>
      {children}
    </section>
  )
}
