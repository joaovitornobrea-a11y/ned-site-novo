"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const techItems = [
  { title: "Imagem real da fachada", desc: "Registro fotográfico de alta resolução com identificação e numeração de manifestações patológicas." },
  { title: "Termografia infravermelha", desc: "Câmera termográfica acoplada a drone para detecção de infiltrações e anomalias ocultas." },
  { title: "Mapeamento de patologias", desc: "Mapeamento gráfico preciso de todas as manifestações patológicas identificadas na edificação." },
  { title: "Relatório técnico", desc: "Documento completo com diagnóstico, fundamentação normativa e prescrição corretiva detalhada." },
];

export default function Technology() {
  useScrollAnimation();

  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-navy text-white overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-light" />
            <span className="text-primary-light text-[11px] font-semibold uppercase tracking-[0.25em]">Tecnologia</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 tracking-tight">
                Drone, termografia e mapeamento{" "}
                <span className="text-accent-blue">técnico</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Tecnologia avançada para capturar dados que o olho humano não alcança, garantindo diagnósticos fundamentados.
              </p>
            </div>
            <span className="hidden md:block ref-label text-white/15 pb-2">SEC.04</span>
          </div>
          <div className="w-12 h-px bg-primary-light/30 mt-6" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images showcase */}
          <div className="relative animate-on-scroll-left">
            <div className="relative rounded overflow-hidden aspect-[4/3] shadow-2xl tech-corners">
              <Image
                src="/images/termografia-fachada.jpg"
                alt="Termografia de fachada com drone"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="ref-label text-white/30">IMG.01</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Análise termográfica em tempo real</span>
                </div>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-40 md:w-52 rounded overflow-hidden shadow-2xl border-2 border-navy-light animate-on-scroll">
              <div className="relative aspect-square">
                <Image
                  src="/images/mapeamento-patologias-fachada.jpg"
                  alt="Mapeamento de patologias em fachada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-navy-light px-3 py-2 text-center">
                <span className="text-[10px] font-medium text-primary-light uppercase tracking-wider">Mapeamento técnico</span>
              </div>
            </div>
          </div>

          {/* Right - Tech items */}
          <div className="space-y-6">
            {techItems.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll-right flex gap-4 p-5 rounded card-technical-dark bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 cursor-pointer group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <span className="text-primary-light font-display font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary-light transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="animate-on-scroll pt-4">
              <a
                href="https://wa.me/5585987994603?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20tecnologia%20de%20inspe%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                Solicitar inspeção com drone
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
