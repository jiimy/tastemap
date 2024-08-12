'use client';

import UserInfo from '@/components/userInfo/UserInfo';
import React, { useEffect } from 'react';
import s from './postpage.module.scss';
import { useRouter } from 'next/navigation';
import { post } from './post';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    name?: string;
  }
}

const Index = () => {
  const router = useRouter();

  return (
    <div className='content'>
      <form action={post}>
        <div className={s.bar}>
          {/* <span onClick={() => history.go(-1)}>취소</span> */}
          <span onClick={() => router.back()}>취소</span>
          <button type='submit'>완료</button>
        </div>
        <UserInfo theme='post' />
        <div className={s.textarea}>
          <textarea name="content" id="content"></textarea>
        </div>
      </form>
      <div>
        {/* <span className={s.file}>
          <input type="file" name="" id="" />
          사진추가
        </span>
        <span className={s.place}>
          장소
        </span> */}
      </div>
    </div>
  );
};

export default Index;
