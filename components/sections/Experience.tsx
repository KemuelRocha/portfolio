'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { experiences } from '@/lib/data/experience'

function TimelineLine() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.2'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
      <motion.div
        className="w-full h-full origin-top"
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #00FF88, #00BFFF)',
        }}
      />
    </div>
  )
}

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experiência"
      labelNumber="// 05"
      className="bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col gap-12">
          {/* Animated center line — desktop only */}
          <div className="hidden md:block">
            <TimelineLine />
          </div>

          {/* Mobile left border line */}
          <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-[#1E1E1E]" />

          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} item={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
