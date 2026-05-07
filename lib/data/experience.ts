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
    period: "2023 — Presente",
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
    period: "2023 — Presente",
    description:
      "Liderança técnica de plataformas educacionais e sistemas internos. Arquitetura de soluções de onboarding, certificação progressiva e dashboards. Coordenação de equipe de desenvolvimento, documentação técnica e código review.",
    tech: ["Django", "Angular", "PostgreSQL", "Docker", "WordPress"],
    side: "left",
  },
  {
    id: "4",
    company: "Tennant Company / Alfa",
    role: "Tech Lead Fullstack",
    period: "2023 — Presente",
    description:
      "Desenvolvimento de dashboards industriais e sistemas de gestão para operações de limpeza e manutenção. Integrações entre ERPs e sistemas legados via ETL. Backend robusto com APIs REST e relatórios automatizados.",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker", "REST API"],
    side: "right",
  },
  {
    id: "5",
    company: "UNIVASF",
    role: "Pesquisador / TCC",
    period: "2022 — 2023",
    description:
      "Desenvolvimento de biblioteca Python para assinaturas digitais com certificado ICPEdu, API REST em Django e frontend em React para assinatura de documentos acadêmicos.",
    tech: ["Python", "Django", "React", "REST API", "ICPEdu"],
    side: "left",
  },
  {
    id: "6",
    company: "FACEPE / Lócus de Inovação em Saúde",
    role: "Bolsista de Desenvolvimento",
    period: "2022",
    description:
      "Desenvolvimento de sites e soluções digitais para o Lócus de Inovação em Saúde de Petrolina, apoiando iniciativas de comunicação e presença web.",
    tech: ["Web", "HTML", "CSS", "JavaScript", "WordPress"],
    side: "right",
  },
  {
    id: "7",
    company: "Freelancer / Projetos próprios",
    role: "Projetos Freelancer",
    period: "2016 — 2023",
    description:
      "Durante a graduação, desenvolvimento de sites, sistemas web e soluções sob demanda para clientes locais, unindo prática profissional, estudo e projetos independentes.",
    tech: ["Next.js", "React", "TypeScript", "Django", "Laravel", "PostgreSQL", "Docker"],
    side: "left",
  },
];
