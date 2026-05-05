export interface TechItem {
  name: string
  level: number
}

export interface StackCategory {
  category: string
  color: string
  items: TechItem[]
}

export const stackData: StackCategory[] = [
  {
    category: 'Frontend',
    color: '#00FF88',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Angular', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: '#00BFFF',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Django', level: 82 },
      { name: 'Laravel', level: 76 },
      { name: 'WordPress', level: 72 },
    ],
  },
  {
    category: 'Infra / DevOps',
    color: '#A78BFA',
    items: [
      { name: 'Docker', level: 84 },
      { name: 'Nginx', level: 80 },
      { name: 'AWS', level: 74 },
      { name: 'Dokku', level: 72 },
      { name: 'Keycloak', level: 68 },
    ],
  },
  {
    category: 'IA & Data',
    color: '#F59E0B',
    items: [
      { name: 'Prompt Engineering', level: 90 },
      { name: 'LLM Integration', level: 88 },
      { name: 'PostgreSQL', level: 86 },
      { name: 'MySQL', level: 82 },
    ],
  },
]
