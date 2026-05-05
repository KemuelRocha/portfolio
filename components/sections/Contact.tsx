'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, Copy, Check } from 'lucide-react'
import { NeonButton } from '@/components/ui/NeonButton'

const EMAIL = 'kemuel@kemuelrocha.dev'

function IconGithub({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const links = [
  {
    Icon: IconGithub,
    label: 'GitHub',
    href: 'https://github.com/kemuelrocha',
    color: '#E8F0FE',
  },
  {
    Icon: IconLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kemuelrocha',
    color: '#00BFFF',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5500000000000',
    color: '#00FF88',
  },
]

function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        background: Math.random() > 0.5 ? '#00FF88' : '#00BFFF',
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.5, 0.1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
}))

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {particles.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} />
        ))}
      </div>

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00FF88, transparent)' }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span
            className="text-xs text-[#00FF88]/50"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            // 06
          </span>
          <span
            className="text-xs tracking-widest uppercase text-[#00FF88]/70"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            Contato
          </span>
        </motion.div>

        {/* CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-[#E8F0FE] leading-tight mb-6"
          style={{ fontFamily: 'var(--font-space-mono), monospace' }}
        >
          Vamos construir algo{' '}
          <span className="text-[#00FF88]">incrível</span> juntos.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#6B7280] mb-10 text-base max-w-lg mx-auto"
        >
          Seja um projeto novo, uma conversa técnica ou uma oportunidade de colaboração —
          estou sempre aberto a boas ideias.
        </motion.p>

        {/* Email */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleCopy}
          className="group relative flex items-center gap-3 mx-auto mb-10 px-6 py-4 rounded-xl border border-[#1E1E1E] hover:border-[#00FF88]/40 transition-all duration-300 cursor-pointer"
          style={{ background: '#111111' }}
          whileHover={{ y: -2, boxShadow: '0 0 20px rgba(0,255,136,0.1)' }}
          aria-label={`Copiar email: ${EMAIL}`}
        >
          <Mail size={18} className="text-[#00FF88]" />
          <span
            className="text-[#E8F0FE] font-medium text-sm md:text-base"
            style={{ fontFamily: 'var(--font-space-mono), monospace' }}
          >
            {EMAIL}
          </span>
          <motion.div
            animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
            className="ml-1 text-[#6B7280] group-hover:text-[#00FF88] transition-colors"
          >
            {copied ? <Check size={16} className="text-[#00FF88]" /> : <Copy size={16} />}
          </motion.div>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -28 }}
              exit={{ opacity: 0 }}
              className="absolute -top-1 left-1/2 -translate-x-1/2 text-xs text-[#00FF88] whitespace-nowrap"
              style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
            >
              Copiado!
            </motion.span>
          )}
        </motion.button>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {links.map((link) => {
            const Icon = link.Icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#1E1E1E] hover:border-[#1E1E1E] transition-all duration-200"
                style={{ background: '#111111' }}
              >
                <Icon size={18} style={{ color: link.color }} />
                <span
                  className="text-sm font-medium text-[#9CA3AF]"
                  style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                >
                  {link.label}
                </span>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs text-[#374151]"
          style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
        >
          © {new Date().getFullYear()} Kemuel Rocha. Construído com Next.js, Tailwind & Framer Motion.
        </motion.p>
      </div>
    </section>
  )
}
