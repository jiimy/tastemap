'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LocateStateStore } from "@/store/locate";
import s from './map.module.scss';

const Map = () => {
  const locate = LocateStateStore((state) => state.locate);
  const [route, setRoute] = useState([]);
  const [snapshotUrl, setSnapshotUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (window.naver && window.naver.maps && locate.latitude !== 0) {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표 설정
        zoom: 14,
        zoomControl: true
      });

      const markers = [
        { lat: 37.5665, lng: 126.9780 }, // 서울
        { lat: 37.5700, lng: 126.9760 }, // 예시 마커 1
        { lat: 37.5700, lng: 126.9820 }, // 예시 마커 2
      ];

      markers.forEach(marker => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(marker.lat, marker.lng),
          map: map
        });
      });

      const pathCoords = markers.map(marker => new naver.maps.LatLng(marker.lat, marker.lng));
      new naver.maps.Polyline({
        path: pathCoords,
        strokeColor: '#FF0000',
        strokeWeight: 3,
        map: map
      });
    }
  }, [route, locate]);

  const takeSnapshot = () => {
    const clientId = 'ugm16gkcw2';
    const clientSecret = 'aJmwY6iVKLkH9wEp1aOygoTbeU4T8mbfh1rQpvUl';
    const center = '126.9780,37.5665';
    const zoom = 14; // 줌 레벨
    const width = 500;
    const height = 500;

    const markers = [
      { lat: 37.5665, lng: 126.9780 },
      { lat: 37.5700, lng: 126.9760 },
      { lat: 37.5700, lng: 126.9820 },
    ];
    const path = markers.map(marker => `${marker.lng},${marker.lat}`).join('|'); // 경로 데이터

    const markerParam = markers.map((marker, index) =>
      `markers=type:n|size:small|color:Blue|label:${index + 1}|pos:${marker.lng}%20${marker.lat}`
    ).join('&');

    const pathParam = `path=${path}`;

    const url = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?center=${center}&level=${zoom}&w=${width}&h=${height}&${markerParam}&${pathParam}&X-NCP-APIGW-API-KEY-ID=${clientId}&X-NCP-APIGW-API-KEY=${clientSecret}`;

    setSnapshotUrl(url);
  };

  useEffect(() => {
    console.log('snapshotUrl', snapshotUrl);
  }, [snapshotUrl]);

  return (
    <div className={s.map_container}>
      <div id="map" className={s.map}></div>
      <button className={s.btn} onClick={takeSnapshot}>스냅샷 저장</button>
      {snapshotUrl && (
        <img style={{ position: 'absolute', width: '100px', height: '100px', margin: 'auto', right: '0', left: '0' }} src={snapshotUrl} alt="지도 스냅샷" />
      )}
    </div>
  );
};

export default Map;