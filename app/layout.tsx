import type { Metadata } from 'next'
import { Space_Mono, DM_Sans, Orbitron } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const orbitron = Orbitron({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kemuel Rocha — Tech Lead · Fullstack · Computer Engineer',
  description:
    'Portfolio de Kemuel Rocha, Tech Lead Fullstack com foco em arquitetura moderna, IA aplicada e desenvolvimento de produtos digitais escaláveis.',
  keywords: [
    'Tech Lead',
    'Fullstack Developer',
    'Computer Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Software Architecture',
  ],
  authors: [{ name: 'Kemuel Rocha' }],
  creator: 'Kemuel Rocha',
  metadataBase: new URL('https://kemuelrocha.dev'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kemuelrocha.dev',
    title: 'Kemuel Rocha — Tech Lead · Fullstack · Computer Engineer',
    description:
      'Tech Lead Fullstack construindo produtos digitais modernos, escaláveis e inteligentes.',
    siteName: 'Kemuel Rocha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kemuel Rocha — Tech Lead Fullstack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kemuel Rocha — Tech Lead · Fullstack · Computer Engineer',
    description:
      'Tech Lead Fullstack construindo produtos digitais modernos, escaláveis e inteligentes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceMono.variable} ${dmSans.variable} ${orbitron.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
