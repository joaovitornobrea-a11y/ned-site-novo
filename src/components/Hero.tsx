"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fachada-drone-termografico.jpg"
          alt="Inspeção de fachada com drone termográfico"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/96 via-[#0F172A]/92 to-[#1E3A8A]/75" />
        {/* Technical grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Coordinate markers */}
      <div className="absolute top-28 left-6 z-10 hidden lg:flex flex-col items-center gap-1 animate-[fadeUp_0.8s_ease-out_0.8s_both]">
        <span className="ref-label text-white/20 -rotate-90 origin-center whitespace-nowrap">NED — 2026</span>
      </div>
      <div className="absolute top-28 right-6 z-10 hidden lg:block animate-[fadeUp_0.8s_ease-out_0.9s_both]">
        <span className="ref-label text-white/20">SEC.01</span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-[fadeUp_0.8s_ease-out_both]">
            {/* Technical label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-[11px] font-semibold uppercase tracking-[0.25em]">
                Engenharia Diagnóstica
              </span>
            </div>

            {/* Main title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Laudos Técnicos,{" "}
              <span className="text-[#60A5FA]">Inspeção Predial</span> e
              Fachadas com Drone Termográfico
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Engenharia Diagnóstica com evidência, tecnologia e
              responsabilidade técnica. Atuação em todo o Brasil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5585987994603?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold rounded transition-all duration-200 shadow-lg shadow-[#1E40AF]/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar orçamento técnico
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white font-semibold rounded transition-all duration-200 hover:bg-white/5"
              >
                Ver serviços
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Authority indicators inline */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap gap-x-8 gap-y-3">
              {["CREA CE 48771", "Base normativa ABNT", "Atendimento nacional"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-1.5 h-px bg-[#3B82F6]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — Technical data blocks */}
          <div className="relative flex flex-col gap-3 lg:pl-8 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            {/* Reference label */}
            <div className="hidden lg:flex items-center gap-2 mb-1">
              <span className="ref-label text-white/25">REF.A</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* Card 1 - Drone + Termografia */}
            <div className="card-technical-dark tech-corners bg-white/[0.04] p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-[#1E40AF]/15 border border-[#1E40AF]/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M5 7l1.5 1.5" />
                    <path d="M17.5 8.5L19 7" />
                    <path d="M6.5 16.5L5 18" />
                    <path d="M19 18l-1.5-1.5" />
                    <rect x="2" y="3" width="4" height="4" rx="1" />
                    <rect x="18" y="3" width="4" height="4" rx="1" />
                    <rect x="2" y="17" width="4" height="4" rx="1" />
                    <rect x="18" y="17" width="4" height="4" rx="1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Drone + Termografia</h3>
                  <p className="text-slate-500 text-sm">Mapeamento térmico de fachadas</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent" />
            </div>

            {/* Card 2 - Laudos Tecnicos */}
            <div className="card-technical-dark tech-corners bg-white/[0.04] p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">Laudos Técnicos</h3>
              </div>
              <ul className="space-y-2.5 pl-1">
                {[
                  "Base normativa ABNT",
                  "Prescrição corretiva",
                  "Responsabilidade técnica",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 - Modular data block */}
            <div className="grid grid-cols-2 gap-3">
              <div className="card-technical-dark bg-white/[0.04] p-5 text-center">
                <span className="block text-2xl font-display font-bold text-white mb-1">7</span>
                <span className="text-slate-500 text-[10px] uppercase tracking-[0.15em]">Serviços técnicos</span>
              </div>
              <div className="card-technical-dark bg-white/[0.04] p-5 text-center">
                <span className="block text-2xl font-display font-bold text-white mb-1">BR</span>
                <span className="text-slate-500 text-[10px] uppercase tracking-[0.15em]">Todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-[fadeUp_0.8s_ease-out_0.6s_both]">
        <span className="ref-label text-white/25 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500/50 to-transparent" />
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
