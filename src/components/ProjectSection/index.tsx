import Link from 'next/link'

import { Layout } from '../Layout'
import { Title } from '../Title'
import { Navigation } from '../Navigation'

import { useProjectQuery } from '../../graphql/generated'

import style from './styles.module.scss'

export function ProjectSection() {
  const { data } = useProjectQuery()

  return (
    <Layout className={style.project}>
      <Title text="Projetos" tagName="h4" />

      <div className={style.cards_container}>
        {data?.projects.map((project) => (
          <div
            key={project.id}
            className={style.card}
            style={{ border: `1px solid ${project.color}` }}
          >
            <p>{project.title}</p>

            <span>{project.description}</span>

            <div className={style.card_button_container}>
              <Link
                href={project.githubLink as string}
                className={style.github}
              >
                github
              </Link>
              <Link
                href={project.projectLink as string}
                className={style.view_project}
              >
                visualizar
              </Link>
            </div>
          </div>
        ))}

        <div className={style.card}>
          <p>Em breve</p>

          <span>
            Pegue o café e espere um pouco, estou desenvolvendo o projeto.
          </span>

          <div className={style.card_button_container}>
            <Link href="#" className={`${style.github} ${style.disabled}`}>
              github
            </Link>
            <Link
              href="#"
              className={`${style.view_project} ${style.disabled}`}
            >
              visualizar
            </Link>
          </div>
        </div>
      </div>

      <Navigation.Link
        className={style.githubLink}
        href="https://www.github.com/thallesyam"
        text="Repositórios no github"
      />
    </Layout>
  )
}
