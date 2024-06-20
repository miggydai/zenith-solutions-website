import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientStories from "../components/ui/ClientStories";
import Stats from "../components/ui/Stats";
import LogoMarquee from "../components/ui/LogoMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <InfoSection />
      <ServicesSection />
      <ClientStories />
      <LogoMarquee />
    </main>
  );
}
