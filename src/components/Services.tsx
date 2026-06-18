"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Inspeção Predial",
    slug: "inspecao-predial",
    image: "/images/inspecao-fachada.jpg",
    description:
      "Análise técnica completa de edificações conforme NBR 16747, com diagnóstico de manifestações patológicas e plano de manutenção.",
  },
  {
    title: "Laudo Técnico de Fachada",
    slug: "laudo-tecnico-de-fachada",
    image: "/images/fachada-drone-termografico.jpg",
    description:
      "Avaliação detalhada de fachadas com registro fotográfico, mapeamento de patologias e prescrição corretiva.",
  },
  {
    title: "Inspeção com Drone Termográfico",
    slug: "drone-termografico-fachada",
    image: "/images/termografia-fachada.jpg",
    description:
      "Inspeção de fachadas com drone e câmera termográfica para identificação de infiltrações, desplacamentos e falhas ocultas.",
  },
  {
    title: "Recebimento de Obras",
    slug: "recebimento-de-obras",
    image: "/images/recebimento-obra.jpg",
    description:
      "Verificação técnica para recebimento de obras novas, garantindo conformidade com projeto, normas e padrões de qualidade.",
  },
  {
    title: "Fiscalização de Obras",
    slug: "fiscalizacao-de-obras-alto-padrao",
    image: "/images/fiscalizacao-obra-alto-padrao.jpg",
    description:
      "Acompanhamento técnico de obras de alto padrão com controle de qualidade, cronograma e conformidade normativa.",
  },
  {
    title: "Laudo de Infiltração",
    slug: "laudo-de-infiltracao",
    image: "/images/laudo-infiltracao.jpg",
    description:
      "Diagnóstico técnico de infiltrações com identificação de causas, ensaios e prescrição de soluções corretivas.",
  },
  {
    title: "Laudo de Garantia",
    slug: "laudo-de-garantia-de-imovel",
    image: "/images/relatorio-tecnico-ned.jpg",
    description:
      "Laudo técnico para acionamento de garantia construtora, com fundamentação normativa e registro detalhado.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="w-full py-20 md:py-28 bg-tech-grid"
    >
      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .service-card .service-image {
          transition: transform 0.6s ease;
        }
        .service-card:hover .service-image {
          transform: scale(1.04);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.25em]">
              Serviços
            </span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy tracking-tight">
              Soluções em Engenharia<br className="hidden md:block" /> Diagnóstica
            </h2>
            <span className="hidden md:block ref-label text-slate-300 pb-2">SEC.02</span>
          </div>
          <div className="section-line-animated mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              href={`/${service.slug}`}
              key={service.title}
              className={`service-card group cursor-pointer overflow-hidden transition-all duration-300 card-technical tech-corners ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
              style={{
                transitionDelay: `${index * 0.06}s`,
              }}
            >
              {/* Image Container */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: index === 0 ? "2 / 1" : "3 / 2" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image object-cover"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="ref-label text-white/25">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 md:p-6">
                <p className="text-sm leading-relaxed mb-4 text-tech-gray">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary transition-all duration-200">
                  Ver serviço
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1 inline-block">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
