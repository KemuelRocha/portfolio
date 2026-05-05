export interface TechItem {
  name: string;
  level: number;
}

export interface StackCategory {
  category: string;
  color: string;
  items: TechItem[];
}

export const stackData: StackCategory[] = [
  {
    category: "Frontend",
    color: "#00FF88",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Angular", level: 80 },
    ],
  },
  {
    category: "Backend",
    color: "#00BFFF",
    items: [
      { name: "Django", level: 92 },
      { name: "Node.js", level: 86 },
      { name: "Laravel", level: 84 },
      { name: "WordPress", level: 84 },
    ],
  },
  {
    category: "Infra / DevOps",
    color: "#A78BFA",
    items: [
      { name: "Docker", level: 84 },
      { name: "Dokku", level: 82 },
      { name: "Nginx", level: 80 },
      { name: "AWS", level: 74 },
      { name: "Keycloak", level: 68 },
    ],
  },
  {
    category: "IA & Data",
    color: "#F59E0B",
    items: [
      { name: "PostgreSQL", level: 94 },
      { name: "Prompt Engineering", level: 92 },
      { name: "LangChain / LangGraph", level: 88 },
      { name: "OpenAI / Claude AI", level: 88 },
      { name: "MySQL", level: 82 },
    ],
  },
];
