export interface Project {
  id: string
  title: string
  description: string
  highlights: string[]
  tech: string[]
  role: string
  slug: string
  link?: string
  status?: 'live' | 'wip'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vistorio',
    description:
      'Plataforma SaaS completa de gestão de vistorias automotivas com checklist digital, assinatura do cliente e PWA. Em produção com clientes reais.',
    highlights: [
      'Multi-tenant com isolamento total por empresa',
      'Checklists digitais personalizáveis por tipo de veículo',
      'Assinatura digital obrigatória do cliente',
      'Dashboard com métricas operacionais e filtros por período',
      'PWA instalável em Android e iOS',
      'Notificações in-app e e-mail em etapas chave',
      'Cache Redis por tenant para alta performance',
      'Deploy com Dokku em infraestrutura própria',
    ],
    tech: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Dokku', 'PWA', 'JWT'],
    role: 'Fundador · Tech Lead · Fullstack',
    slug: 'vistor',
    link: 'https://vistorio.krsoftware.com.br',
    status: 'live',
  },
  {
    id: '2',
    title: 'FinSmart',
    description:
      'SaaS B2B de gestão financeira para microempreendedores (MEI/ME) com IA de categorização, projeção de fluxo de caixa e guardião fiscal automático. Em produção com clientes.',
    highlights: [
      'Guardião Fiscal: monitoramento automático do limite anual MEI/ME',
      'IA de categorização via Naive Bayes treinado com histórico do usuário',
      'Projeção de fluxo de caixa para 30 dias sem API externa',
      'Contas recorrentes com geração automática de transações',
      'Exportação de relatórios XLSX (DRE, Fluxo de Caixa, Fiscal)',
      'Multi-tenant com isolamento total de dados por empresa',
      'Dashboard com 4 KPIs, gráficos e tendência dos últimos 6 meses',
      'PWA instalável, design mobile-first',
    ],
    tech: ['Next.js', 'Django', 'PostgreSQL', 'Scikit-learn', 'Pandas', 'Docker', 'ShadcnUI', 'JWT'],
    role: 'Fundador · Tech Lead · Fullstack · AI',
    slug: 'saas-financeiro',
    link: 'https://finsmart.krsoftware.com.br',
    status: 'live',
  },
  {
    id: '3',
    title: 'FiberOS',
    description:
      'Sistema de Gestão de Redes FTTH multi-tenant para ISPs. Plataforma completa com GIS integrado, documentação da rede óptica, ordens de serviço e viabilidade técnica.',
    highlights: [
      'GIS integrado com mapa interativo para postes, caixas e cabos georreferenciados',
      'Documentação completa da rede: OLTs, splitters, CTOs, fibras',
      'Multi-tenant: múltiplos ISPs em uma única instância',
      'Análise de viabilidade técnica automática para vendas',
      'Ordens de serviço com gestão de instalações e manutenções',
      'Integração OTDR para certificação de fibras',
      'PWA com base mobile pronta para uso em campo',
      'Backend com PostGIS para dados geoespaciais',
    ],
    tech: ['Next.js', 'Django', 'PostgreSQL', 'PostGIS', 'Redis', 'Celery', 'MapLibre GL', 'Docker', 'WebSocket'],
    role: 'Fundador · Arquiteto · Fullstack',
    slug: 'fiberos',
    link: 'https://fiberos.krsoftware.com.br',
    status: 'wip',
  },
  {
    id: '4',
    title: 'Dhedalos',
    description:
      'Plataforma educacional com trilhas de aprendizado, certificação progressiva, onboarding guiado e dashboards administrativos. Arquitetura orientada a domínio com integrações entre múltiplos sistemas.',
    highlights: [
      'Trilhas de aprendizado com progresso e certificação',
      'Onboarding guiado para novos usuários',
      'Dashboard administrativo com métricas de engajamento',
      'Integrações via ETL com sistemas externos',
    ],
    tech: ['Django', 'Next.js', 'PostgreSQL', 'Docker', 'Nginx'],
    role: 'Tech Lead · Fullstack',
    slug: 'dhedalos',
    status: 'live',
  },
  {
    id: '5',
    title: 'iFood Careers',
    description:
      'Plataforma web de carreiras para o iFood com foco em experiência do candidato, performance e acessibilidade. Interface moderna conectando talentos às oportunidades da empresa.',
    highlights: [
      'Performance otimizada com Core Web Vitals em destaque',
      'Acessibilidade (WCAG) e SEO técnico',
      'Arquitetura de componentes escalável',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    role: 'Frontend Sênior · Arquitetura',
    slug: 'ifood',
    status: 'live',
  },
  {
    id: '6',
    title: 'Agibank Landing Pages',
    description:
      'Série de landing pages de alta conversão para campanhas de captação do Agibank, com A/B testing, SEO técnico e integração com CRMs.',
    highlights: [
      'A/B testing e analytics avançado',
      'SEO técnico e Core Web Vitals',
      'Integração com CRMs de captação de leads',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Analytics'],
    role: 'Frontend · Performance',
    slug: 'agibank',
    status: 'live',
  },
]
