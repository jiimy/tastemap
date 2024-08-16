'use client';

import UserInfo from '@/components/userInfo/UserInfo';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { post } from './post';
import s from './postpage.module.scss';
import { useRef, useState } from 'react';
import { PutBlobResult } from '@vercel/blob';

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <div className='content'>
      <form action={post}>
        <div className={s.bar}>
          {/* <span onClick={() => history.go(-1)}>취소</span> */}
          <span onClick={() => router.back()}>취소</span>
          <button type='submit'>완료</button>
          <input type="text" name="name" id="name" value={session?.user?.email as string} />
        </div>
        <UserInfo theme='post' />
        <div className={s.textarea}>
          <textarea name="content" id="content"></textarea>
        </div>
        <input name="file" ref={inputFileRef} type="file" multiple />
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
