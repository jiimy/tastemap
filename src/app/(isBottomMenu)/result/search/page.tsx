'use client';

import axios from 'axios';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type DataType = {
  title: string;
}

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [data, setData] = useState<DataType[]>([]);
  const [img, setImg] = useState<string[]>([]);

  // 카테고리 선택, 검색창등 검색했을때 결과 보여주는 페이지
  useEffect(() => {
    axios.get(`/api/map?query=${keyword}`).then((res) => {
      setData(res.data?.cleanData?.items);

      // const fetchedData = res.data?.cleanData?.items || [];
      // fetchedData.forEach((item:any) => {
      //   axios.get(`/api/mapImage?query=${keyword}`)
      //     .then((res) => {
      //       console.log('이미지검색 for item', res.data);
      //     })
      //     .catch((error) => {
      //       console.error(`Error fetching image for ${item}:`, error);
      //     });
      // });
    })
  }, [keyword])

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
      <ul>
        {data?.map((item: any, index) => (
          <li key={index}>
            {item?.title}
            {/* <Image src={img[index]} width={100} height={100} alt='11' /> */}
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
              {/* <Image src={item} width={100} height={100} alt='11' /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;