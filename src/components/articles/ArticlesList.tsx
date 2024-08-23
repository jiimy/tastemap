
import React, { useEffect, useState } from 'react';
import { board } from './get';
import Articles from './Articles';

type articlesListType = {
  type?: 'board' | '',
}

const ArticleList = ({ type = 'board' }: articlesListType) => {
  const [data, setData] = useState([]);

  // useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 board 함수를 호출
  useEffect(() => {
    const result = board().then((res) => {
      console.log('cc', res.result.rows);
      setData(res.result.rows);
    }); // board 함수를 호출하여 데이터 가져오기
    console.log('총데이터', result, data);
  }, []);


  return (
    <div>
      {data?.map((item, i) => (
        <Articles theme={'list'} data={item} key={i} /> 
      ))}
    </div>
  );
};

export default ArticleList;