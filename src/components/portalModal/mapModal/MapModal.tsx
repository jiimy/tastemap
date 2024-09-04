import { LocateStateStore } from "@/store/locate";
import { ExportModalType } from '@/types/modal';
import { useEffect, useRef, useState } from 'react';
import ModalFrame from '../ModalFrame';
import { searchMapApi } from "@/api/map";
import axios from "axios";

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

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // 엔터 키가 눌렸을 때의 처리
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setText('');
    searchMapApi(`${searchAddr}${text.trim()}`).then((res) => {
      console.log('api', res)
    })

    try {
      // const response = await axios.get('/api/map', {
      const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
        params: { text }
      });
      // setResults(response.data.items || []);
      console.log('gpt : ', response)
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  useEffect(() => {
    console.log('api 실행');
    // axios.get("v1/search/local.json", {
    //   params: {
    //     query: '다이소',
    //     sort: "comment",
    //     display: 10,
    //   },
    //   headers: {
    //     "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
    //     "X-Naver-Client-Secret": "7a4xvqlIgm",
    //   },
    // }).then(response => {
    //   // 응답 데이터 처리
    //   console.log('Response data:', response.data);
    // })
    axios.get('/api/map', {
      params: {
        search: `${searchAddr} 다이소`
      }
    }).then((res) => console.log('클라이언트', res.data?.cleanData.items));
    // setResults(response.data.items || []);

  }, [searchAddr])


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