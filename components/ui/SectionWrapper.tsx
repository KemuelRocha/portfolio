'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  label?: string
  labelNumber?: string
  className?: string
  id?: string
}

export function SectionWrapper({
  children,
  label,
  labelNumber,
  className = '',
  id,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id={id} ref={ref} className={`relative py-24 px-6 md:px-12 lg:px-20 ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          {labelNumber && (
            <span
              className="text-xs text-[#00FF88]/50"
              style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
            >
              {labelNumber}
            </span>
          )}
          <span
            className="text-xs tracking-widest uppercase text-[#00FF88]/70"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            {label}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00FF88]/30 to-transparent" />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
