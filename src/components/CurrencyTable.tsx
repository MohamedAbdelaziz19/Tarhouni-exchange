"use client";

import React, { useEffect, useState } from "react";
import "@next-languages/flags/style.css";
import { flagMap } from "@/types/flagMap";
import { getExchangeRates } from "@/../utils/api";
import Image from "next/image";
import Link from "next/link";

interface Currency {
  title: string;
  code: string;
  unit: number;
  country: string;
}

const currencies: Currency[] = [
  { title: "Euro", code: "EUR", unit: 1, country: "eu" },
  { title: "Dollar des Etats-Unis", code: "USD", unit: 1, country: "us" },
  { title: "Riyal saoudien", code: "SAR", unit: 10, country: "sa" },
  { title: "Dollar canadien", code: "CAD", unit: 1, country: "ca" },
  { title: "Dinar de Bahreïn", code: "BHD", unit: 1, country: "bh" },
  { title: "Livre sterling", code: "GBP", unit: 1, country: "gb" },
  { title: "Dinar koweïtien", code: "KWD", unit: 1, country: "kw" },
  { title: "Yen", code: "JPY", unit: 1000, country: "jp" },
  { title: "Yuan Ren-Min-Bi", code: "CNY", unit: 1, country: "cn" },
  { title: "Dirham des Émirats Arabes Unis", code: "AED", unit: 10, country: "ae" },
  { title: "Franc suisse", code: "CHF", unit: 10, country: "ch" },
  { title: "Riyal du Qatar", code: "QAR", unit: 10, country: "qa" },
];

const CurrencyTable = () => {
  const [rates, setRates] = useState<{ [code: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const baseCurrency = "USD";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const fetchedRates = await getExchangeRates(baseCurrency);
        setRates(fetchedRates);
      } catch (error) {
        console.error("Failed to fetch rates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [baseCurrency]);

  const tndRate = rates["TND"] || 0;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Titre</th>
            <th className="px-4 py-2 text-left">Identifiant</th>
            <th className="px-4 py-2 text-left">Unité</th>
            <th className="px-4 py-2 text-left">Achat (TND)</th>
            <th className="px-4 py-2 text-left">Vente (TND)</th>
            <th className="px-4 py-2 text-left">Conversion</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td className="px-4 py-2" colSpan={6}>
                Loading rates...
              </td>
            </tr>
          ) : (
            currencies.map((currency, index) => {
              const currencyRate = rates[currency.code] || 0;
              let rateInTND = 0;
              if (currencyRate && tndRate) {
                rateInTND = (tndRate / currencyRate) * currency.unit;
              }
              const achat = rateInTND;
              const vente = achat * 1.01;

              const FlagComponent = flagMap[currency.country];

              return (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    {FlagComponent ? (
                      <FlagComponent className="w-6 h-4 mr-2" />
                    ) : (
                      <Image
                        src={`https://flagcdn.com/w40/${currency.country}.png`}
                        alt={`${currency.title} Flag`}
                        width={24}
                        height={16}
                        className="mr-2"
                      />
                    )}
                    {currency.title}
                  </td>
                  <td className="px-4 py-2">{currency.code}</td>
                  <td className="px-4 py-2">{currency.unit}</td>
                  <td className="px-4 py-2 text-green-600">
                    {achat ? achat.toFixed(3) : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-red-600">
                    {vente ? vente.toFixed(3) : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                      <Link href={"#CurrencyConverter"}>Convertir</Link>
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
