//lyout.tsx
import type { Metadata } from "next";
import { Saira  } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const saira = Saira({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
 })

 export const metadata: Metadata = {
  title: "Tarhouni Exchange | Meilleur taux de change en Tunisie",
  description: "Obtenez les meilleurs taux de change en Tunisie avec Tarhouni Exchange. Convertissez vos devises rapidement et en toute sécurité.",
  keywords: "taux de change, conversion devise, Tunisie, dinar tunisien, euro, dollar, change argent",
  openGraph: {
    images: "/favicon-512x512.png",
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={saira.className}
      >
        {children}
      </body>
    </html>
  );
}
