import React from "react";
import { FaRegLightbulb, FaHeadset, FaSearchDollar } from "react-icons/fa"; // Importing icons

const Service = () => {
  return (
    <div id="service" className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-500">Nos Services</h2>
        <p className="text-lg text-gray-600">
          Nous offrons une gamme complète de services pour vous aider à maximiser la
          valeur de votre argent avec transparence et expertise.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaRegLightbulb className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Conseils d experts</h3>
            <p className="text-gray-600 mt-2">
              Bénéficiez des conseils d vexperts pour une gestion optimale de vos
              transactions de change.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaHeadset className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Assistance Personnalisée</h3>
            <p className="text-gray-600 mt-2">
              Nous vous accompagnons tout au long du processus d échange pour vous
              offrir une expérience sans stress.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaSearchDollar className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Transparence Totale</h3>
            <p className="text-gray-600 mt-2">
              Nous garantissons une totale transparence dans les taux de change et
              les frais de service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
