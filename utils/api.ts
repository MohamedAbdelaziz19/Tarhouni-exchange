// utils/api.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_EXCHANGE_API_URL; // e.g. https://v6.exchangerate-api.com/v6
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY;

export const getExchangeRates = async (base: string) => {
  try {
    const response = await axios.get(`${API_URL}/${API_KEY}/latest/${base}`);
    // Assuming the API returns an object with conversion_rates
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
};
