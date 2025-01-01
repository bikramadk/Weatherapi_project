
import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { useWeather } from './hooks/useWeather';

const App = () => {
  const { weather, loading, error, getWeather } = useWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Weather App
        </h1>

        <SearchBar onSearch={getWeather} loading={loading} />

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center text-gray-600">
            Loading weather data...
          </div>
        )}

        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;