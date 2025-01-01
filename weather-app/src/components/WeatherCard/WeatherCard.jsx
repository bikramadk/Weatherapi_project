import React from 'react';
import { Cloud, CloudRain, Sun } from 'lucide-react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (icon) => {
    switch (icon) {
      case 'clouds':
        return <Cloud className="w-16 h-16 text-gray-600" />;
      case 'rain':
        return <CloudRain className="w-16 h-16 text-blue-600" />;
      case 'clear':
        return <Sun className="w-16 h-16 text-yellow-500" />;
      default:
        return <Cloud className="w-16 h-16 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {weather.city}, {weather.country}
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        {getWeatherIcon(weather.icon)}
      </div>

      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-gray-800">
          {weather.temp}°C
        </p>
        <p className="text-gray-600 mt-1">{weather.description}</p>
      </div>

      <WeatherDetails weather={weather} />
    </div>
  );
};

export default WeatherCard;