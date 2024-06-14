'use client';

import ArticleList from '@/components/articles/ArticlesList';
import React, { useState } from 'react';
import s from './articlespage.module.scss';
import SubTitle from '@/components/subTitle/SubTitle';
import classNames from 'classnames';
import Tab from '@/components/tab/Tab';

const Index = () => {
  const [tab, setTab] = useState(0);

  const handleSelectTap = (index: number) => {
    setTab(index);
  };

  return (
    <div className='content'>
      <SubTitle>
        {tab}
        <Tab tab={[
          { text: '전체', select: false },
          { text: '구독', select: false }
        ]}
          selectTap={handleSelectTap}
        />
      </SubTitle>
      <div>
        {tab === 0 &&
        // 전체
          <ArticleList type=''/>
        }
        {tab === 1 &&
        // 구독
          <ArticleList />
        }
      </div>
    </div>
  );
};

export default Index;