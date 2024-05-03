'use client';

import Articles from '@/components/articles/Articles';
import React, { useEffect, useState } from 'react';
import s from './alarmpage.module.scss';

// 팔로워한사람이 게시글 올렸을시, 상대방이 날 팔로우 했을시, 답글, 좋아요

const Index = () => {
  return (
    <div className='content'>
      <div className={s.alarm}>
          <>알림 메시지</>
        {/* 알림이 없을 경우  */}
        {/* <div>아직 알림이 없습니다.</div> */}

      </div>
    </div>
  );
};

export default Index;