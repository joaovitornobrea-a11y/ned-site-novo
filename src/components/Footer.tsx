"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Inspeção Predial", slug: "inspecao-predial" },
  { label: "Laudo de Fachada", slug: "laudo-tecnico-de-fachada" },
  { label: "Drone Termográfico", slug: "drone-termografico-fachada" },
  { label: "Recebimento de Obras", slug: "recebimento-de-obras" },
  { label: "Fiscalização de Obras", slug: "fiscalizacao-de-obras-alto-padrao" },
  { label: "Laudo de Infiltração", slug: "laudo-de-infiltracao" },
  { label: "Laudo de Garantia", slug: "laudo-de-garantia-de-imovel" },
];

const WHATSAPP_URL =
  "https://wa.me/5585987994603?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico.";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-near-black text-white">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-36 h-12 mb-4">
              <Image src="/images/logo-ned.png" alt="NED - Nobre Engenharia Diagnóstica" fill className="object-contain object-left brightness-0 invert" />
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-4">
              Engenharia Diagnóstica especializada em laudos técnicos, inspeção predial, fachadas
              e diagnóstico de edificações com responsabilidade técnica e base normativa.
            </p>
            <div className="flex items-center gap-2 text-primary-light text-[13px] font-medium">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              Atendimento em todo o Brasil
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Serviços</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-slate-400 text-sm hover:text-primary-light transition-colors cursor-pointer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Método NED", href: "#metodo" },
                { label: "Tecnologia", href: "#tecnologia" },
                { label: "Qualidade Técnica", href: "#qualidade" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 text-sm hover:text-primary-light transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 text-sm hover:text-green-400 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  (85) 98799-4603
                </a>
              </li>
              <li>
                <a href="mailto:nedcomerciall@gmail.com" className="flex items-center gap-3 text-slate-400 text-sm hover:text-primary-light transition-colors cursor-pointer">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  nedcomerciall@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-slate-500">CREA CE 48771</p>
              <p className="text-xs text-slate-500">CNPJ 34.163.893/0001-08</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-slate-600 text-[11px]">
            &copy; {new Date().getFullYear()} Nobre Engenharia Diagnóstica. Todos os direitos reservados.
          </p>
          <p className="ref-label text-slate-700">
            Engenharia Diagnóstica com responsabilidade técnica
          </p>
        </div>
      </div>
    </footer>
  );
}
