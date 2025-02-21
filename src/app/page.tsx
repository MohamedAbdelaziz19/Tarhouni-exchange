import React from "react";

import Contact from "@/components/Contact";
import CurrencyTable from "@/components/CurrencyTable"; // Add the currency table component here
import CurrencyConverter from "@/components/CurrencyConverter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <CurrencyConverter/>
      <CurrencyTable />
      <Service/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default MainPage;
