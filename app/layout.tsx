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
  description:
    "Aplikasi untuk membantu orang tua dalam mendukung perkembangan bicara anak",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }, // favicon untuk tab browser
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${kronaOne.variable}`}>
      <head>
        {/* fallback tambahan untuk favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
