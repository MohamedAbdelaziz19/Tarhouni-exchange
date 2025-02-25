// src/app/api/currencies.ts

// Fonction pour récupérer les devises
async function fetchCurrenciesFromExternalAPI() {
    const response = await fetch('URL_DE_VOTRE_API'); // Remplacez avec l'URL de votre API réelle
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des devises');
    }
    const data = await response.json();
    return data;
  }
  
  export default async function handler(req, res) {
    try {
      const currencies = await fetchCurrenciesFromExternalAPI();
      res.status(200).json(currencies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur interne du serveur' });
    }
  }
  