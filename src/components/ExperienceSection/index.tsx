import { useEffect, useState } from 'react'
import { React } from '../../assets/React'
import { useJobQuery } from '../../graphql/generated'

import style from './styles.module.scss'

export function ExperienceSection() {
  const { data } = useJobQuery()
  const [selectedIdCompany, setSelectedIdCompany] = useState('')
  const company = data?.jobs.find((job) => job.id === selectedIdCompany)

  useEffect(() => {
    if (!data) return
    setSelectedIdCompany(data?.jobs[0].id)
  }, [data])

  return (
    <section className={style.experience} id="experience">
      <section>
        <h3>
          Experiência <span>.</span>
        </h3>

        <div className={style.container}>
          <div className={style.tab_container}>
            {data?.jobs.map((job) => (
              <button
                onClick={() => setSelectedIdCompany(job.id)}
                key={job.id}
                className={`
                  ${style.tab_item} 
                  ${selectedIdCompany === job.id && style.isActive}
                `}
              >
                <p>{job.company}</p>
              </button>
            ))}
          </div>

          <div className={style.content_container}>
            <div className={style.content_header}>
              <p>{company?.role}</p>
              <span>{company?.period}</span>
            </div>

            <div className={style.content_body}>
              <p>{company?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
