import ArticleList from '@/components/articles/ArticlesList';
import React from 'react';
import s from './articlespage.module.scss';

const Index = () => {
  return (
    <div className='content'>
      <div className={s.tab}>
        <div className="tab_nav">전체</div>
        <div className="tab_nav">구독</div>
      </div>
      <div className={s.articles}>
        <ArticleList />
      </div>
    </div>
  );
};

export default Index;