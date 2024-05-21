import AboutSection from "@/components/local/home/aboutSection/AboutSection";
import Clients from "@/components/local/home/clients/Clients";
import ContactSection from "@/components/local/home/contact/ContactSection";
import Deliver from "@/components/local/home/deliver/Deliver";
import Hero from "@/components/local/home/hero/Hero";
import MissionVision from "@/components/local/home/misssionVision/MissionVision";
import ProjectDelivery from "@/components/local/home/projectDelivery/ProjectDelivery";
import QuoteSection from "@/components/local/home/quoteSection/QuoteSection";
import Require from "@/components/local/home/requires/Require";
import ServicesSection from "@/components/local/home/servicesSection/ServicesSection";
import Tagline from "@/components/local/home/tagline/Tagline";
import TechStack from "@/components/local/home/techStack/TechStack";

export default function Home() {
  return (
    <main className="homePage flex alignCenter justifyCenter flexColumn">
      <Hero />
      <ServicesSection />
      <QuoteSection />
      <ProjectDelivery />
      <Deliver />
      <MissionVision />
      <Tagline />
      <AboutSection />
      <Require />
      <TechStack />
      <Clients />
      <ContactSection />
    </main>
  );
}
