'use client';

import { useGeoLocation } from "@/hooks/useGeoLocation";
import { LocateStateStore } from "@/store/locate";
import { useEffect, useCallback } from "react";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 1,
  maximumAge: 1000 * 3600 * 24,
}

const Location = () => {
  const { location, error } = useGeoLocation(geolocationOptions);

  const { setLocate, setAddress } = LocateStateStore();

  const handleLocationSuccess = useCallback(() => {
    if (location) {
      setLocate(location);

      setTimeout(() => {
        naver.maps.Service?.reverseGeocode({
          coords: new naver.maps.LatLng(location.latitude, location.longitude),
        }, function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }
  
          const result = response.v2;
          const address = result.address;
  
          const addressLength = address.jibunAddress.trim().split(" ").length;
          const search1 = address.jibunAddress.trim().split(" ")[addressLength - 2];
          const search2 = address.jibunAddress.trim().split(" ")[addressLength - 1];
          console.log('변환', search1);
          setAddress(`${search1} ${search2}`);
        });
      }, 300);
    }
  }, [location, setLocate, setAddress]);

  useEffect(() => {
    if (error) {
      console.error(`Location error: ${error}`);
      // 자동 재시도 로직을 여기에 추가할 수 있습니다.
    } else {
      handleLocationSuccess();
    }
  }, [error, location, handleLocationSuccess]);

  return null;
}

export default Location;