import React from "react";
import { ShieldCheck, DollarSign, Globe, Users,Mail,Phone,MapPin} from "lucide-react";
import GoogleMapComponent from "./Map";

const About = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-yellow-900 opacity-10"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            À propos de <span className="text-yellow-500">Tarhouni Exchange</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Votre partenaire de confiance pour les services de change de devises en Tunisie.
            Offrant des taux compétitifs et un service sécurisé pour toutes vos transactions.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
           <GoogleMapComponent/>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fade-up"
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

                {/* Contact Information */}
                <div className="mt-16 bg-white p-8 shadow-lg rounded-lg animate-fade-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Info
          </h3>
          <div className="space-y-6 text-gray-700">
            {/* Email */}
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Mail className="w-6 h-6 text-yellow-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p>tarhouni.exchange@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Phone className="w-6 h-6 text-yellow-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Téléphone</h4>
                <p>29450786</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Adresse</h4>
                <p>Rue Ennasr, Teboulba, Monastir 5080</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-6 h-6 text-yellow-500">🕒</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Heures d ouverture</h4>
                <p>08:30 - 20:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features list
const features = [
  {
    title: "Sécurité et Fiabilité",
    description:
      "Toutes vos transactions sont sécurisées avec des protocoles avancés pour protéger vos données.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Meilleurs Taux",
    description:
      "Nous offrons des taux compétitifs et mis à jour en temps réel pour garantir les meilleures offres.",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Présence Internationale",
    description:
      "Un réseau mondial qui facilite les échanges de devises, peu importe où vous vous trouvez.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Service Client Dédié",
    description:
      "Notre équipe est disponible 24/7 pour répondre à toutes vos questions et besoins.",
    icon: <Users className="w-6 h-6" />,
  },
];

export default About;
