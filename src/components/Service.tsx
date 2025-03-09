import React from "react";
import { FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa"; // Importing icons

const Service = () => {
  return (
    <div id="service" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-500">Nos Services</h2>
        <p className="text-lg text-gray-600">
          Nous offrons une gamme complète de services de change conformes aux
          réglementations en vigueur.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-6">
          {/* Opérations d’Achat */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaMoneyBillWave className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Opérations d’Achat</h3>
            <ul className="text-gray-600 mt-2 text-left list-disc list-inside">
              <li>Conversion de devises en dinar par les voyageurs</li>
              <li>Rétrocession d’Allocation et de Frais de Mission</li>
              <li>Achat de Devises à Titre de Reliquat autorisé par la BCT</li>
            </ul>
          </div>

          {/* Opérations de Vente */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaExchangeAlt className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Opérations de Vente</h3>
            <ul className="text-gray-600 mt-2 text-left list-disc list-inside">
              <li>Allocations Touristiques</li>
              <li>Devise pour Voyageurs non Résidents</li>
              <li>Frais de Mission ou de Stage</li>
              <li>Montant Autorisé par la Banque Centrale de Tunisie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
