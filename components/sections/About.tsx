'use client'

import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TerminalCard } from '@/components/ui/TerminalCard'

export function About() {
  return (
    <SectionWrapper
      id="about"
      label="Sobre"
      labelNumber="// 01"
      className="bg-[#050505]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
        {/* Left: bio */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#E8F0FE] leading-tight"
            style={{ fontFamily: 'var(--font-space-mono), monospace' }}
          >
            Engenheiro que pensa em{' '}
            <span className="text-[#00FF88]">produto</span>, entrega com{' '}
            <span className="text-[#00BFFF]">arquitetura</span>.
          </h2>

          <div className="flex flex-col gap-4 text-[#9CA3AF] leading-relaxed text-base">
            <p>
              Sou Tech Lead Fullstack com mais de 5 anos construindo sistemas que escalam —
              de plataformas educacionais com milhares de usuários a produtos SaaS do zero.
              Formado em Engenharia da Computação, hoje cursando pós-graduação em{' '}
              <span className="text-[#E8F0FE] font-medium">Inteligência Artificial</span>.
            </p>
            <p>
              Minha abordagem começa sempre pelo problema real. Antes de escrever a primeira
              linha de código, preciso entender o contexto, os usuários e os trade-offs.
              Depois vem a arquitetura — deciso, documentada e pensada para durar.
            </p>
            <p>
              Já liderei times técnicos no{' '}
              <span className="text-[#E8F0FE] font-medium">iFood</span>,{' '}
              <span className="text-[#E8F0FE] font-medium">Sebrae</span> e outros,
              sempre combinando visão de produto com execução técnica rigorosa. Acredito
              que a melhor tecnologia é aquela que resolve o problema certo, na velocidade
              certa, com a qualidade que o usuário merece.
            </p>
            <p>
              Uso IA de forma estratégica no meu fluxo de trabalho — para acelerar análise,
              documentação e desenvolvimento, sem abrir mão de{' '}
              <span className="text-[#00FF88] font-medium">engenharia sólida</span>.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: '⚡', label: 'Tech Lead & Arquitetura' },
              { icon: '🤖', label: 'IA Aplicada a Produtos' },
              { icon: '🌐', label: 'Fullstack (Front + Back)' },
              { icon: '🚀', label: 'Deploy, Cloud & Infra' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-[#9CA3AF]"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal card */}
        <div className="lg:col-span-2">
          <TerminalCard title="kemuel.config.ts">
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-[#6B7280]">{'// ficha técnica'}</p>
              <p>
                <span className="text-[#A78BFA]">const</span>{' '}
                <span className="text-[#00BFFF]">dev</span>{' '}
                <span className="text-[#E8F0FE]">= {'{'}</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">role</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">&quot;Tech Lead Fullstack&quot;</span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">experience</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">&quot;5+ years&quot;</span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">location</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">&quot;Brasil 🇧🇷&quot;</span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">focus</span>
                <span className="text-[#E8F0FE]">: [</span>
              </p>
              {['Architecture', 'AI Integration', 'Product'].map((f) => (
                <p key={f} className="pl-8">
                  <span className="text-[#FCA5A5]">&quot;{f}&quot;</span>
                  <span className="text-[#E8F0FE]">,</span>
                </p>
              ))}
              <p className="pl-4">
                <span className="text-[#E8F0FE]">],</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">currentlyLearning</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">&quot;Postgraduate in AI&quot;</span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">openTo</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">&quot;new challenges&quot;</span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p>
                <span className="text-[#E8F0FE]">{'}'}</span>
              </p>
            </div>
          </TerminalCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
