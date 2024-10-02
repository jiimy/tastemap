'use client';

import React, { useEffect, useState } from 'react';
import { LocateStateStore } from "@/store/locate";

const Map = () => {
  const locate = LocateStateStore((state) => state.locate);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (window.naver && window.naver.maps && locate.latitude !== 0) {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(
          locate.latitude,
          locate.longitude
        ), // 초기 지도 중심 좌표 설정
        zoom: 14, // 초기 줌 레벨 설정 - 높을수록 확대
        zoomControl: true
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(locate.latitude, locate.longitude),
        map: map
      })
    }

  }, [route, locate]);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;