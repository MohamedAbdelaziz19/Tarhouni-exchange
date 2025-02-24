"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminCurrencyForm from "./AdminCurrencyForm";

const AdminLogin = () => {
  const pathname = usePathname();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Récupérer le mot de passe depuis l'environnement
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect !");
    }
  };

  if (pathname !== "/admin") return null;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!isAuthenticated ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-4 text-yellow-500">🔒 Accès Admin</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Entrez le mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md mb-3 focus:ring-2 focus:ring-yellow-500"
            />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Valider
            </button>
          </form>
        </div>
      ) : (
        <AdminCurrencyForm />
      )}
    </div>
  );
};

export default AdminLogin;
