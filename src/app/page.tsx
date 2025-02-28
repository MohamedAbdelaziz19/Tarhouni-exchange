"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import ErrorPage from "@/error";
import LoadingPage from "@/loading";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import About from "@/components/About";



// Import dynamique pour éviter le SSR sur ces composants (facultatif)
const CurrencyConverter = dynamic(() => import("@/components/CurrencyConverter"), { 
    ssr: false 
});
const DateTableCurrency = dynamic(() => import("@/components/DateTableCurrency"), { 
    ssr: false 
});
const CurrencyTable = dynamic(() => import("@/components/CurrencyTable"), { 
    ssr: false 
});

export const runtime = "edge";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />

      {/* Gestion du chargement et des erreurs */}
      <Suspense fallback={<LoadingPage />}>
        <ErrorBoundary>
          <CurrencyConverter />
          <DateTableCurrency />
          <CurrencyTable />
        </ErrorBoundary>
      </Suspense>

      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

// Composant pour gérer les erreurs
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={new Error("Erreur lors du chargement des données")} />;
    }
    return this.props.children;
  }
}

export default MainPage;
