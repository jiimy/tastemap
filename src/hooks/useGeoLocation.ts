import { useState, useEffect, useCallback } from "react";

interface ILocation {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (
  options = {},
  retryAttempts = 3,
  retryDelay = 3000
) => {
  const [location, setLocation] = useState<ILocation | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState<number>(0);

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ latitude, longitude });
    setError(null);
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
    if (attempt < retryAttempts) {
      setAttempt((prevAttempt) => prevAttempt + 1);
      setTimeout(() => {
        getLocation();
      }, retryDelay);
    }
  };

  const getLocation = useCallback(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [attempt, options, retryAttempts, retryDelay]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { location, error };
};
