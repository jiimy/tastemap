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
  const { setLocate, setAddress } = LocateStateStore()
  // get
  // const getLocation = useRecoilValue(locationSelector);

  useEffect(() => {
    console.log('location', location);
    if (location != undefined) {
      setLocate(location);

      naver.maps.Service?.reverseGeocode({
        coords: new naver.maps.LatLng(location.latitude, location.longitude),
      }, function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }

        const result = response.v2, // 검색 결과의 컨테이너
          address = result.address; // 검색 결과로 만든 주소

        const addressLength = address.jibunAddress.trim().split(" ").length;
        const search1 = address.jibunAddress.trim().split(" ")[`${addressLength - 2}`];
        const search2 = address.jibunAddress.trim().split(" ")[`${addressLength - 1}`];
        // console.log('최종 찾는 단어', search1, search2, addressLength)
        setAddress(`${search1} ${search2}`)
      });
    }
  }, [location])

  // console.log('저장됨? ', location);

  return null;
}

export default Location