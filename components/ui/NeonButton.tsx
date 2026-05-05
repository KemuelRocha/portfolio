'use client'

import { motion } from 'framer-motion'

interface NeonButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export function NeonButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  target,
  rel,
}: NeonButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer select-none'

  const styles =
    variant === 'primary'
      ? {
          background: '#00FF88',
          color: '#0A0A0A',
          border: '1px solid #00FF88',
        }
      : {
          background: 'transparent',
          color: '#00FF88',
          border: '1px solid #00FF88',
        }

  const hoverProps =
    variant === 'primary'
      ? {
          scale: 1.04,
          y: -2,
          boxShadow: '0 0 25px rgba(0, 255, 136, 0.5), 0 0 50px rgba(0, 255, 136, 0.2)',
        }
      : {
          scale: 1.04,
          y: -2,
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
          background: 'rgba(0, 255, 136, 0.08)',
        }

  const content = (
    <motion.span
      className={`${base} ${className}`}
      style={{ ...styles, fontFamily: 'var(--font-space-mono), monospace' }}
      whileHover={hoverProps}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  )
}
