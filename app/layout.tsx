import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import { HeaderNav } from "@/components/organisms/HeaderNav";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amplexus Health",
  description: "Mental health care and self-care resources for your wellness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        <HeaderNav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
