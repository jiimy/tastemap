// 'use client';

import { getBoardId } from '@/api/board';
import Article from '@/components/articles/Articles';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ArticleDetail = () => {
  // const { id } = useParams<id ();
  const params = useParams<{ id : string}>();
  const [data, setData] = useState();

  console.log('id', params?.id);
  useEffect(() => {
    const result = getBoardId(params?.id as string).then((res) => {
      console.log('cc', result);
      // setData(res.result.rows);
    }); // board 함수를 호출하여 데이터 가져오기
  }, []);

  return (
    <div>
      서브페이지
      {/* <Article theme={'info'} />  */}
    </div>
  );
};

export default ArticleDetail;