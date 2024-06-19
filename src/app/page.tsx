import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientStories from "../components/ui/Carousel/ClientStories";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <ClientStories />
    </main>
  );
}
