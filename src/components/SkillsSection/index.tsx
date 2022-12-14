import { useState } from 'react'

import { Layout } from '../Layout'

import { useSkillQuery } from '../../graphql/generated'

import { React } from '../../assets/React'

import style from './styles.module.scss'
import { Title } from '../Title'

export function SkillsSection() {
  const { data } = useSkillQuery()
  const [skillHover, setSkillHover] = useState('')

  function handleHover(event: any) {
    const skillName: string = event?.target?.ariaLabel

    const description = data?.skills.find(
      (skill) => skill.name === skillName
    )?.description

    if (!description) return

    setSkillHover(description)
  }

  return (
    <Layout className={style.skill}>
      <Title text="Conhecimentos" tagName="h5" />

      <div className={style.techs_container}>
        <p>{!!skillHover ? skillHover : '*Passe o mouse para ler o card*'}</p>

        <div className={style.card_container}>
          {data?.skills.map((skill) => (
            <div
              key={skill.id}
              className={style.card}
              onMouseEnter={(event) => handleHover(event)}
              onMouseLeave={() => setSkillHover('')}
              aria-label={skill.name as string}
            >
              <span>{skill.name}</span>
              <img
                aria-label={skill.name as string}
                onClick={(event) => handleHover(event)}
                src={skill.icon?.url}
                alt={skill.name as string}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
