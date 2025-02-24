import React from "react";

import Contact from "@/components/Contact";
import CurrencyTable from "@/components/CurrencyTable"; // Add the currency table component here

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";
import About from "@/components/About";
import CurrencyConverter from "@/components/CurrencyConverter";
import DateTableCurrency from "@/components/DateTableCurrency";

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <About/>
      <CurrencyConverter/>
      <DateTableCurrency/>
      <CurrencyTable />
      <Service/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default MainPage;
