import axios from "axios";

const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const UNITS = import.meta.env.VITE_UNITS || "metric";
const BASE = "https://api.openweathermap.org/data/2.5";

export async function getCurrentByCity(city) {
  const { data } = await axios.get(`${BASE}/weather`, {
    params: { q: city, appid: API_KEY, units: UNITS },
  });
  return data;
}

export async function getForecastByCity(city) {
  const { data } = await axios.get(`${BASE}/forecast`, {
    params: { q: city, appid: API_KEY, units: UNITS },
  });
  return data;
}
