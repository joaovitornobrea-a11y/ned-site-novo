"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Briefing técnico",
    desc: "Levantamento de informações, objetivo do serviço, tipo de edificação e documentos disponíveis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
    ),
  },
  {
    num: "02",
    title: "Análise documental",
    desc: "Estudo de projetos, memoriais descritivos, histórico de manutenção e manifestações relatadas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    ),
  },
  {
    num: "03",
    title: "Inspeção em campo",
    desc: "Visita técnica com inspeção visual, ensaios não destrutivos e registro fotográfico detalhado.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    ),
  },
  {
    num: "04",
    title: "Registro fotográfico e termográfico",
    desc: "Captura com drone, câmera termográfica e registro numerado de cada manifestação patológica.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
    ),
  },
  {
    num: "05",
    title: "Diagnóstico técnico",
    desc: "Análise técnica com identificação de causas, grau de risco, prioridades e fundamentação normativa.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.55 7.405c-.166.486-.635.81-1.146.81h-8.208c-.511 0-.98-.324-1.146-.81L4.2 14.5m15.6 0H4.2" /></svg>
    ),
  },
  {
    num: "06",
    title: "Relatório e prescrição corretiva",
    desc: "Entrega de relatório completo com diagnóstico, prioridades de intervenção e prescrição corretiva.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
    ),
  },
];

export default function Method() {
  useScrollAnimation();

  return (
    <section id="metodo" className="py-20 md:py-28 bg-blueprint relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 md:mb-20 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">Método NED</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-4 tracking-tight">
                Processo técnico estruturado
              </h2>
              <p className="text-tech-gray text-lg max-w-2xl">
                Da análise inicial à entrega do relatório, cada etapa segue rigor técnico e normativo.
              </p>
            </div>
            <span className="hidden md:block ref-label text-slate-300 pb-2">SEC.03</span>
          </div>
          <div className="section-line-animated mt-6" />
        </div>

        {/* Steps grid */}
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="card-technical tech-corners relative bg-white p-6 h-full cursor-pointer hover:bg-[#FAFBFC] transition-colors duration-300">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="ref-label text-slate-200 group-hover:text-primary/30 transition-colors duration-500 select-none text-2xl font-display font-bold">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-tech-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
