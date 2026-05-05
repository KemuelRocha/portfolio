'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { TechBadge } from './TechBadge'
import type { Project } from '@/lib/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 30px rgba(0, 255, 136, 0.15), 0 20px 40px rgba(0,0,0,0.4)',
      }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-[#1E1E1E] hover:border-[#00FF88]/40 transition-colors duration-300 min-w-[300px] snap-start"
      style={{ background: '#111111' }}
    >
      {/* Screenshot */}
      <div className="relative h-48 overflow-hidden bg-[#0D1117]">
        <Image
          src={`/images/projects/${project.slug}.jpg`}
          alt={`Screenshot do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

        {/* Status badge */}
        {project.status === 'wip' && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B]"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            WIP
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-lg font-bold text-[#E8F0FE] leading-tight"
            style={{ fontFamily: 'var(--font-space-mono), monospace' }}
          >
            {project.title}
          </h3>
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            className="text-[#00FF88]/50 group-hover:text-[#00FF88] transition-colors flex-shrink-0 mt-1"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-[#1E1E1E]">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <p
          className="text-xs text-[#00BFFF]/70 mt-1"
          style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
        >
          {project.role}
        </p>
      </div>
    </motion.div>
  )
}
