import { LocateStateStore } from "@/store/locate";
import { ExportModalType } from '@/types/modal';
import { useEffect, useRef, useState } from 'react';
import ModalFrame from '../ModalFrame';



const MapModal = ({
  setOnModal,
  dimClick,
  isDim = false,
  className
}: ExportModalType) => {

  // const [route, setRoute] = useState([]);

  // const locate = LocateStateStore((state) => state.locate);


  // useEffect(() => {
  //   console.log('맵 모달', locate)
  //   const map = new window.naver.maps.Map("map", {
  //     center: new window.naver.maps.LatLng(
  //       locate.latitude,
  //       locate.longitude
  //     ), // 초기 지도 중심 좌표 설정
  //     zoom: 14, // 초기 줌 레벨 설정 - 높을수록 확대
  //     zoomControl: true
  //   });

  //   const marker = new naver.maps.Marker({
  //     position: new naver.maps.LatLng(locate.latitude, locate.longitude),
  //     map: map
  //   })

  // }, [route, locate]);

  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (window.naver && window.naver.maps) {
        const map = new window.naver.maps.Map(mapRef.current!, {
          zoom: 15
        });
        setMap(map);
        getCurrentLocation(map);
      }
    };

    // 네이버 지도 API 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=yDj1zz6s7PIruaIuI3kU';
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const getCurrentLocation = (map: naver.maps.Map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = new window.naver.maps.LatLng(latitude, longitude);

          map.setCenter(location);

          // 현재 위치에 마커 추가
          new window.naver.maps.Marker({
            position: location,
            map: map,
            title: '현재 위치'
          });

          // 음식점 검색
          searchPlaces(latitude, longitude, map);
        },
        () => {
          alert('현재 위치를 가져올 수 없습니다.');
        }
      );
    } else {
      alert('Geolocation이 지원되지 않는 브라우저입니다.');
    }
  };

  const searchPlaces = (lat: number, lon: number, map: naver.maps.Map) => {
    const service = new window.naver.maps.Service()

    // 음식점 검색
    service.poiSearch({
      location: new window.naver.maps.LatLng(lat, lon),
      query: '음식점',
      radius: 5000 // 검색 반경 (5km)
    }, (status: any, response: any) => {
      if (status === window.naver.maps.Service.Status.OK) {
        const places = response.result.items;

        places.forEach((place: any) => {
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(place.y, place.x),
            map: map,
            title: place.title
          });
        });
      } else {
        alert('음식점 검색에 실패했습니다.');
      }
    });
  };

  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      모달
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </ModalFrame>
  );
};

export default MapModal;