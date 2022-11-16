import Link from 'next/link'
import { NavLink } from '../NavLink'
import style from './styles.module.scss'

const projects = [
  {
    id: 1,
    title: 'Rentx',
    description:
      'RentX é uma aplicação de locadora de veículos. Focada em proporcionar uma melhor experiência no aluguel',
    githubLink: '',
    projectLink: '',
  },
  {
    id: 2,
    title: 'Letmeask',
    description:
      'Aplicação para controle de perguntas, com votação e ordem de prioridade',
    githubLink: '',
    projectLink: '',
  },
]

export function ProjectSection() {
  return (
    <section className={style.project}>
      <section>
        <h4>
          Projetos <span>.</span>
        </h4>

        <div className={style.cards_container}>
          {projects.map((project) => (
            <div key={project.id} className={style.card}>
              <p>{project.title}</p>

              <span>{project.description}</span>

              <div className={style.card_button_container}>
                <Link href={project.githubLink} className={style.github}>
                  github
                </Link>
                <Link href={project.projectLink} className={style.view_project}>
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

        <NavLink
          className={style.githubLink}
          href="https://www.github.com/thallesyam"
          text="Repositórios no github"
        />
      </section>
    </section>
  )
}
