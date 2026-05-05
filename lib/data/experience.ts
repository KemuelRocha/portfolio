export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  side: "left" | "right";
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "iFood",
    role: "Desenvolvedor Frontend Sênior",
    period: "2023 — Presente",
    description:
      "Desenvolvimento da plataforma de carreiras e produtos web de alta escala. Liderança técnica em iniciativas de performance, arquitetura de componentes e design system. Colaboração próxima com produto, design e backend para entregas de alto impacto.",
    tech: ["Next.js", "TypeScript", "React", "Design System", "Node.js"],
    side: "left",
  },
  {
    id: "2",
    company: "Agibank",
    role: "Desenvolvedor Fullstack",
    period: "2022 — 2023",
    description:
      "Desenvolvimento fullstack de produtos web para gestão de carreiras, calibragem e campanhas digitais. Frontend com Next.js, TypeScript e Tailwind CSS; backend com Django e PostgreSQL. Integração com analytics, SEO técnico e otimização de Core Web Vitals.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
      "Analytics",
    ],
    side: "right",
  },
  {
    id: "3",
    company: "Sebrae",
    role: "Tech Lead Fullstack",
    period: "2020 — 2022",
    description:
      "Liderança técnica de plataformas educacionais e sistemas internos. Arquitetura de soluções de onboarding, certificação progressiva e dashboards. Coordenação de equipe de desenvolvimento, documentação técnica e código review.",
    tech: ["Django", "Angular", "PostgreSQL", "Docker", "WordPress"],
    side: "left",
  },
  {
    id: "4",
    company: "Tennant Company / Alfa",
    role: "Desenvolvedor Fullstack",
    period: "2019 — 2020",
    description:
      "Desenvolvimento de dashboards industriais e sistemas de gestão para operações de limpeza e manutenção. Integrações entre ERPs e sistemas legados via ETL. Backend robusto com APIs REST e relatórios automatizados.",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker", "REST API"],
    side: "right",
  },
];
