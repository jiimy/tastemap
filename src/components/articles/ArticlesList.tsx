import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import { board } from './get';

type articlesListType = {
  type?: 'board' | '',
}

const ArticleList = ({ type = 'board' }: articlesListType) => {
  const [data, setData] = useState();

  console.log('article', board());

  useEffect(() => {
    board();
    console.log('dd', board);
  }, [])

  return (
    <div>
      <Articles theme={'list'}/>
      <Articles theme={'list'}/>
    </div>
  );
};

export default ArticleList;