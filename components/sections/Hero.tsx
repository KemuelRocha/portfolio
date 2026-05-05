"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { NeonButton } from "@/components/ui/NeonButton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section className="blueprint-grid relative min-h-screen flex items-center overflow-hidden">
      {/* Radial glow at center-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0,255,136,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <motion.div variants={itemVariants}>
              <span
                className="text-xs tracking-widest text-[#00FF88]/60 uppercase"
                style={{ fontFamily: "var(--font-orbitron-var), sans-serif" }}
              >
                // Portfolio
              </span>
            </motion.div>

            {/* Glitch name */}
            <motion.div variants={itemVariants}>
              <GlitchText
                text="KEMUEL ROCHA"
                as="h1"
                className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-none tracking-tight text-[#E8F0FE]"
              />
            </motion.div>

            {/* Typewriter subtitle */}
            <motion.div variants={itemVariants}>
              <TypewriterText
                texts={["Tech Lead", "Fullstack Engineer", "Computer Engineer"]}
                className="text-[clamp(1rem,2.5vw,1.5rem)] text-[#9CA3AF]"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] leading-relaxed max-w-lg text-base"
            >
              Construo produtos digitais modernos, escaláveis e inteligentes —
              unindo engenharia de software, arquitetura de sistemas e IA
              aplicada.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <NeonButton href="#projects" variant="primary">
                Ver Projetos
              </NeonButton>
              <NeonButton href="#contact" variant="ghost">
                Falar Comigo
              </NeonButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-[#1E1E1E]"
            >
              {[
                { value: "5+", label: "Anos de exp." },
                { value: "20+", label: "Projetos entregues" },
                { value: "4", label: "Grandes empresas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold text-[#00FF88]"
                    style={{ fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-40 blur-xl"
                style={{
                  background: "linear-gradient(135deg, #00FF88, #00BFFF)",
                }}
              />

              {/* Photo frame */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid #00FF88",
                  boxShadow:
                    "0 0 30px rgba(0,255,136,0.35), 0 0 80px rgba(0,255,136,0.12), inset 0 0 30px rgba(0,255,136,0.05)",
                  width: "clamp(240px, 35vw, 380px)",
                  aspectRatio: "4/5",
                }}
              >
                <Image
                  src="/images/kemuel.png"
                  alt="Kemuel Rocha — Tech Lead Fullstack"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 240px, (max-width: 1200px) 35vw, 380px"
                />
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#00FF88]" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#00FF88]" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#00FF88]" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#00FF88]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] tracking-widest text-[#6B7280] uppercase"
          style={{ fontFamily: "var(--font-orbitron-var), sans-serif" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#00FF88]/50"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
