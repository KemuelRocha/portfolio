'use client'

import { motion } from 'framer-motion'

interface TechBadgeProps {
  label: string
  color?: string
}

export function TechBadge({ label, color = '#00FF88' }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium cursor-default select-none transition-colors"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}30`,
        color: color,
        fontFamily: 'var(--font-space-mono), monospace',
      }}
    >
      {label}
    </motion.span>
  )
}
