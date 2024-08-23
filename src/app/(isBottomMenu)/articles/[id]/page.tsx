'use client';

import Article from '@/components/articles/Articles';
import { useParams } from 'next/navigation';
import React from 'react';

const ArticleDetail = () => {
  const { id } = useParams() as { id: string };

  console.log('id', id);

  return (
    <div>
      서브페이지
      {/* <Article theme={'info'} />  */}
    </div>
  );
};

export default ArticleDetail;