"use client";
import Image from "next/image";
import { useScrollAnimation } from "./useScrollAnimation";

const cases = [
  {
    title: "Fachadas com manifestações patológicas",
    tag: "Fachada",
    image: "/images/mapeamento-patologias-fachada.jpg",
    desc: "Mapeamento e diagnóstico de fissuras, desplacamento cerâmico e infiltrações em fachadas de edifícios residenciais e comerciais.",
  },
  {
    title: "Infiltrações e umidade",
    tag: "Infiltração",
    image: "/images/laudo-infiltracao.jpg",
    desc: "Identificação de causas de infiltrações com ensaios, termografia e análise técnica para prescrição de soluções definitivas.",
  },
  {
    title: "Desplacamento cerâmico",
    tag: "Patologia",
    image: "/images/inspecao-fachada.jpg",
    desc: "Diagnóstico de desplacamento e descolamento de revestimentos cerâmicos em fachadas, com análise de aderência e causas.",
  },
  {
    title: "Recebimento de obras",
    tag: "Recebimento",
    image: "/images/recebimento-obra.jpg",
    desc: "Vistoria técnica para recebimento de obra nova com checklist normativo, registro fotográfico e relatório de conformidade.",
  },
  {
    title: "Termografia aplicada em fachadas",
    tag: "Termografia",
    image: "/images/termografia-fachada.jpg",
    desc: "Inspeção termográfica com drone para detecção de anomalias térmicas, infiltrações e falhas construtivas ocultas.",
  },
];

export default function CaseStudies() {
  useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-crosshatch relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">Conteúdos Técnicos</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-4 tracking-tight">
                Casos técnicos e diagnósticos
              </h2>
              <p className="text-tech-gray text-lg max-w-2xl">
                Principais tipos de diagnóstico realizados pela NED em edificações por todo o Brasil.
              </p>
            </div>
            <span className="hidden md:block ref-label text-slate-300 pb-2">SEC.07</span>
          </div>
          <div className="section-line-animated mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`animate-on-scroll group cursor-pointer ${i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`relative rounded overflow-hidden transition-all duration-500 ${i === 0 ? "h-full" : ""}`}>
                <div className={`relative ${i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full min-h-[300px]" : "aspect-[16/10]"}`}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent group-hover:from-navy/95 transition-colors duration-500" />
                </div>

                {/* Technical reference */}
                <div className="absolute top-3 right-3">
                  <span className="ref-label text-white/20">CASE.{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-semibold text-white/80 mb-3 bg-white/[0.08] border border-white/[0.1] uppercase tracking-wider">
                    {c.tag}
                  </span>
                  <h3 className={`font-display font-bold text-white mb-2 tracking-tight ${i === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>
                    {c.title}
                  </h3>
                  <p className={`text-slate-300 leading-relaxed ${i === 0 ? "text-sm md:text-base" : "text-sm"}`}>
                    {c.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-primary-light text-sm font-medium">
                    <span className="hover-underline">Saiba mais</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
