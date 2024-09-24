'use client';

import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type DataType = {
  img?: string;
  title: string;

}

// const a = {
//   "title": "동경산책 서울대입구점",
//   "link": "http://www.instagram.com/dongkyungsancheck",
//   "category": "음식점>일식>일식당",
//   "description": "",
//   "telephone": "",
//   "address": "서울특별시 관악구 봉천동 1604-8 2층",
//   "roadAddress": "서울특별시 관악구 관악로14길 30 2층",
//   "mapx": "1269542000",
//   "mapy": "374789029"
// }

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [data, setData] = useState<DataType[]>([]);
  const [img, setImg] = useState<string[]>([]);

  // 카테고리 선택, 검색창등 검색했을때 결과 보여주는 페이지
  // useEffect(() => {
  //   axios.get(`/api/map?query=${keyword}`).then((res) => {
  //     console.log('res', res);
  //     setData(res.data?.cleanData?.items);


  //     // const fetchedData = res.data?.cleanData?.items || [];
  //     // fetchedData.forEach((item:any) => {
  //     //   axios.get(`/api/mapImage?query=${keyword}`)
  //     //     .then((res) => {
  //     //       console.log('이미지검색 for item', res.data);
  //     //     })
  //     //     .catch((error) => {
  //     //       console.error(`Error fetching image for ${item}:`, error);
  //     //     });
  //     // });
  //   })
  // }, [keyword])
  useEffect(() => {
    // keyword에 따라 데이터를 가져옴
    axios.get(`/api/map?query=${keyword}`).then((res) => {
      const fetchedData = res.data?.cleanData?.items || [];

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

  return (
    <div>
      검색 페이지 {searchParams}
      {/* <ul>
        {data?.map((item: any, index) => (
          <li key={index}>
            {item?.title}
          </li>
        ))}
      </ul>
      <div>
        {img.map((item, index) => (
          <div key={index}>
            <div>
              {item}
              <br/>
              <br />
            </div>
            <div>
              <img src={item} alt="" />
            </div>
          </div>
        ))}
      </div> */}
      <ul>
        {data?.map((item: DataType, index) => (
          <li key={index}>
            <p>{item.title}</p>
            {item.img && (
              <Image src={item?.img} width={100} height={100} alt={item.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;