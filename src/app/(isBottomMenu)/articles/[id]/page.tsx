'use client';

import { getBoardId } from '@/api/board';
import Article from '@/components/articles/Articles';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ArticleDetail = () => {
  // const { id } = useParams(); // TODO:이건 왜 안돼지
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<any>();

  useEffect(() => {
    getBoardId(params?.id as string).then((res) => {
      console.log('res', res, res[0]);
      setData(res[0]);
    });
    // console.log('data', data);
  }, []);


  return (
    <div>
      {data?.name}
      서브페이지
      <Article theme={'info'} data={data as any} />
    </div>
  );
};

export default ArticleDetail;