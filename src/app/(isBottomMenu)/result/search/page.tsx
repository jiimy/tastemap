'use client';

import axios from 'axios';
import { useParams, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [data, setData] = useState([]);

  // 카테고리 선택, 검색창등 검색했을때 결과 보여주는 페이지
  useEffect(() => {
    axios.get(`/api/map?query=${keyword}`).then((res) => {
      setData(res.data?.cleanData?.items);
    })
      .then(() => {
        axios.get(`/api/mapImage?query=${keyword}`).then((res) => {
          console.log('이미지검색', res.data)
        })
      })
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        검색 페이지 {searchParams}
        <ul>
          {data?.map((item: any, index) => (
            <li key={index}>{item?.title}</li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

export default Search;