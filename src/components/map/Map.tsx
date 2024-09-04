'use client';

import React, { useEffect, useState } from 'react';
import { LocateStateStore } from "@/store/locate";

const Map = () => {
  const locate = LocateStateStore((state) => state.locate);
  const [route, setRoute] = useState([]);
  // const getLocation = 
  // useEffect(() => {
  //   if(locate.latitude !== 0) {
  //     console.log('저장된거 : ', locate);
  //   }
  // }, [locate])

  // useEffect(() => {
  //   if (route.length > 0) {
  //     const map = new window.naver.maps.Map("map", {
  //       center: new window.naver.maps.LatLng(
  //         getLocation.latitude,
  //         getLocation.longitude
  //       ), // 초기 지도 중심 좌표 설정
  //       zoom: 14, // 초기 줌 레벨 설정 - 높을수록 확대
  //     });

  //     // 경로를 표시할 Polyline 추가
  //     const polyline = new window.naver.maps.Polyline({
  //       map,
  //       path: route,
  //       strokeColor: "#ff0000", // 선 색상
  //       strokeWeight: 3, // 선 굵기
  //     });

  //     const path = route.map((coordPair) => {
  //       const [latitude, longitude] = coordPair;
  //       return new window.naver.maps.LatLng(longitude, latitude);
  //     });

  //     // 출발지, 경유지, 도착지 마커 추가
  //     const markers = route
  //       .map((coordinate, index) => {
  //         if (index === 0 || index === path.length - 1) {
  //           return new window.naver.maps.Marker({
  //             position: coordinate,
  //             map,
  //           });
  //         }
  //         return null;
  //       })
  //       .filter((marker) => marker !== null);

  //     return () => {
  //       // 컴포넌트가 언마운트되면 지도 객체를 정리
  //       markers.forEach((marker: any) => marker.setMap(null));
  //       polyline.setMap(null);
  //     };
  //   }
  // }, [route, getLocation]);

  return (
    <div>
      지도 테스트
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Map;