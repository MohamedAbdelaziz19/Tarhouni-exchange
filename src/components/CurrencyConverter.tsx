"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<{ code: string; nom: string; achat: number; vent: number }[]>([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isBuyingTND, setIsBuyingTND] = useState(true); // true = Acheter TND, false = Vendre TND

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

  // Conversion dynamique
  useEffect(() => {
    const fromRate = currencies.find((c) => c.code === fromCurrency)?.vent || 1;
    const tndRate = currencies.find((c) => c.code === "TND")?.achat || 1;

    if (isBuyingTND) {
      setConvertedAmount((amount * fromRate) / tndRate);
    } else {
      setConvertedAmount((amount * tndRate) / fromRate);
    }
  }, [amount, fromCurrency, isBuyingTND, currencies]);

  // Basculer entre Achat et Vente de TND
  const toggleExchange = () => {
    setIsBuyingTND(!isBuyingTND);
  };

  return (
    <div id="Convert" className="my-10 p-8 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-lg shadow-xl w-full max-w-md mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">💱 Convertisseur de devises</h1>

      {/* Input Montant */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          {isBuyingTND ? "Je donne" : "Je reçois"}
        </label>
        <div className="flex items-center border border-white rounded-lg overflow-hidden bg-white text-black">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-3 border-none outline-none text-lg"
          />
          <select
            value={isBuyingTND ? fromCurrency : "TND"}
            onChange={(e) => isBuyingTND && setFromCurrency(e.target.value)}
            className="p-3 bg-gray-200 border-l cursor-pointer"
          >
            {isBuyingTND ? (
              currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))
            ) : (
              <option value="TND">TND</option>
            )}
          </select>
        </div>
      </div>

      {/* Bouton d'échange */}
      <div className="flex justify-center my-4">
        <button
          onClick={toggleExchange}
          className="bg-white text-yellow-500 p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ArrowLeftRight className="w-10 h-10" />
        </button>
      </div>

      {/* Résultat Conversion */}
      <div>
        <label className="block text-lg font-semibold mb-2">
          {isBuyingTND ? "Je reçois en TND" : "Je donne"}
        </label>
        <div className="flex items-center border border-white rounded-lg overflow-hidden bg-white text-black">
          <input
            type="text"
            value={convertedAmount.toFixed(3)}
            readOnly
            className="w-full p-3 border-none outline-none text-lg bg-gray-100"
          />
          <select
            value={isBuyingTND ? "TND" : fromCurrency}
            onChange={(e) => !isBuyingTND && setFromCurrency(e.target.value)}
            className="p-3 bg-gray-200 border-l cursor-pointer"
          >
            {isBuyingTND ? (
              <option value="TND">TND</option>
            ) : (
              currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
