import UserInfo from '@/components/userInfo/UserInfo';
import React from 'react';

const Index = () => {
  return (
    <div className='content'>
      <div className="bar">
        <span>취소</span>
        <span>완료</span>
      </div>
      <UserInfo theme='post' />
      <br />
      <textarea name="" id="" cols={30} rows={10} placeholder='내용작성'></textarea>
      <div>
        <span>
          <input type="file" name="" id="" />
          사진추가
        </span>
        <span>
          장소
        </span>
      </div>
    </div>
  );
};

export default Index;