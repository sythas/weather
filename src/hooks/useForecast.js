import { useState, useEffect } from "react";

const useForecast = (position) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!position) return;

    const fetchForecast = async () => {
      const { latitude, longitude } = position;

      try {
        const locationUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
        const location = await fetch(locationUrl).then((res) => res.json());

        const forecastUrl = location.properties.forecast;
        const forecast = await fetch(forecastUrl).then((res) => res.json());

        const { city, state } = location.properties.relativeLocation.properties;

        setForecast({
          place: `${city}, ${state}`,
          periods: forecast.properties.periods.filter(
            (period, i) => i === 0 || period.isDaytime
          ),
        });
      } catch (err) {
        setError(err);
      }
    };

    fetchForecast();
  }, [position]);

  return [forecast, error];
};

export default useForecast;
