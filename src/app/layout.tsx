import type { Metadata } from "next";
import { EB_Garamond, Cardo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const cardo = Cardo({
  weight: "400",
  variable: "--font-cardo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alchemy Lab",
  description: "classic cocktails catalogue",
  icons: {
    icon: { url: "/alchemy-lab-icon.png", sizes: "48x48", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${cardo.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
