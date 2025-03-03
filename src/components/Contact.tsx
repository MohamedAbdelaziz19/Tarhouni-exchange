import React, { FormEvent } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "c8b9bf8d-7b2a-490c-a9e4-cdb087aa1795");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message envoyé avec succès!",
        icon: "success",
      });
    }
  }

  return (
    <div id="contact">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-lg ">
          <h1 className="text-center text-2xl font-bold text-yellow-500 sm:text-3xl ">
            Contactez-nous maintenant
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
          </p>

          {/* Utilisation correcte de `handleSubmit` */}
          <form
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border border-yellow-200"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">Détails de contact</p>

            {/* Nom */}
            <div>
              <label htmlFor="nom" className="sr-only">
                Nom et Prénom
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Nom et Prénom"
                required
              />
            </div>

            {/* Numéro de téléphone */}
            <div>
              <label htmlFor="telephone" className="sr-only">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Numéro de téléphone"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Email"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                name="description"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Description"
                required
              ></textarea>
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
