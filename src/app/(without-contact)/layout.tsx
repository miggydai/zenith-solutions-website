import Footer from "@/src/components/ui/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
