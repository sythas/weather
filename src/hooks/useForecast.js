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
          current: forecast.properties.periods[0],
          periods: forecast.properties.periods
            .slice(1)
            .filter((period) => period.isDaytime)
            .slice(0, 5),
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
