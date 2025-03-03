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
  title: "Tarhouni Exchange",
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
