
import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import { getBoard, getPet } from '@/api/board';

type articlesListType = {
  type?: 'board' | '',
}

const ArticleList = ({ type = 'board' }: articlesListType) => {
  const [data, setData] = useState([]);

  // useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 board 함수를 호출
  useEffect(() => {
    getBoard().then((res) => {
      console.log('cc', res.result.rows);
      setData(res.result.rows);
    });

    // NOTE: 테스트 코드
    // getPet().then((res) => {
    //   console.log('cc', res.result.rows);
    //   setData(res.result.rows);
    // });
  }, [data]);


  return (
    <div>
      {data?.map((item, i) => (
        <Articles theme={'list'} data={item} key={i} />
      ))}
    </div>
  );
};

export default ArticleList;