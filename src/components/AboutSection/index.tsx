import { About } from '../../assets/About'
import { Css } from '../../assets/Css'
import { React } from '../../assets/React'
import { Typescript } from '../../assets/Typescript'

import style from './styles.module.scss'

export function AboutSection() {
  return (
    <section className={style.about} id="about">
      <section>
        <div className={style.icon_container}>
          <About />

          <div className={`${style.tech_icon} ${style.first_icon}`}>
            <Typescript />
          </div>
          <div className={`${style.tech_icon} ${style.second_icon}`}>
            <Css />
          </div>
          <div className={`${style.tech_icon} ${style.third_icon}`}>
            <React />
          </div>
        </div>

        <div className={style.text_container}>
          <h2>
            Quem sou <span>.</span>
          </h2>

          <p>
            Meu nome é Thalles, sou apaixonado por construir soluções úteis que
            ajudem a criar experiências únicas e marcantes para os usuários. Sou
            um desenvolvedor frontend entusiasta da stack Javascript. Amo
            estudar sobre arquitetura de software, design patterns, paradigmas
            de programação e utilizo todas essas habilidades e competências para
            resolver problemas através da tecnologia.
          </p>
        </div>
      </section>
    </section>
  )
}
