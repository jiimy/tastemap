import React from 'react';
import Articles from './Articles';

type articlesListType = {
  type: 'board' | '',
}

const ArticleList = ({ type }: articlesListType) => {
  return (
    <div>
      <Articles />
    </div>
  );
};

export default ArticleList;