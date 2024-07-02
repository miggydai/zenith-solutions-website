import Footer from "@/src/components/ui/Footer";
import ContactusCard from "@/src/components/ui/ContactusCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <div className="h-[160vh] flex flex-col items-center justify-end">
        <div className="md:pt-48 pt-5 w-[100%] md:h-[495px] flex justify-center items-center z-10">
          <ContactusCard />
        </div>
        <Footer />
      </div>
    </main>
  );
}
