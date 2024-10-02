'use client';

import UserInfo from '@/components/userInfo/UserInfo';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import s from './postpage.module.scss';
import { useRef, useState } from 'react';
import { postBoard } from '@/api/board';
import MapModal from '@/components/portalModal/mapModal/MapModal';

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [mapmodal, setMapmodal] = useState(false);
  const [isText, setIsText] = useState();

  return (
    <div className='content'>
      <form action={postBoard}>
        <div className={s.bar}>
          {/* <span onClick={() => history.go(-1)}>취소</span> */}
          <span onClick={() => router.back()}>취소</span>
          <button type='submit' disabled={!isText}>완료</button>

        </div>
        <UserInfo theme='post' />

        <div className={s.textarea}>
          <textarea name="content" id="content" onChange={(e: any) => setIsText(e.target.value)}></textarea>
        </div>
        <input name="file" ref={inputFileRef} type="file" multiple />
        <div>
          <button onClick={() => setMapmodal(true)}>장소 추가</button>
          {mapmodal && <MapModal setOnModal={setMapmodal} />}
          <span className={s.place}>
            장소
          </span>
        </div>
      </form>
    </div>
  );
};

export default Index;
