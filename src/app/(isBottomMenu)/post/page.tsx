import UserInfo from '@/components/userInfo/UserInfo';
import React from 'react';

const Index = () => {
  return (
    <div className='content'>
      취소 <br />완료
      <br />
      작성자 프로필, 닉네임 
      <UserInfo/>
      <br />
      내용
      <textarea name="" id="" cols={30} rows={10}></textarea>
      <br />
      사진추가
      <br />
      장소
    </div>
  );
};

export default Index;