import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthorityIndicators from "@/components/AuthorityIndicators";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Method from "@/components/Method";
import Quality from "@/components/Quality";
import ResponsibleEngineer from "@/components/ResponsibleEngineer";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <AuthorityIndicators />
        <Services />
        <Technology />
        <Method />
        <Quality />
        <ResponsibleEngineer />
        <Clients />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
