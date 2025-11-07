import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Spinner from "./components/Spinner";
import ErrorBanner from "./components/ErrorBanner";
import useWeather from "./hooks/useWeather";

const DEFAULT_CITY = import.meta.env.VITE_DEFAULT_CITY || "Bengaluru";

export default function App() {
  const {
    city,
    setCity,
    data,
    forecast,
    loading,
    error,
    fetchByCity,
  } = useWeather();

  useEffect(() => {
    fetchByCity(DEFAULT_CITY);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="appTitle">Weather Dashboard</h1>

        {/* ✅ SearchBar gets props, nothing else */}
        <SearchBar value={city} onChange={setCity} onSearch={fetchByCity} />
      </header>

      {/* ✅ Loading */}
      {loading && (
        <div className="section">
          <Spinner label="Fetching weather..." />
        </div>
      )}

      {/* ✅ Error */}
      {!loading && error && (
        <div className="section">
          <ErrorBanner message={error} />
        </div>
      )}

      {/* ✅ Weather data */}
      {!loading && !error && data && (
        <>
          <section className="section">
            <CurrentWeather data={data} />
          </section>

          {forecast && (
            <section className="section">
              <Forecast forecast={forecast} />
            </section>
          )}
        </>
      )}
    </div>
  );
}
