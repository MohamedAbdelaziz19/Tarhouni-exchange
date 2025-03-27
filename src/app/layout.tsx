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
    title: "Tarhouni Exchange | Convertisseur de devises",
    description: "Comparez les taux de change et convertissez vos devises facilement avec Tarhouni Exchange.",
    url: "https://tarhouni-exchange.com",
    siteName: "Tarhouni Exchange",
    type: "website",
    images: [
      {
        url: "/favicon-512x512.png", // Assurez-vous que cette image existe dans /public
        width: 512,
        height: 512,
        alt: "Logo de Tarhouni Exchange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarhouni Exchange",
    description: "Découvrez les meilleurs taux de change et convertissez vos devises en quelques secondes.",
    images: ["/favicon-512x512.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-192x192.png",
  },
  manifest: "/site.webmanifest",
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
