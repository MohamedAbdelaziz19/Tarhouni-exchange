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
  metadataBase: new URL("https://tarhouni-exchange.com/"),
  title:{
    default:"Tarhouni Exchange ",
    template:'%s | Meilleur taux de change en Tunisie'
  },
  description: "Obtenez les meilleurs taux de change en Tunisie avec Tarhouni Exchange. Convertissez vos devises rapidement et en toute sécurité.",
  keywords: "taux de change, Tunisie, devises, Tarhouni Exchange",
  verification: {
    google: "4ywGfxBvev4knam6BU3zVuyPryLW8qfFfBN_ktakZaI", // Remplace avec ton code exact
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tarhouni Exchange | Les Meilleurs Taux de change Tunisie",
    description: "Les meilleurs taux de change en Tunisie, avec un service rapide et sécurisé.",
    url: "http://tarhouni-exchange.com",
    siteName: "Tarhouni Exchange",
    images: [
      {
        url: "http://tarhouni-exchange.com/images/opengraph-image",
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
            <head>
        {/* Schéma JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tarhouni Exchange",
              "url": "https://www.tarhouni-exchange.com",
              "logo": "https://www.tarhouni-exchange.com/logo.png",
              "description": "Obtenez les derniers taux de change en Tunisie.",
              "address": {
                "@type": "5080",
                "streetAddress": "Avenue, Tabulbah 5080",
                "addressLocality": "Tabulbah",
                "addressCountry": "TN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+21629 450 786",
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body
        className={saira.className}
      >
        {children}
      </body>
    </html>
  );
}
