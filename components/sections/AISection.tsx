'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Zap, MessageSquare, FileText, Shield, Cpu } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Pós-grad. em Inteligência Artificial',
    description:
      'Formação acadêmica em IA com foco em aplicações práticas, arquiteturas de modelos e uso estratégico em produtos reais.',
  },
  {
    icon: Cpu,
    title: 'Desenvolvimento Assistido por IA',
    description:
      'Uso fluente de LLMs para acelerar análise de código, refatoração, testes e revisão técnica — sem sacrificar qualidade arquitetural.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots & Automações',
    description:
      'Criação de assistentes conversacionais e automações inteligentes integradas a sistemas reais, com fallbacks robustos e lógica de negócio sólida.',
  },
  {
    icon: FileText,
    title: 'Documentação Técnica com IA',
    description:
      'Geração e manutenção de documentação técnica de alta qualidade com apoio de IA — ADRs, runbooks, onboarding e wikis.',
  },
  {
    icon: Zap,
    title: 'Prompt Engineering',
    description:
      'Engenharia de prompts para extrair máxima utilidade dos modelos — chain-of-thought, few-shot, RAG e técnicas de otimização.',
  },
  {
    icon: Shield,
    title: 'IA com Responsabilidade',
    description:
      'Visão crítica sobre uso seguro de IA: validação de outputs, privacidade de dados, limites dos modelos e IA como ferramenta — não como solução mágica.',
  },
]

function NeuralNetwork() {
  return (
    <svg
      viewBox="0 0 280 200"
      className="w-full max-w-sm opacity-60"
      aria-hidden="true"
    >
      {/* Layer 1 nodes */}
      {[40, 80, 120, 160].map((y, i) => (
        <motion.circle
          key={`l1-${i}`}
          cx={40} cy={y} r={6}
          fill="none"
          stroke="#00FF88"
          strokeWidth={1.5}
          animate={{ opacity: [0.4, 1, 0.4], r: [5, 7, 5] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* Layer 2 nodes */}
      {[55, 95, 135].map((y, i) => (
        <motion.circle
          key={`l2-${i}`}
          cx={130} cy={y} r={6}
          fill="none"
          stroke="#00BFFF"
          strokeWidth={1.5}
          animate={{ opacity: [0.4, 1, 0.4], r: [5, 7, 5] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: 0.5 + i * 0.2 }}
        />
      ))}
      {/* Layer 3 nodes */}
      {[70, 110].map((y, i) => (
        <motion.circle
          key={`l3-${i}`}
          cx={220} cy={y} r={6}
          fill="none"
          stroke="#A78BFA"
          strokeWidth={1.5}
          animate={{ opacity: [0.4, 1, 0.4], r: [5, 7, 5] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: 1 + i * 0.2 }}
        />
      ))}

      {/* Connections l1 → l2 */}
      {[40, 80, 120, 160].flatMap((y1, i) =>
        [55, 95, 135].map((y2, j) => (
          <motion.line
            key={`c12-${i}-${j}`}
            x1={46} y1={y1} x2={124} y2={y2}
            stroke="#00FF88"
            strokeWidth={0.5}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: (i + j) * 0.15 }}
          />
        ))
      )}

      {/* Connections l2 → l3 */}
      {[55, 95, 135].flatMap((y1, i) =>
        [70, 110].map((y2, j) => (
          <motion.line
            key={`c23-${i}-${j}`}
            x1={136} y1={y1} x2={214} y2={y2}
            stroke="#00BFFF"
            strokeWidth={0.5}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 + (i + j) * 0.15 }}
          />
        ))
      )}
    </svg>
  )
}

export function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="ai"
      className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #050505 0%, #001A0D 40%, #001520 70%, #050505 100%)',
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,136,0.06) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span
            className="text-xs text-[#00FF88]/50"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            {'// 04'}
          </span>
          <span
            className="text-xs tracking-widest uppercase text-[#00FF88]/70"
            style={{ fontFamily: 'var(--font-orbitron-var), sans-serif' }}
          >
            IA & Inovação
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00FF88]/30 to-transparent" />
        </motion.div>

        {/* Top: title + neural net */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-xs font-semibold"
              style={{
                background: 'rgba(0,255,136,0.1)',
                border: '1px solid rgba(0,255,136,0.3)',
                color: '#00FF88',
                fontFamily: 'var(--font-orbitron-var), sans-serif',
                boxShadow: '0 0 12px rgba(0,255,136,0.2)',
              }}
            >
              Pós-graduação em IA
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-[#E8F0FE] leading-tight"
              style={{ fontFamily: 'var(--font-space-mono), monospace' }}
            >
              Inteligência artificial como{' '}
              <span className="text-[#00FF88]">vantagem estratégica</span>.
            </h2>

            <p className="text-[#9CA3AF] leading-relaxed">
              Não uso IA para substituir o raciocínio — uso para amplificá-lo. Há uma
              diferença enorme entre um desenvolvedor que usa IA como autocomplete e um
              engenheiro que integra IA como parte consciente da arquitetura.
            </p>

            {/* Quote */}
            <blockquote
              className="border-l-2 border-[#00FF88] pl-4 italic text-[#E8F0FE] text-lg font-medium"
              style={{ fontFamily: 'var(--font-space-mono), monospace' }}
            >
              &ldquo;IA não substitui engenheiros — amplifica os que sabem usá-la.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <NeuralNetwork />
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 0 20px rgba(0,255,136,0.1)',
                  borderColor: 'rgba(0,255,136,0.3)',
                }}
                className="p-5 rounded-xl border border-[#1E1E1E] transition-colors duration-300"
                style={{ background: 'rgba(17,17,17,0.7)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(0,255,136,0.1)',
                    border: '1px solid rgba(0,255,136,0.2)',
                  }}
                >
                  <Icon size={18} className="text-[#00FF88]" />
                </div>
                <h3
                  className="text-sm font-bold text-[#E8F0FE] mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-space-mono), monospace' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
