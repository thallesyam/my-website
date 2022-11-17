import { Layout } from '../Layout'

import About from '../../assets/about.png'
import { Css } from '../../assets/Css'
import { React } from '../../assets/React'
import { Typescript } from '../../assets/Typescript'

import { useSingleTextQuery } from '../../graphql/generated'

import style from './styles.module.scss'

export function AboutSection() {
  const { data } = useSingleTextQuery()
  const about = data?.singleTexts[0].about

  return (
    <Layout className={style.about}>
      <div className={style.icon_container}>
        <img src={About} alt="" />

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

        <p>{about}</p>
      </div>
    </Layout>
  )
}
