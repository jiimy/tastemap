'use client';

import Map from '@/components/map/Map';
import SubTitle from '@/components/subTitle/SubTitle';
import Tab from '@/components/tab/Tab';
import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type DataType = {
  img?: string;
  title: string;
  address: string;
}

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [data, setData] = useState<DataType[]>([]);
  const [img, setImg] = useState<string[]>([]);
  const [tab, setTab] = useState(0);
  const [mapPoint, setMapPoint] = useState([]);

  const handleSelectTap = (index: number) => {
    setTab(index);
  };

  useEffect(() => {
    axios.get(`/api/map?query=${keyword}`).then((res) => {
      console.log('rr', res);
      const fetchedData = res.data?.cleanData?.items || [];

      const coordinates = fetchedData.map((item: any) => ({
        mapx: `${item.mapx.slice(0, 3)}.${item.mapx.slice(3)}`,
        mapy: `${item.mapy.slice(0, 2)}.${item.mapy.slice(2)}`
      }));

      setMapPoint(coordinates);

      // [
      //   {
      //     "title": "모힝 비스트로",
      //     "link": "https://blog.naver.com/mohing2012",
      //     "category": "음식점>이탈리아음식",
      //     "description": "",
      //     "telephone": "",
      //     "address": "서울특별시 관악구 봉천동 1598-6 2층",
      //     "roadAddress": "서울특별시 관악구 남부순환로226길 36 2층",
      //     "mapx": "1269535237",
      //     "mapy": "374790924"
      //   },
      //   {
      //     "title": "멘쇼우라멘",
      //     "link": "http://www.instagram.com/menshou_ramen",
      //     "category": "음식점>일식>일본식라면",
      //     "description": "",
      //     "telephone": "",
      //     "address": "서울특별시 관악구 봉천동 1612-6",
      //     "roadAddress": "서울특별시 관악구 남부순환로230길 25",
      //     "mapx": "1269555646",
      //     "mapy": "374790876"
      //   },
      //   {
      //     "title": "스테이크하우스 로아",
      //     "link": "https://www.instagram.com/steak_house_roah",
      //     "category": "음식점>양식",
      //     "description": "",
      //     "telephone": "",
      //     "address": "서울특별시 관악구 봉천동 1627-12 2층",
      //     "roadAddress": "서울특별시 관악구 봉천로62길 7 2층",
      //     "mapx": "1269589582",
      //     "mapy": "374776631"
      //   }
      // ]

      // 각 title에 맞는 이미지를 가져오고 그 결과를 함께 저장
      const fetchImagePromises = fetchedData.map(async (item: DataType) => {
        const response = await axios.get(`/api/mapImage?query=${encodeURIComponent(item.title)}`);
        const imgUrl = response.data?.cleanData?.items[0]?.thumbnail || '';
        return { ...item, img: imgUrl }; // 각 아이템에 이미지 URL 추가
      });

      // 모든 Promise가 해결되면 setData에 결과 저장
      Promise.all(fetchImagePromises).then((result) => {
        setData(result);
      });
    });
  }, [keyword]);

  useEffect(() => {
    if (data?.length > 0) {
      data?.forEach((item, index) => {
        const title = item?.title; // title만 추출
        axios.get(`/api/mapImage?query=${encodeURIComponent(title)}`)
          .then((res) => {
            console.log(`이미지검색 for ${index}}`, res.data?.cleanData.items);
            setImg(prev => [...prev, res.data?.cleanData?.items[0].thumbnail]);
          })
      });
    }
  }, [data])

  if (mapPoint) {
    console.log('좌표 모음', mapPoint);
  }

  return (
    <>
      <SubTitle>
        <Tab tab={[
          { text: '목록으로 보기', select: false },
          { text: '지도로 보기', select: false }
        ]}
          selectTap={handleSelectTap}
        />
      </SubTitle>
      <div className='content'>
        <b>{searchParams}</b> 에 대한 결과입니다.
        {tab === 0 &&
          // 목록
          <ul>
            {data?.map((item: DataType, index) => (
              <li key={index}>
                <div>{item.title}</div>
                <p>{item.address}</p>
                {item.img && (
                  <>
                    {/* <Image src={item?.img} width={100} height={100} alt={item.title} /> */}
                    <img src={item?.img} alt={item.title} />
                  </>
                )}
              </li>
            ))}
          </ul>
        }
        {tab === 1 &&
          // 지도
          <Map />
        }
      </div>
    </>
  );
};

export default Search;