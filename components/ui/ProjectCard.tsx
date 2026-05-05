"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { TechBadge } from "./TechBadge";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const statusConfig = {
    live: { label: "Live", color: "#00FF88" },
    wip: { label: "WIP", color: "#F59E0B" },
  };
  const status = project.status ? statusConfig[project.status] : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 0 30px rgba(0, 255, 136, 0.12), 0 20px 40px rgba(0,0,0,0.4)",
      }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-[#1E1E1E] hover:border-[#00FF88]/30 transition-colors duration-300 min-w-[300px] snap-start"
      style={{ background: "#111111" }}
    >
      {/* Screenshot */}
      <div className="relative h-44 overflow-hidden bg-[#0D1117] flex-shrink-0">
        <Image
          src={`/images/projects/${project.slug}.png`}
          alt={`Screenshot do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

        {status && (
          <div
            className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold"
            style={{
              background: `${status.color}20`,
              border: `1px solid ${status.color}50`,
              color: status.color,
              fontFamily: "var(--font-orbitron-var), sans-serif",
            }}
          >
            {status.label}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-base font-bold text-[#E8F0FE] leading-tight"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            {project.title}
          </h3>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 2, y: -2 }}
              className="text-[#00FF88]/40 group-hover:text-[#00FF88] transition-colors flex-shrink-0 mt-0.5"
              aria-label={`Ver ${project.title}`}
            >
              <ArrowUpRight size={16} />
            </motion.a>
          )}
        </div>

        <p className="text-sm text-[#9CA3AF] leading-relaxed">
          {project.description}
        </p>

        {/* Highlights toggle */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-xs text-[#00FF88]/60 hover:text-[#00FF88] transition-colors cursor-pointer"
              style={{ fontFamily: "var(--font-orbitron-var), sans-serif" }}
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={12} />
              </motion.span>
              {expanded ? "Ocultar detalhes" : "Ver detalhes"}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 flex flex-col gap-1 overflow-hidden"
                >
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-[#6B7280]"
                    >
                      <span className="text-[#00FF88]/50 mt-0.5 flex-shrink-0">
                        ▸
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#1E1E1E]">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <p
          className="text-xs text-[#00BFFF]/60"
          style={{ fontFamily: "var(--font-orbitron-var), sans-serif" }}
        >
          {project.role}
        </p>
      </div>
    </motion.div>
  );
}
