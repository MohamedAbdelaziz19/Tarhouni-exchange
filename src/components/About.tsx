import React from "react";
import { ShieldCheck, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative  py-16 px-6 md:px-12 lg:px-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            À propos de{" "}
            <span className="text-yellow-500">Tarhouni Exchange</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Votre partenaire de confiance pour les services de change de devises
            en Tunisie. Offrant des taux compétitifs et un service sécurisé pour
            toutes vos transactions.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
      
            <Image
              src="/image/TarhouniBuraeu.jpeg"
              alt="Bureau Tarhouni"
              width={300} // Remplace par la largeur correcte
              height={250} // Remplace par la hauteur correcte
              className="rounded-lg mx-auto"
            />
       

          {/* Right: Features */}
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg border border-yellow-200 hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              >
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features list
const features = [
  {
    title: "Sécurité et Confidentialité ",
    description:
      "La sécurité de vos transactions est notre priorité. Nous nous engageons à garantir la confidentialité de toutes vos opérations financières..",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Meilleurs Taux",
    description:
      "Tarhouni Exchange offre les meilleurs taux de change du marché, notamment pour les gros montants .. et mis a jour en temps réel pour garantir les meilleurs offres.",
    icon: <DollarSign className="w-6 h-6" />,
  },

  {
    title: "Service Client Dédié",
    description:
      "Notre équipe est disponible 24/7 pour répondre à toutes vos questions et besoins.",
    icon: <Users className="w-6 h-6" />,
  },
];

export default About;
