"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<{ code: string; nom: string; achat: number; vent: number }[]>([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [amount, setAmount] = useState(""); // Initialisation vide
  const [convertedAmount, setConvertedAmount] = useState(""); // Initialisation vide
  const [isBuyingTND, setIsBuyingTND] = useState(true); // Achat de TND par défaut

  // Définition des unités spécifiques par devise
  const currencyUnits: Record<string, number> = {
    SAR: 10,
    QAR: 10,
    CHF: 10,
    AED: 10,
    NOK: 100,
    DKK: 100,
    JPY: 1000,
  };

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

  // Fonction de conversion
  const convertCurrency = () => {
    if (amount === "" || isNaN(Number(amount))) {
      setConvertedAmount(""); // Empêcher tout affichage de nombre incorrect
      return;
    }

    const fromCurrencyData = currencies.find((c) => c.code === fromCurrency);
    if (!fromCurrencyData) {
      console.warn("Aucune donnée trouvée pour la devise :", fromCurrency);
      return;
    }

    const fromAchat = fromCurrencyData.achat;
    const fromVent = fromCurrencyData.vent;
    const unit = currencyUnits[fromCurrency] || 1; // Unité spécifique ou 1 par défaut

    let result = 0;
    if (isBuyingTND) {
      // Achat TND
      result = Number(amount) * (fromAchat / unit);
    } else {
      // Vente TND
      result = Number(amount) / (fromVent / unit);
    }

    console.log(`Montant entré: ${amount}, Résultat: ${result.toFixed(3)}`); // Debug
    setConvertedAmount(result.toFixed(3));
  };

  // Mise à jour du calcul dès qu'une valeur change
  useEffect(() => {
    if (currencies.length > 0) {
      convertCurrency();
    }
  }, [amount, fromCurrency, isBuyingTND, currencies]);

  // Basculer entre Achat et Vente de TND
  const toggleExchange = () => {
    setIsBuyingTND(!isBuyingTND);
    setAmount(""); // Réinitialiser les valeurs après le switch
    setConvertedAmount("");
  };

  return (
    <div id="Convert" className="my-10 p-8 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-lg shadow-xl max-w-md mx-auto text-white">
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
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Entrez un montant"
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
            value={convertedAmount}
            readOnly
            placeholder="Résultat"
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
