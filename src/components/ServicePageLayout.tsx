"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { useScrollAnimation } from "./useScrollAnimation";
import type { Service } from "@/data/services";

const WHATSAPP_URL =
  "https://wa.me/5585987994603?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico.";

interface Props {
  service: Service;
  relatedServices: Service[];
}

export default function ServicePageLayout({ service, relatedServices }: Props) {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#1E40AF]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#servicos" className="hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">{service.title}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mb-6">
              {service.h1}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8">
              {service.shortDescription}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold rounded-lg transition-colors shadow-lg shadow-[#1E40AF]/25"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {service.ctaText}
            </a>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E40AF] mb-3">
                O PROBLEMA
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
                Por que este serviço é necessário?
              </h2>
              <p className="text-[#475569] leading-relaxed text-lg">
                {service.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="py-16 md:py-24 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E40AF] mb-3">
                COMO FAZEMOS
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
                Método técnico NED
              </h2>
              <p className="text-[#475569] leading-relaxed text-lg">
                {service.method}
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E40AF] mb-3 animate-on-scroll">
                ENTREGÁVEIS
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 animate-on-scroll">
                O que você recebe
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 animate-on-scroll"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1E40AF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[#334155] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-16 md:py-24 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#60A5FA] mb-3 animate-on-scroll">
                DIFERENCIAIS NED
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 animate-on-scroll">
                Por que escolher a NED
              </h2>
              <div className="space-y-6">
                {service.differentials.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 animate-on-scroll"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center text-sm font-bold text-[#60A5FA]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#3B82F6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {service.ctaText}
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Envie fotos, localização, tipo de imóvel e objetivo do serviço. A equipe
              técnica avalia o escopo e indica a melhor abordagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1E40AF] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-xl"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:nedcomerciall@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Enviar e-mail
              </a>
            </div>
            <p className="text-blue-200/60 text-sm mt-6">
              Resposta em até 24 horas úteis
            </p>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E40AF] mb-3 text-center animate-on-scroll">
                SERVIÇOS RELACIONADOS
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-10 text-center animate-on-scroll">
                Outros serviços que podem complementar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${related.slug}`}
                    className="group block rounded-xl overflow-hidden border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-on-scroll"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[#64748B] text-sm leading-relaxed mb-3">
                        {related.shortDescription}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-[#1E40AF]">
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
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
