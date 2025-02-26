"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ErrorPage from "@/error";
import LoadingPage from "@/loading";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import About from "@/components/About";

// Import dynamique pour éviter le SSR (facultatif)
const CurrencyConverter = dynamic(() => import("@/components/CurrencyConverter"), { ssr: false });
const DateTableCurrency = dynamic(() => import("@/components/DateTableCurrency"), { ssr: false });
const CurrencyTable = dynamic(() => import("@/components/CurrencyTable"), { ssr: false });

export const runtime = "edge";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule un délai de chargement
        const response = await fetch("https://www.tarhouni-exchange.com/");
        if (!response.ok) throw new Error("Erreur lors du chargement des devises.");
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <LoadingPage />;
  if (hasError) return <ErrorPage error={new Error("Erreur lors du chargement des données")} />;

  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <CurrencyConverter />
      <DateTableCurrency />
      <CurrencyTable />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
