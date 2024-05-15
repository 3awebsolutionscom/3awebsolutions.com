import AboutSection from "@/components/local/home/aboutSection/AboutSection";
import Clients from "@/components/local/home/clients/Clients";
import Hero from "@/components/local/home/hero/Hero";
import ProjectDelivery from "@/components/local/home/projectDelivery/ProjectDelivery";
import QuoteSection from "@/components/local/home/quoteSection/QuoteSection";
import ServicesSection from "@/components/local/home/servicesSection/ServicesSection";
import TechStack from "@/components/local/home/techStack/TechStack";

export default function Home() {
  return (
    <main className="homePage flex alignCenter justifyCenter flexColumn">
      <Hero />
      <ServicesSection />
      <QuoteSection />
      <ProjectDelivery />
      {/* <AboutSection /> */}
      <TechStack />
      <Clients />
    </main>
  );
}
