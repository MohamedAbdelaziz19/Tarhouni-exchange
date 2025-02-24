import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-yellow-500 sm:text-3xl">
            Contactez-nous maintenant
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
          </p>

          <form action="#" className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Détails de contact</p>

            {/* Nom */}
            <div>
              <label htmlFor="nom" className="sr-only">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Nom"
              />
            </div>

            {/* Prénom */}
            <div>
              <label htmlFor="prenom" className="sr-only">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Prénom"
              />
            </div>

            {/* Numéro de téléphone */}
            <div>
              <label htmlFor="telephone" className="sr-only">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Numéro de téléphone"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Email"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Description"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-yellow-500 px-5 py-3 text-sm font-medium text-white"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
