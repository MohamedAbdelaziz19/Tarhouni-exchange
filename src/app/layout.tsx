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
  keywords: "taux de change, Tunisie, devises, Tarhouni Exchange",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tarhouni Exchange | Taux de change Tunisie",
    description: "Les meilleurs taux de change en Tunisie, avec un service rapide et sécurisé.",
    url: "http://tarhouni-exchange.com",
    siteName: "Tarhouni Exchange",
    images: [
      {
        url: "http://tarhouni-exchange.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Tarhouni Exchange Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
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
