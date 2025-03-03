'use client'
import React, { useState, useEffect } from "react";

function DateTableCurrency() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };

    updateTime(); // Mettre à jour immédiatement
    const interval = setInterval(updateTime, 1000); // Mettre à jour chaque seconde

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-yellow-500 mb-2">
        📅 Cours de change d Aujourd hui
      </h1>
      <h2 className="text-lg text-gray-700 font-medium">{currentTime}</h2>
    </div>
  );
}

export default DateTableCurrency;
