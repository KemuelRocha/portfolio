'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { stackData } from '@/lib/data/stack'

function ProgressBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="h-1.5 rounded-full bg-[#1E1E1E] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
}

export function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="stack" label="Stack Técnica" labelNumber="// 02">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1, ease: 'easeOut' }}
              whileHover={{
                y: -4,
                boxShadow: `0 0 24px ${category.color}22, 0 16px 32px rgba(0,0,0,0.3)`,
                borderColor: `${category.color}50`,
              }}
              className="rounded-xl p-6 border border-[#1E1E1E] transition-colors duration-300"
              style={{ background: '#111111' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }}
                />
                <h3
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{
                    fontFamily: 'var(--font-orbitron-var), sans-serif',
                    color: category.color,
                  }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Tech items */}
              <div className="flex flex-col gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm text-[#E8F0FE] font-medium"
                        style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: `${category.color}80`, fontFamily: 'var(--font-orbitron-var), sans-serif' }}
                      >
                        {item.level}%
                      </span>
                    </div>
                    <ProgressBar
                      level={item.level}
                      color={category.color}
                      delay={catIndex * 0.1 + itemIndex * 0.06}
                    />
                  </div>
                ))}
              </div>

              {/* Chips stagger */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[#1E1E1E]"
              >
                {category.items.map((item) => (
                  <motion.span
                    key={item.name}
                    variants={chipVariants}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${category.color}12`,
                      border: `1px solid ${category.color}25`,
                      color: `${category.color}CC`,
                      fontFamily: 'var(--font-space-mono), monospace',
                    }}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
