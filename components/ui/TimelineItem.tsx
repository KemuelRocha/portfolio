'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TechBadge } from './TechBadge'
import type { Experience } from '@/lib/data/experience'

interface TimelineItemProps {
  item: Experience
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = item.side === 'left'

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-0 md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row pl-8 md:pl-0`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        className="flex-1 max-w-lg"
      >
        <div
          className="p-5 rounded-xl border border-[#1E1E1E] hover:border-[#00FF88]/30 transition-colors duration-300"
          style={{ background: '#111111' }}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3
                className="text-base font-bold text-[#E8F0FE]"
                style={{ fontFamily: 'var(--font-space-mono), monospace' }}
              >
                {item.role}
              </h3>
              <p className="text-[#00FF88] font-semibold text-sm">{item.company}</p>
            </div>
            <span
              className="text-xs text-[#6B7280] whitespace-nowrap pt-0.5"
              style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
            >
              {item.period}
            </span>
          </div>

          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">{item.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <TechBadge key={t} label={t} color="#00BFFF" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center dot — visible on md+ */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#00FF88] bg-[#0A0A0A] z-10 mt-5"
        style={{ boxShadow: '0 0 12px rgba(0, 255, 136, 0.6)' }}
      />

      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="md:hidden absolute left-0 top-5 w-3 h-3 rounded-full border-2 border-[#00FF88] bg-[#0A0A0A] z-10"
        style={{ boxShadow: '0 0 8px rgba(0, 255, 136, 0.5)' }}
      />

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block flex-1 max-w-lg" />
    </div>
  )
}
