export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  role: string
  slug: string
  link?: string
  status?: 'live' | 'wip'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Dhedalos',
    description:
      'Plataforma educacional completa com trilhas de aprendizado, certificação progressiva, onboarding guiado e dashboards administrativos. Arquitetura orientada a domínio com integrações entre múltiplos sistemas.',
    tech: ['Django', 'Next.js', 'PostgreSQL', 'Docker', 'Nginx'],
    role: 'Tech Lead · Fullstack',
    slug: 'dhedalos',
    status: 'live',
  },
  {
    id: '2',
    title: 'iFood Careers',
    description:
      'Plataforma web de carreiras para o iFood, com foco em experiência do candidato, performance e acessibilidade. Interface moderna que conecta talentos às oportunidades da empresa.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    role: 'Frontend · Arquitetura',
    slug: 'ifood',
    status: 'live',
  },
  {
    id: '3',
    title: 'Agibank Landing Pages',
    description:
      'Série de landing pages de alta conversão para campanhas de captação do Agibank. Otimizadas para performance, SEO e integração com CRMs de captação de leads.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Analytics'],
    role: 'Frontend · Performance',
    slug: 'agibank',
    status: 'live',
  },
  {
    id: '4',
    title: 'Vistor.io',
    description:
      'Sistema de gestão automotiva com controle de estoque, agendamento de revisões, histórico de veículos e painel administrativo. Produto SaaS em desenvolvimento.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    role: 'Fundador · Fullstack · Arquitetura',
    slug: 'vistor',
    status: 'wip',
  },
  {
    id: '5',
    title: 'SaaS Financeiro',
    description:
      'Produto próprio de gestão financeira pessoal e empresarial com categorização inteligente de despesas, relatórios e metas. Construído com IA para análise e sugestões automáticas.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'LLM', 'Docker'],
    role: 'Fundador · Fullstack · AI',
    slug: 'saas-financeiro',
    status: 'wip',
  },
]
