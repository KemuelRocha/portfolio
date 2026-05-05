export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  side: 'left' | 'right'
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'iFood',
    role: 'Desenvolvedor Frontend Sênior',
    period: '2023 — Presente',
    description:
      'Desenvolvimento da plataforma de carreiras e produtos web de alta escala. Liderança técnica em iniciativas de performance, arquitetura de componentes e design system. Colaboração próxima com produto, design e backend para entregas de alto impacto.',
    tech: ['Next.js', 'TypeScript', 'React', 'Design System', 'Node.js'],
    side: 'left',
  },
  {
    id: '2',
    company: 'Agibank',
    role: 'Desenvolvedor Frontend',
    period: '2022 — 2023',
    description:
      'Criação de landing pages e interfaces focadas em conversão para campanhas de captação. Integração com ferramentas de analytics, A/B testing e CRMs. Foco em SEO técnico e Core Web Vitals.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Analytics', 'SEO'],
    side: 'right',
  },
  {
    id: '3',
    company: 'Sebrae',
    role: 'Tech Lead Fullstack',
    period: '2020 — 2022',
    description:
      'Liderança técnica de plataformas educacionais e sistemas internos. Arquitetura de soluções de onboarding, certificação progressiva e dashboards. Coordenação de equipe de desenvolvimento, documentação técnica e código review.',
    tech: ['Django', 'Angular', 'PostgreSQL', 'Docker', 'Keycloak'],
    side: 'left',
  },
  {
    id: '4',
    company: 'Tennant Company / Alfa',
    role: 'Desenvolvedor Fullstack',
    period: '2019 — 2020',
    description:
      'Desenvolvimento de dashboards industriais e sistemas de gestão para operações de limpeza e manutenção. Integrações entre ERPs e sistemas legados via ETL. Backend robusto com APIs REST e relatórios automatizados.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'REST API'],
    side: 'right',
  },
]
