<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

This repository is a personal portfolio for Kemuel Rocha with a dark retro-futuristic visual style.

## Stack

- Next.js 16.2.4 with App Router
- React 19.2.4
- TypeScript with `strict: true`
- Tailwind CSS v4 using `@theme` tokens in `app/globals.css`
- Framer Motion for animation
- lucide-react for icons
- Google Fonts loaded through `next/font/google`

## Main Structure

- `app/page.tsx` composes the single-page portfolio sections.
- `app/layout.tsx` owns global metadata and font variables.
- `app/globals.css` defines theme tokens, base styles, animation keyframes, grid/noise effects, and reduced-motion behavior.
- `components/sections/` contains the major page sections:
  - `Hero`
  - `About`
  - `Stack`
  - `Projects`
  - `AISection`
  - `Experience`
  - `Contact`
- `components/ui/` contains reusable presentation components such as buttons, cards, wrappers, badges, timeline items, glitch/typewriter text.
- `lib/data/` centralizes editable content:
  - `projects.ts`
  - `stack.ts`
  - `experience.ts`
- `public/images/` contains the profile and project images expected by `next/image`.

## Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production app: `npm run build`
- Run lint: `npm run lint`

## Implementation Notes

- Most UI components are client components because they use Framer Motion hooks or browser APIs.
- Preserve the existing visual language: dark background, neon green `#00FF88`, electric blue `#00BFFF`, compact technical typography, terminal/code-inspired UI.
- Prefer editing content in `lib/data/*` when changing projects, stack, or experience.
- Contact links and email live in `components/sections/Contact.tsx`.
- Use `next/image` for local images and keep paths aligned with files under `public/images/`.
- Before changing Next.js behavior, routing, metadata, images, fonts, or config, read the relevant installed docs under `node_modules/next/dist/docs/`.

## Known Current State

As of the latest context pass, `npm run lint` fails before any code changes with:

- JSX comment text errors in `Hero`, `AISection`, `Contact`, and `Projects`.
- React purity errors from `Math.random()` calls during render in `components/sections/Contact.tsx`.
- Unused imports in `AISection` and `Contact`.

Fix these separately before treating lint as a reliable regression check.
