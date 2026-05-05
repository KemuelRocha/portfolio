'use client'

import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data/projects'

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projetos"
      labelNumber="// 03"
      className="bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop: grid; Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
          {projects.map((project, index) => (
            <div key={project.id} className="w-[85vw] flex-shrink-0 snap-start">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <p className="text-xs text-[#4B5563] mt-8 text-center"
          style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}>
          {'// mais projetos em breve'}
        </p>
      </div>
    </SectionWrapper>
  )
}
