'use client';

import ShareButton from '@/components/button/ShareButton';
import { getCookie } from '@/util/authCookie';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const Index = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      redirect('/login');
    }
  }, [])

  console.log('data', session);

  return (
    <div className='content'>
      <ShareButton />
      <br />
      <button onClick={() => signOut()}>로그아웃</button>
      <br />
      <div className="setting">
        (아이콘)설정
      </div>
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