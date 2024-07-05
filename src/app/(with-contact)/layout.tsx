import ContactFooter from "@/src/components/ui/ContactFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <ContactFooter />
    </main>
  );
}
