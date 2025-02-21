"use client";

import { useState, useEffect } from "react";
import { getExchangeRates } from "../../utils/api";

const CurrencyConverter = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [base, setBase] = useState("USD");
  const [target, setTarget] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const ratesData = await getExchangeRates(base);
        setRates(ratesData);
        setLoading(false);
      } catch {
        setError("Error fetching exchange rates");
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  const convertCurrency = () => {
    if (rates[target]) {
      const result = parseFloat((amount * rates[target]).toFixed(2));
      setConvertedAmount(result);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-xl rounded-xl transition-all transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Currency Converter</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading exchange rates...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">From:</label>
              <select
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">To:</label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={convertCurrency}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md transition transform hover:scale-105 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Convert
          </button>
          {convertedAmount !== null && (
            <p className="mt-6 text-center text-xl font-semibold text-gray-800">
              Converted Amount: {convertedAmount} {target}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
