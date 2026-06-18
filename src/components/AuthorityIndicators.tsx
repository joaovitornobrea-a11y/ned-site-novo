"use client";

import { useEffect, useRef } from "react";

const indicators = [
  {
    num: "01",
    title: "Laudos Técnicos",
    description: "Documentação com validade legal e ART",
  },
  {
    num: "02",
    title: "Drone Termográfico",
    description: "Câmera térmica de alta resolução",
  },
  {
    num: "03",
    title: "Base Normativa ABNT",
    description: "Fundamentação em normas técnicas",
  },
  {
    num: "04",
    title: "Responsabilidade Técnica",
    description: "Registro CREA CE 48771",
  },
  {
    num: "05",
    title: "Atendimento Nacional",
    description: "Cobertura em todo o Brasil",
  },
];

export default function AuthorityIndicators() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".authority-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-0 border-b border-gray-border/40 ruler-top"
      style={{ backgroundColor: "#FAFBFC" }}
    >
      <style>{`
        .authority-item {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .animate-on-scroll-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .authority-item:nth-child(2) { transition-delay: 0.06s; }
        .authority-item:nth-child(3) { transition-delay: 0.12s; }
        .authority-item:nth-child(4) { transition-delay: 0.18s; }
        .authority-item:nth-child(5) { transition-delay: 0.24s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {indicators.map((item, index) => (
            <div
              key={item.title}
              className="authority-item relative py-8 lg:py-10 lg:px-6"
            >
              {/* Vertical divider */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-px bg-gray-border/60" />
              )}

              <span className="ref-label block mb-3">{item.num}</span>

              <h3 className="font-semibold text-sm text-navy mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-tech-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
