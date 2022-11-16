import React, { useRef, useEffect, ReactNode } from 'react'
import scrollReveal from 'scrollreveal'

type ScrollRevealProps = {
  children?: ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
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

  return <section ref={sectionRef}>{children}</section>
}
