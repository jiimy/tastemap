'use client';

import Articles from '@/components/articles/Articles';
import React, { useEffect, useState } from 'react';
import s from './alarmpage.module.scss';
import SubTitle from '@/components/subTitle/SubTitle';
import AlarmList from '@/components/alarm/AlarmList';
import classNames from 'classnames';

// 팔로워한사람이 게시글 올렸을시, 상대방이 날 팔로우 했을시, 답글, 좋아요

const Index = () => {
  const [tab, setTab] = useState(0);


  return (
    <div className='content'>
      <div className={s.alarm}>
        <SubTitle>
          <div className={classNames([s.tab_nav], {
            [s.is_select]: tab === 0
          })} onClick={() => setTab(0)}>전체</div>
          <div className={classNames([s.tab_nav], {
            [s.is_select]: tab === 1
          })} onClick={() => setTab(1)}>댓글 및 언급</div>
        </SubTitle>
        {/* 알림이 없을 경우  */}
        {/* <div>아직 알림이 없습니다.</div> */}
        <div className={s.articles}>
          <AlarmList />
        </div>
      </div>
    </div>
  );
};

export default Index;