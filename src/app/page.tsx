import AboutHeroSection from "../components/AboutPage/AboutHeroSection";
import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientStories from "../components/ui/ClientStories";
import ContactusCard from "../components/ui/ContactusCard";
import FooterSection from "../components/HomePage/FooterSection";
import Stats from "../components/ui/Stats";
import FounderCard from "../components/ui/FounderCard";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <InfoSection />
      <ServicesSection />
      <ClientStories />
      <FooterSection />
     
    </main>
  );
}
