import { useState } from 'react'
import { React } from '../../assets/React'

import style from './styles.module.scss'

const jobs = [
  {
    id: 1,
    company: 'Corebiz',
    role: 'Frontend Developer',
    period: 'fev de 2021 - o momento · 1 ano 10 meses',
    description:
      'Atuo no desenvolvimento e manutenção de features para grandes empresas utilizando as tecnologias do VTEX IO. Além disso também participo ativamente na definição dos requisitos e na arquitetura das melhores soluções para as grandes empresasAtuo no desenvolvimento e manutenção de features para grandes empresas utilizando as tecnologias do VTEX IO. Além disso também participo ativamente na definição dos requisitos e na arquitetura das melhores soluções para as grandes empresas. Competências: React · Vtex · GitHub · Desenvolvimento de front-end · HTML5 · CSS · Node.js · Git',
  },
  {
    id: 2,
    company: 'Mobly',
    role: 'Estágio Frontend',
    period: 'jul de 2020 - fev de 2021 · 8 meses',
    description:
      'Criação de novas funcionalidades, automação de processos e participação ativa em todas as etapas de uma equipe de marketing.Criação de novas funcionalidades, automação de processos e participação ativa em todas as etapas de uma equipe de marketing. Competências: Salesforce.com · JavaScript · JQuery · HTML5 · CSS · Node.js',
  },
  {
    id: 3,
    company: 'Casas Bahia',
    role: 'Vendedor',
    period: 'nov de 2019 - jul de 2020 · 9 meses',
    description:
      'Atuei como vendedor criando excelentes experiências de compra, orientando os clientes e oferencendo os melhores produtos e serviços disponíveis Atuei como vendedor criando excelentes experiências de compra, orientando os clientes e oferencendo os melhores produtos e serviços disponíveis. Competências: Vendas · Atendimento ao cliente · Comunicação · Comunicação intercultural',
  },
  {
    id: 4,
    company: 'Casas Bahia',
    role: 'Jovem Aprendiz',
    period: 'mar de 2018 - ago de 2019 · 1 ano 6 meses',
    description:
      'Como aprendiz trabalhei em diversos setores e aprendi diversas funções, entre elas o crediário, vendas e o estoque. Durante esse período desempenhei funções administrativas, vendas e de logística.Como aprendiz trabalhei em diversos setores e aprendi diversas funções, entre elas o crediário, vendas e o estoque. Durante esse período desempenhei funções administrativas, vendas e de logística. Competências: Vendas · Atendimento ao cliente · Comunicação',
  },
]

export function ExperienceSection() {
  const [selectedIdCompany, setSelectedIdCompany] = useState(1)
  const company = jobs.find((job) => job.id === selectedIdCompany)

  return (
    <section className={style.experience}>
      <section>
        <h3>
          Experiência <span>.</span>
        </h3>

        <div className={style.container}>
          <div className={style.tab_container}>
            {jobs.map((job) => (
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
