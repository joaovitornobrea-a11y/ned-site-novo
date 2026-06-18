import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import ServicePageLayout from "@/components/ServicePageLayout";

const BASE_URL = "https://nobreengenhariadiagnostica.com.br";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: {
      canonical: `${BASE_URL}/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BASE_URL}/${service.slug}`,
      type: "website",
      locale: "pt_BR",
      siteName: "NED - Nobre Engenharia Diagnóstica",
      images: [
        {
          url: `${BASE_URL}${service.image}`,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${BASE_URL}/${service.slug}`,
    image: `${BASE_URL}${service.image}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Nobre Engenharia Diagnóstica",
      alternateName: "NED",
      url: BASE_URL,
      telephone: "+5585987994603",
      email: "nedcomerciall@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout service={service} relatedServices={relatedServices} />
    </>
  );
}
