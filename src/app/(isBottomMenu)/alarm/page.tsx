'use client';

import Articles from '@/components/articles/Articles';
import React, { useEffect, useState } from 'react';
import s from './alarmpage.module.scss';

// 구독한 사람의 게시글, 답글, 좋아요, 

const Index = () => {
  const [tab, setTab] = useState(-1);

  const clickTab = (index: number) => {
    setTab(index);
  }

  return (
    <div className='content'>
      {/* 구독한 사람이 게시글을 올릴 경우 */}
      <div className={s.tab}>
        <div className={s.tab_nav} onClick={() => clickTab(1)}>게시글</div>
        <div className={s.tab_nav} onClick={() => clickTab(2)}>알림</div>
      </div>
      <div className={s.alarm}>
        {
          tab === 1 &&
          <Articles theme={'list'} />
        }
        {
          tab === 2 &&
          <>알림 메시지</>
        }
        {/* 알림이 없을 경우  */}
        {/* <div>아직 알림이 없습니다.</div> */}

      </div>
    </div>
  );
};

export default Index;