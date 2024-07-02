import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import ClientSection from "../components/HomePage/ClientSection";
import Stats from "../components/ui/HomeUI/Stats";
import LogoMarquee from "../components/ui/LogoMarquee";
import Footer from "../components/ui/Footer";
import ContactusCard from "../components/ui/ContactusCard";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <InfoSection />
      <ServicesSection />
      <ClientSection />
      <LogoMarquee />
      <div className="h-[160vh] flex flex-col items-center justify-end">
        <div className="md:pt-48 pt-5 w-[100%] md:h-[495px] flex justify-center items-center z-10">
          <ContactusCard />
        </div>
        <Footer />
      </div>
    </main>
  );
}
