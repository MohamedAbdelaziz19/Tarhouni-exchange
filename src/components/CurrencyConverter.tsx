"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react"; // Icône d'échange

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<{ code: string; nom: string; achat: number }[]>([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Récupération des taux de change
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("/api/currencies");
        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des devises :", error);
      }
    };

    fetchCurrencies();
  }, []);

  // Conversion basée uniquement sur le TND
  useEffect(() => {
    const fromRate = currencies.find((c) => c.code === fromCurrency)?.achat || 1;
    const tndRate = currencies.find((c) => c.code === "TND")?.achat || 1;

    setConvertedAmount((amount * fromRate) / tndRate);
  }, [amount, fromCurrency, currencies]);

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-lg shadow-xl w-full max-w-md mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">💱 Convertisseur de devises</h1>

      {/* Input Montant */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Je donne</label>
        <div className="flex items-center border border-white rounded-lg overflow-hidden bg-white text-black">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-3 border-none outline-none text-lg"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-3 bg-gray-200 border-l cursor-pointer"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Icône d'échange */}
      <div className="flex justify-center my-4">
        <ArrowLeftRight className="w-10 h-10 text-white animate-pulse" />
      </div>

      {/* Résultat Conversion */}
      <div>
        <label className="block text-lg font-semibold mb-2">Je reçois en TND</label>
        <div className="flex items-center border border-white rounded-lg overflow-hidden bg-white text-black">
          <input
            type="text"
            value={convertedAmount.toFixed(3)}
            readOnly
            className="w-full p-3 border-none outline-none text-lg bg-gray-100"
          />
          <span className="p-3 bg-gray-200 border-l text-lg font-semibold">TND</span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
