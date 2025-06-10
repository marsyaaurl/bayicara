import type { Metadata } from "next";
import { Poppins, Krona_One } from "next/font/google";
import "./globals.css";

// Poppins Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Krona One Font
const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "bayicara",
  description: "Apilkasi untuk membantu orang tua dalam mendukung perkembangan bicara anak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${kronaOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
