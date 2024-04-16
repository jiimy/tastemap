import React from 'react';
import Articles from './Articles';

type articlesListType = {
  type?: 'board' | '',
}

const ArticleList = ({ type = 'board' }: articlesListType) => {
  return (
    <div>
      <Articles type={'list'}/>
    </div>
  );
};

export default ArticleList;