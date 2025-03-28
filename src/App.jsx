import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { fetchCurrentWeather, fetchForecast } from "./utils/api";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const currentWeather = await fetchCurrentWeather(city);
      const forecast = await fetchForecast(city);
      setWeatherData(currentWeather);
      setForecastData(forecast);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("delhi");
  }
  , []);

  return (
    <div className="min-h-screen  p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white my-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-white mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
}

export default App;
