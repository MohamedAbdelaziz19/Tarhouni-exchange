"use client";
import { useState, useEffect } from "react";

interface DeviseData {
  id: string;
  code: string;
  nom: string;
  unite: number;
  achat: number;
  vent: number;
  createdAt: string;
}

const CurrencyTable = () => {
  const [devises, setDevises] = useState<DeviseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule un délai de chargement
        const response = await fetch("/api/currencies");
        if (!response.ok) throw new Error("Erreur lors du chargement des devises.");
        const data = await response.json();
        setDevises(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Erreur lors du chargement des devises.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="currencytable" className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Gestion des erreurs */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Loader avec skeleton effect */}
      {loading ? (
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded mb-4 w-1/3 mx-auto"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          ))}
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-yellow-500 text-white text-lg">
                <th className="p-3">Code</th>
                <th className="p-3">Nom</th>
                <th className="p-3">Unité</th>
                <th className="p-3">Achat</th>
                <th className="p-3">Vente</th>
              </tr>
            </thead>
            <tbody>
              {devises.length > 0 ? (
                devises.map((devise) => (
                  <tr key={devise.id} className="border-b transition hover:bg-gray-100">
                    <td className="p-3 text-center">{devise.code}</td>
                    <td className="p-3 text-center">{devise.nom}</td>
                    <td className="p-3 text-center">{devise.unite}</td>
                    <td className="p-3 text-center font-semibold text-green-600">
                      {devise.achat ? devise.achat.toFixed(3) : "N/A"}
                    </td>
                    <td className="p-3 text-center font-semibold text-red-500">
                      {devise.vent ? devise.vent.toFixed(3) : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center text-gray-500" colSpan={5}>
                    Aucune devise trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrencyTable;
