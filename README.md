# Kemuel Rocha — Portfolio

Portfolio profissional com estética retro-futurista dark.

## Setup

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Onde inserir as fotos

| Arquivo | Descrição | Tamanho recomendado |
|---|---|---|
| `public/images/kemuel.jpg` | Foto de perfil (Hero) | 400×500px, JPG/WebP |
| `public/images/projects/dhedalos.jpg` | Screenshot do projeto | 800×500px, JPG/WebP |
| `public/images/projects/ifood.jpg` | Screenshot do projeto | 800×500px |
| `public/images/projects/agibank.jpg` | Screenshot do projeto | 800×500px |
| `public/images/projects/vistor.jpg` | Screenshot do projeto | 800×500px |
| `public/images/projects/saas-financeiro.jpg` | Screenshot do projeto | 800×500px |

Substitua os arquivos placeholder mantendo o mesmo nome de arquivo.

## Personalizar conteúdo

Todos os dados textuais estão centralizados em:

- `lib/data/stack.ts` — tecnologias e nível de proficiência
- `lib/data/projects.ts` — projetos (título, descrição, tech, role)
- `lib/data/experience.ts` — experiência profissional (empresa, cargo, período)
- `components/sections/Contact.tsx` — e-mail, links GitHub/LinkedIn/WhatsApp

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**
- **Google Fonts** — Space Mono, DM Sans, Orbitron

## Build

```bash
npm run build
npm run start
```
