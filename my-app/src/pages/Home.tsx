import SEO from "../components/SEO";
import Hero from "../components/hero/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import ApproachTimeline from "../components/sections/ApproachTimeline";
import WhyUs from "../components/sections/WhyUs";
import CaseStudies from "../components/sections/CaseStudies";
import Industries from "../components/sections/Industries";
import TechStack from "../components/sections/TechStack";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="x-page">
      <SEO
        title="Ascendons | Product Engineering Studio: MVPs, CRMs & AI Automation"
        description="We design, engineer and launch production-ready software products, intelligent business systems and AI-powered experiences. MVPs in 4–6 weeks, custom CRMs, integrations and dedicated teams."
        canonicalPath="/"
        keywords="product engineering studio, MVP development, SaaS development, custom CRM, business systems, AI automation, WhatsApp automation, enterprise integrations, dedicated engineering team, BriefGuard, Ascendons CRM, Surat software company"
      />
      <Hero />
      <ServicesSection />
      <ProductsShowcase />
      <ApproachTimeline />
      <WhyUs />
      <CaseStudies />
      <Industries />
      <TechStack />
      <ContactSection source="Homepage enquiry" />
    </div>
  );
}
