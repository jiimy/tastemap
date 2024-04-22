'use client';

import { useGeoLocation } from "@/hooks/useGeoLocation";
import { LocateStateStore } from "@/store/locate";
import { useEffect } from "react";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
}

const Location = () => {
  const { location, error } = useGeoLocation(geolocationOptions);
  // const { locate, setLocate } = LocateStateStore(); 

  // set
  // const increasePopulation = LocateStateStore(state => state.setLocate);
  // const { setLocate } = LocateStateStore();
  // const setLocation = useSetRecoilState(locationSelector);
  const setLocate = LocateStateStore((state) => state.setLocate)
  // get
  // const getLocation = useRecoilValue(locationSelector);

  useEffect(() => {
    console.log('location', location);
    if (location) {
      setLocate(location)
    }
  }, [location])

  // console.log('저장됨? ', location);

  return null;
}

export default Location