"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TerminalCard } from "@/components/ui/TerminalCard";

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
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            Engenheiro que pensa em{" "}
            <span className="text-[#00FF88]">produto</span>, entrega com{" "}
            <span className="text-[#00BFFF]">arquitetura</span>.
          </h2>

          <div className="flex flex-col gap-4 text-[#9CA3AF] leading-relaxed text-base">
            <p>
              Sou{" "}
              <span className="text-[#E8F0FE] font-medium">
                Engenheiro de Computação
              </span>{" "}
              e <span className="text-[#E8F0FE] font-medium">Tech Lead</span>{" "}
              com foco em resultados reais. Na{" "}
              <span className="text-[#00FF88] font-medium">
                Weef Interativa
              </span>
              , lidero o desenvolvimento de produtos digitais para empresas como{" "}
              <span className="text-[#E8F0FE] font-medium">
                iFood, Agibank, Sebrae, Alfa Tennant
              </span>{" "}
              e <span className="text-[#E8F0FE] font-medium">JA Rezende</span> —
              da arquitetura à entrega, em ambientes ágeis e times
              multidisciplinares. Também atuo em dashboards para a{" "}
              <span className="text-[#E8F0FE] font-medium">Alfa Tennant</span> e
              em plataforma de negociação de dívidas, além do site
              institucional, para a{" "}
              <span className="text-[#E8F0FE] font-medium">JA Rezende</span>.
            </p>
            <p>
              Trabalho com{" "}
              <span className="text-[#00BFFF] font-medium">
                React, Next.js, Angular, TypeScript, Laravel, Python e Django
              </span>
              . Também atuo com IA aplicada — usando{" "}
              <span className="text-[#00FF88] font-medium">
                LangChain, LangGraph, OpenAI e Claude AI
              </span>{" "}
              para construir agentes e automações inteligentes em produtos
              reais.
            </p>
            <p>
              Formado em{" "}
              <span className="text-[#E8F0FE] font-medium">
                Engenharia da Computação pela UNIVASF
              </span>
              , com base técnica pelo IF Sertão-PE. Acredito que boa tecnologia
              nasce da união entre estratégia clara, colaboração genuína e
              execução consistente.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: "⚡", label: "Tech Lead & Arquitetura" },
              { icon: "🤖", label: "Agentes & IA Aplicada" },
              { icon: "🌐", label: "Fullstack (Front + Back)" },
              { icon: "🚀", label: "Deploy, Cloud & Infra" },
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
              <p className="text-[#6B7280]">{"// ficha técnica"}</p>
              <p>
                <span className="text-[#A78BFA]">const</span>{" "}
                <span className="text-[#00BFFF]">dev</span>{" "}
                <span className="text-[#E8F0FE]">= {"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">role</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">
                  &quot;Tech Lead Fullstack&quot;
                </span>
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
                <span className="text-[#00FF88]">company</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">
                  &quot;Weef Interativa&quot;
                </span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">education</span>
                <span className="text-[#E8F0FE]">: </span>
                <span className="text-[#FCA5A5]">
                  &quot;Eng. Computação — UNIVASF&quot;
                </span>
                <span className="text-[#E8F0FE]">,</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">focus</span>
                <span className="text-[#E8F0FE]">: [</span>
              </p>
              {["Architecture", "AI Agents", "Product"].map((f) => (
                <p key={f} className="pl-8">
                  <span className="text-[#FCA5A5]">&quot;{f}&quot;</span>
                  <span className="text-[#E8F0FE]">,</span>
                </p>
              ))}
              <p className="pl-4">
                <span className="text-[#E8F0FE]">],</span>
              </p>
              <p className="pl-4">
                <span className="text-[#00FF88]">aiStack</span>
                <span className="text-[#E8F0FE]">: [</span>
              </p>
              {["LangChain", "LangGraph", "OpenAI", "Claude AI"].map((f) => (
                <p key={f} className="pl-8">
                  <span className="text-[#FCA5A5]">&quot;{f}&quot;</span>
                  <span className="text-[#E8F0FE]">,</span>
                </p>
              ))}
              <p className="pl-4">
                <span className="text-[#E8F0FE]">],</span>
              </p>
              <p>
                <span className="text-[#E8F0FE]">{"}"}</span>
              </p>
            </div>
          </TerminalCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
