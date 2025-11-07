import { useState } from "react";
import { getCurrentByCity, getForecastByCity } from "../api/openWeather";

export default function useWeather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchByCity = async (c) => {
    const query = (c || city).trim();
    if (!query) return;

    // ✅ Debug log (helps us see what is happening)
    console.log("Querying city:", query);

    setLoading(true);
    setError("");

    try {
      const [current, fc] = await Promise.all([
        getCurrentByCity(query),
        getForecastByCity(query),
      ]);

      setData(current);
      setForecast(fc);
      setCity(query);
    } catch (e) {
      console.error("API ERROR:", e);

      // ✅ Improved error handling
      if (e.response?.status === 404) {
        setError("City not found. Try another city.");
      } else if (e.response?.status === 401) {
        setError("Invalid API key. Check your .env file.");
      } else {
        setError("Network or API error occurred.");
      }

      setData(null);
      setForecast(null);
    }

    setLoading(false);
  };

  return { city, setCity, data, forecast, loading, error, fetchByCity };
}
