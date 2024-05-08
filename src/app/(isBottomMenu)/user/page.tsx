'use client';

import ShareButton from '@/components/button/ShareButton';
import { getCookie } from '@/util/authCookie';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

const Index = () => {

  useEffect(() => {
    const cookie = getCookie('atk');
    console.log('cc', cookie);
    if (cookie == undefined) {
      console.log('언디파인드');
      redirect('/login');
    }
  }, [])


  return (
    <div className='content'>
      <ShareButton />
      <br />
      (메뉴) 설정
      <div className='follow'>
        <div> <span>2</span> 팔로잉 </div>
        <div><span>0</span> 팔로워</div>
      </div>
      <div>
        <ul>
          <li>작성 포스트 n개</li>
          <li>작성 댓글 n개</li>
          <li>댓글 단 포스트 n개</li>
          <li>좋아요한 포스트 n개</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;