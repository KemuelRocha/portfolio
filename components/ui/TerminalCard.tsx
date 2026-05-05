'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TerminalCardProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function TerminalCard({ children, title = 'kemuel.config.ts', className = '' }: TerminalCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className={`rounded-xl overflow-hidden border border-[#00FF88]/20 ${className}`}
      style={{ background: '#0D1117' }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E1E]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span
          className="ml-3 text-xs text-[#6B7280]"
          style={{ fontFamily: 'var(--font-space-mono), monospace' }}
        >
          {title}
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-5 text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-space-mono), monospace' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
