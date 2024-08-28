import { LocateStateStore } from "@/store/locate";
import { ExportModalType } from '@/types/modal';
import { useEffect, useRef, useState } from 'react';
import ModalFrame from '../ModalFrame';
import { searchMapApi } from "@/api/map";

const MapModal = ({
  setOnModal,
  dimClick,
  isDim = false,
  className
}: ExportModalType) => {
  const [text, setText] = useState('');
  const [searchAddr, setSearchAddr] = useState('');
  const [route, setRoute] = useState([]);
  const locate = LocateStateStore((state) => state.locate);

  console.log('cc', locate);


  useEffect(() => {
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

  }, [route, locate]);

  useEffect(() => {
    naver.maps.Service.reverseGeocode({
      // coords: new naver.maps.LatLng(locate.latitude, locate.longitude),
      coords: new naver.maps.LatLng(37.482970, 126.932413),
    }, function (status, response) {
      if (status !== naver.maps.Service.Status.OK) {
        return alert('Something wrong!');
      }

      const result = response.v2, // 검색 결과의 컨테이너
        // items = result.results, // 검색 결과의 배열
        address = result.address; // 검색 결과로 만든 주소

      // do Something
      // console.log('var', result, items, address)
      console.log('var', address.jibunAddress)
      setSearchAddr(address.jibunAddress);
    });
  }, [])


  const handleChange = (event:any) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      // 엔터 키가 눌렸을 때의 처리
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setText('');
    searchMapApi(`${searchAddr}${text.trim()}`)
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
      <input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </ModalFrame>
  );
};

export default MapModal;