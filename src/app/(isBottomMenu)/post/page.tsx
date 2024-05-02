'use client';

import UserInfo from '@/components/userInfo/UserInfo';
import React, { useEffect } from 'react';
import s from './postpage.module.scss';
import { useRouter } from 'next/navigation';

const Index = () => {
  const router = useRouter();
  // useEffect(() => {
  //   history.pushState(null, "", "");
  // }, [])
  // TODO: 취소 눌렀을시 작성된 내용이 있다면 임시저장

  return (
    <div className='content'>
      <div className={s.bar}>
        {/* <span onClick={() => history.go(-1)}>취소</span> */}
        <span onClick={() => router.back()}>취소</span>
        <span>완료</span>
      </div>
      <UserInfo theme='post' />
      <div className={s.textarea}>
        <textarea name="" id="" cols={30} rows={10} placeholder='내용작성'></textarea>
      </div>
      <div>
        <span className={s.file}>
          <input type="file" name="" id="" />
          사진추가
        </span>
        <span className={s.place}>
          장소
        </span>
      </div>
    </div>
  );
};

export default Index;