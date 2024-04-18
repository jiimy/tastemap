import UserInfo from '@/components/userInfo/UserInfo';
import React from 'react';
import s from './postpage.module.scss';

const Index = () => {
  return (
    <div className='content'>
      <div className={s.bar}>
        <span>취소</span>
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