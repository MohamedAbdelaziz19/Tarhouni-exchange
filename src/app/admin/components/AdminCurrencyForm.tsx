"use client";
import { useState, useEffect } from "react";

interface DeviseData {
  id: string;
  code: string;
  nom: string;
  unite: number;
  achat: number;
  vent: number;
}

export const runtime ="edge";

const AdminCurrencyForm = () => {
  const [devises, setDevises] = useState<DeviseData[]>([]);
  const [newDevise, setNewDevise] = useState<Omit<DeviseData, "id">>({
    code: "",
    nom: "",
    unite: 0,
    achat: 0,
    vent: 0,
  });
  const [updateDeviseData, setUpdateDeviseData] = useState<DeviseData | null>(null);
  const [message, setMessage] = useState<string>("");

  const fetchDevises = () => {
    fetch("/api/currencies")
      .then((res) => res.json())
      .then((data) => setDevises(data))
      .catch((err) => console.error("Erreur lors du chargement :", err));
  };

  useEffect(() => {
    fetchDevises();
  }, []);

  const handleAddDevise = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/currencies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDevise),
    });
    if (response.ok) {
      setMessage("Nouvelle devise ajoutée avec succès.");
      fetchDevises();
      setNewDevise({ code: "", nom: "", unite: 0, achat: 0, vent: 0 });
    } else {
      const error = await response.json();
      setMessage(error.message || "Erreur lors de l'ajout.");
    }
  };
  

  const handleUpdateDevise = async (devise: DeviseData) => {
    // Utilisez la devise passée en paramètre pour initialiser updateDeviseData 
    // si ce n'est pas déjà fait ou pour la mettre à jour.
    const dataToUpdate = updateDeviseData ?? devise;
    const response = await fetch("/api/currencies", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToUpdate),
    });
    if (response.ok) {
      setMessage("Devise mise à jour avec succès.");
      fetchDevises();
      setUpdateDeviseData(null);
    } else {
      setMessage("Erreur lors de la mise à jour.");
    }
  };
  

  const handleDeleteDevise = async (id: string) => {
    const response = await fetch("/api/currencies", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      setMessage("Devise supprimée avec succès.");
      fetchDevises();
    } else {
      setMessage("Erreur lors de la suppression.");
    }
  };



  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-yellow-500 text-center">
        Administration des devises
      </h2>

      {message && (
        <div className="bg-yellow-100 text-yellow-700 p-2 rounded text-center">
          {message}
        </div>
      )}

      {/* Formulaire d'ajout d'une nouvelle devise */}
      <form onSubmit={handleAddDevise} className="space-y-4">
        <h3 className="text-xl font-semibold text-yellow-500">
          Ajouter une nouvelle devise
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Code</label>
            <input
              type="text"
              value={newDevise.code}
              onChange={(e) =>
                setNewDevise({ ...newDevise, code: e.target.value.toUpperCase() })
              }
              placeholder="Ex: USD"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              value={newDevise.nom}
              onChange={(e) =>
                setNewDevise({ ...newDevise, nom: e.target.value })
              }
              placeholder="Ex: Dollar américain"
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Unité</label>
            <input
              type="number"
              value={newDevise.unite}
              onChange={(e) =>
                setNewDevise({ ...newDevise, unite: parseFloat(e.target.value) })
              }
              placeholder="Ex: 1"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Achat</label>
            <input
              type="number"
              value={newDevise.achat}
              onChange={(e) =>
                setNewDevise({ ...newDevise, achat: parseFloat(e.target.value) })
              }
              placeholder="Ex: 3.15"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Vente</label>
            <input
              type="number"
              value={newDevise.vent}
              onChange={(e) =>
                setNewDevise({ ...newDevise, vent: parseFloat(e.target.value) })
              }
              placeholder="Ex: 3.25"
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Ajouter
        </button>
      </form>

      {/* Liste des devises avec mise à jour et suppression */}
      <div>
        <h3 className="text-xl font-semibold text-yellow-500">
          Gestion des devises
        </h3>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Code</th>
              <th className="border p-2">Nom</th>
              <th className="border p-2">Unité</th>
              <th className="border p-2">Achat</th>
              <th className="border p-2">Vente</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {devises.length > 0 ? (
              devises.map((devise) => (
                <tr key={devise.id} className="text-center">
                  <td className="border p-2">{devise.code}</td>
                  <td className="border p-2">{devise.nom}</td>
                  <td className="border p-2">{devise.unite}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      defaultValue={devise.achat}
                      onChange={(e) =>
                        setUpdateDeviseData((prev) =>
                          prev
                            ? { ...prev, achat: parseFloat(e.target.value) }
                            : { ...devise, achat: parseFloat(e.target.value) }
                        )
                      }
                      className="w-20 border p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      defaultValue={devise.vent}
                      onChange={(e) =>
                        setUpdateDeviseData((prev) =>
                          prev
                            ? { ...prev, vent: parseFloat(e.target.value) }
                            : { ...devise, vent: parseFloat(e.target.value) }
                        )
                      }
                      className="w-20 border p-1"
                    />
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleUpdateDevise(devise)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Mettre à jour
                    </button>
                    <button
                      onClick={() => handleDeleteDevise(devise.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border p-2" colSpan={6}>
                  Aucune donnée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCurrencyForm;
