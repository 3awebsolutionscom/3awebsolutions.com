import Clients from "@/components/local/home/clients/Clients";
import Hero from "@/components/local/home/hero/Hero";
import TechStack from "@/components/local/home/techStack/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Clients />
    </main>
  );
}
