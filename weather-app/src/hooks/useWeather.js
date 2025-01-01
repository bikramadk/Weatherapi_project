import { useState } from 'react';
import { fetchWeatherByCity } from '../services/weatherService';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
};