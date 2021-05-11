import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position.coords);
      },
      (err) => {
        setError(err);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return [location, error];
};

export default useLocation;
