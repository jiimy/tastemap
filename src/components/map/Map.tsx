'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LocateStateStore } from "@/store/locate";
import html2canvas from "html2canvas";
import s from './map.module.scss';

const Map = () => {
  const locate = LocateStateStore((state) => state.locate);
  const [route, setRoute] = useState([]);

  const [snapshotUrl, setSnapshotUrl] = useState<string | undefined>(undefined);

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

  const takeSnapshot = () => {
    const clientId = 'ugm16gkcw2'; // 네이버 클라이언트 ID
    const clientSecret = 'aJmwY6iVKLkH9wEp1aOygoTbeU4T8mbfh1rQpvUl'; // 네이버 클라이언트 Secret
    const center = '126.9780,37.5665'; // 지도 중심 좌표 (서울)
    const zoom = 14; // 줌 레벨
    const width = 500; // 이미지 가로 크기
    const height = 500; // 이미지 세로 크기
    const url = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?center=${center}&level=${zoom}&w=${width}&h=${height}&X-NCP-APIGW-API-KEY-ID=${clientId}&X-NCP-APIGW-API-KEY=${clientSecret}`;

    setSnapshotUrl(url); // 지도 스냅샷 URL을 저장
  };


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