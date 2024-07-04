import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Sora, Rubik } from "next/font/google";
import "../styles/globals.css";
import Navigation from "../components/ui/Navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.variable} ${poppins.variable} ${sora.variable} ${rubik.variable} bg-white text-white pt-16`}
      >
        <Toaster />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
