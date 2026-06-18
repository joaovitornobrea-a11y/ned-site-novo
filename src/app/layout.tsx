import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "NED | Nobre Engenharia Diagnóstica — Laudos Técnicos, Inspeção Predial e Drone Termográfico",
  description:
    "Engenharia Diagnóstica especializada em laudos técnicos, inspeção predial, fachadas com drone termográfico, infiltrações, recebimento e fiscalização de obras em todo o Brasil. Responsabilidade técnica CREA.",
  keywords:
    "engenharia diagnóstica, laudo técnico, inspeção predial, drone termográfico, termografia, fachada, infiltração, recebimento de obras, fiscalização de obras, ABNT, NBR 16747, patologia, NED",
  authors: [{ name: "Nobre Engenharia Diagnóstica" }],
  openGraph: {
    title: "NED | Nobre Engenharia Diagnóstica",
    description:
      "Laudos técnicos, inspeção predial, fachadas com drone termográfico, infiltrações, recebimento e fiscalização de obras em todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "NED - Nobre Engenharia Diagnóstica",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nobreengenhariadiagnostica.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
