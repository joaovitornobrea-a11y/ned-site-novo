"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const qualities = [
  {
    title: "Diagnóstico com evidência",
    desc: "Cada conclusão é sustentada por registros fotográficos, ensaios e análise técnica fundamentada.",
    accent: "#1E40AF",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    ),
  },
  {
    title: "Relatório fotográfico",
    desc: "Imagens numeradas, legendadas e organizadas com clareza para facilitar a compreensão do diagnóstico.",
    accent: "#3B82F6",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M2.25 18.75h19.5V5.25H2.25v13.5zm4.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
    ),
  },
  {
    title: "Base normativa",
    desc: "Laudos fundamentados nas normas ABNT aplicáveis: NBR 16747, NBR 15575, NBR 13755 e outras.",
    accent: "#1E3A8A",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
    ),
  },
  {
    title: "Prescrição corretiva",
    desc: "Além do diagnóstico, entregamos prescrição técnica com soluções e prioridades de intervenção.",
    accent: "#60A5FA",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a1.5 1.5 0 01-2.12-2.12l5.1-5.1m5.64-5.64L16.93 5.42a1.5 1.5 0 012.12 2.12l-2.01 2.01M11.42 15.17L16.93 9.66" /></svg>
    ),
  },
  {
    title: "Clareza para decisão",
    desc: "Relatórios objetivos que permitem ao gestor ou síndico tomar decisões com segurança e respaldo técnico.",
    accent: "#1E40AF",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
    ),
  },
];

export default function Quality() {
  useScrollAnimation();

  return (
    <section id="qualidade" className="py-20 md:py-28 bg-tech-grid relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">Qualidade Técnica</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-4 tracking-tight">
                A Qualidade Técnica NED
              </h2>
              <p className="text-tech-gray text-lg">
                Cada laudo é construído com rigor, clareza e responsabilidade técnica para garantir diagnósticos confiáveis.
              </p>
            </div>
          </div>
          <div className="section-line-animated mt-6" />
        </div>

        {/* Quality cards — structured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualities.map((q, i) => (
            <div
              key={q.title}
              className={`animate-on-scroll group ${i === 0 ? "md:col-span-2" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`card-technical tech-corners relative cursor-pointer overflow-hidden ${
                  i === 0
                    ? "p-7 md:p-8 md:flex md:items-center md:gap-8"
                    : "p-6"
                }`}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: q.accent }}
                />

                <div className={`${i === 0 ? "md:flex-shrink-0" : ""}`}>
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{
                      backgroundColor: `${q.accent}10`,
                      color: q.accent,
                    }}
                  >
                    {q.icon}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-navy mb-2 group-hover:text-primary transition-colors duration-300">
                    {q.title}
                  </h3>
                  <p className="text-tech-gray text-sm leading-relaxed">{q.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
