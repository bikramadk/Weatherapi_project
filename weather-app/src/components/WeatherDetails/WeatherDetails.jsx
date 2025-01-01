import React from 'react';
import { ThermometerSun, Droplets, Wind } from 'lucide-react';

const WeatherDetails = ({ weather }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center">
        <ThermometerSun className="w-5 h-5 text-gray-500 mr-2" />
        <div>
          <p className="text-sm text-gray-600">Feels like</p>
          <p className="font-semibold">{weather.feels_like}°C</p>
        </div>
      </div>

      <div className="flex items-center">
        <Droplets className="w-5 h-5 text-gray-500 mr-2" />
        <div>
          <p className="text-sm text-gray-600">Humidity</p>
          <p className="font-semibold">{weather.humidity}%</p>
        </div>
      </div>

      <div className="flex items-center">
        <Wind className="w-5 h-5 text-gray-500 mr-2" />
        <div>
          <p className="text-sm text-gray-600">Wind speed</p>
          <p className="font-semibold">{weather.wind_speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;