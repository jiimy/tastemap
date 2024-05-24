'use client';

import ArticleList from '@/components/articles/ArticlesList';
import React, { useState } from 'react';
import s from './articlespage.module.scss';
import SubTitle from '@/components/subTitle/SubTitle';
import classNames from 'classnames';

const Index = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className='content'>
      <SubTitle>
        <div className={classNames([s.tab_nav], {
          [s.is_select]: tab === 0
        })} onClick={() => setTab(0)}>전체</div>
        <div className={classNames([s.tab_nav], {
          [s.is_select]: tab === 1
        })} onClick={() => setTab(1)}>구독</div>
      </SubTitle>
      <div className={s.articles}>
        <ArticleList />
      </div>
    </div>
  );
};

export default Index;