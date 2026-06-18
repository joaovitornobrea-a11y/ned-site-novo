"use client";
import { useScrollAnimation } from "./useScrollAnimation";

const clients = [
  {
    title: "Síndicos",
    desc: "Laudos técnicos para assembleias, manutenção preventiva e tomada de decisão fundamentada.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  },
  {
    title: "Condomínios",
    desc: "Inspeção predial, fachadas, áreas comuns e plano de manutenção conforme ABNT.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>,
  },
  {
    title: "Hotéis",
    desc: "Diagnóstico de fachadas, infiltrações e manutenção preditiva para operações hoteleiras.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" /></svg>,
  },
  {
    title: "Edifícios comerciais",
    desc: "Inspeção e laudos para gestão predial, cumprimento normativo e valorização do patrimônio.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  },
  {
    title: "Construtoras",
    desc: "Laudos de garantia, recebimento de obras e fiscalização técnica com respaldo normativo.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a1.5 1.5 0 01-2.12 0l-.88-.88a1.5 1.5 0 010-2.12l5.1-5.1m5.58-5.58l5.1-5.1a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1M11.42 15.17l5.58-5.58" /></svg>,
  },
  {
    title: "Incorporadoras",
    desc: "Acompanhamento técnico, vistoria de entrega e documentação para mitigação de riscos.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75" /></svg>,
  },
  {
    title: "Proprietários",
    desc: "Laudos para imóveis de alto padrão, acionamento de garantia e valorização patrimonial.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>,
  },
  {
    title: "Gestores de manutenção",
    desc: "Diagnóstico técnico para planejamento de manutenção, priorização e controle de custos.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

export default function Clients() {
  useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-topo relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl ml-auto text-right mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4 justify-end">
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">Nossos Clientes</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-4 tracking-tight">
            Para quem atendemos
          </h2>
          <p className="text-tech-gray text-lg">
            Síndicos, condomínios, construtoras, incorporadoras e proprietários em todo o Brasil.
          </p>
          <div className="w-12 h-px bg-primary ml-auto mt-6" />
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <div
              key={c.title}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="card-technical relative bg-white p-5 h-full cursor-pointer overflow-hidden hover:bg-[#FAFBFC] transition-colors duration-300">
                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="[&>svg]:w-5 [&>svg]:h-5">{c.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-[15px] group-hover:text-primary transition-colors duration-300">{c.title}</h3>
                </div>
                <p className="text-tech-gray text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
