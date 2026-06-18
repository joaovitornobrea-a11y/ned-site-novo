export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://nobreengenhariadiagnostica.com.br/#organization",
        name: "Nobre Engenharia Diagnóstica",
        alternateName: "NED",
        url: "https://nobreengenhariadiagnostica.com.br",
        telephone: "+5585987994603",
        email: "nedcomerciall@gmail.com",
        description:
          "Engenharia Diagnóstica especializada em laudos técnicos, inspeção predial, fachadas com drone termográfico, infiltrações, recebimento e fiscalização de obras em todo o Brasil.",
        image: "https://nobreengenhariadiagnostica.com.br/images/logo-ned.png",
        logo: "https://nobreengenhariadiagnostica.com.br/images/logo-ned.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fortaleza",
          addressRegion: "CE",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -3.7172,
          longitude: -38.5433,
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        knowsAbout: [
          "Engenharia Diagnóstica",
          "Inspeção Predial",
          "Laudo Técnico de Fachada",
          "Drone Termográfico",
          "Termografia Infravermelha",
          "Mapeamento de Patologias",
          "Infiltrações em Edificações",
          "Recebimento de Obras",
          "Fiscalização de Obras",
          "ABNT NBR 16747",
          "ABNT NBR 15575",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Registration",
            recognizedBy: {
              "@type": "Organization",
              name: "CREA-CE",
            },
            identifier: "CREA CE 48771",
          },
        ],
        taxID: "34.163.893/0001-08",
        employee: {
          "@type": "Person",
          name: "Emanuele Nobre",
          jobTitle: "Engenheira Civil — Responsável Técnica",
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Registration",
            identifier: "CREA CE 48771",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Engenharia Diagnóstica",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Inspeção Predial",
                url: "https://nobreengenhariadiagnostica.com.br/inspecao-predial",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Laudo Técnico de Fachada",
                url: "https://nobreengenhariadiagnostica.com.br/laudo-tecnico-de-fachada",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Inspeção de Fachada com Drone Termográfico",
                url: "https://nobreengenhariadiagnostica.com.br/drone-termografico-fachada",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Recebimento de Obras",
                url: "https://nobreengenhariadiagnostica.com.br/recebimento-de-obras",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fiscalização de Obras de Alto Padrão",
                url: "https://nobreengenhariadiagnostica.com.br/fiscalizacao-de-obras-alto-padrao",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Laudo de Infiltração",
                url: "https://nobreengenhariadiagnostica.com.br/laudo-de-infiltracao",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Laudo de Garantia de Imóvel",
                url: "https://nobreengenhariadiagnostica.com.br/laudo-de-garantia-de-imovel",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://nobreengenhariadiagnostica.com.br/#website",
        url: "https://nobreengenhariadiagnostica.com.br",
        name: "NED - Nobre Engenharia Diagnóstica",
        publisher: {
          "@id": "https://nobreengenhariadiagnostica.com.br/#organization",
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
