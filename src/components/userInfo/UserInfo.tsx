import React from 'react';
import s from './userinfo.module.scss';

const UserInfo = () => {
  return (
    <div>
      <div className={s.img}>
        <img src="" alt="프로필이미지" />
      </div>
      <span>닉네임</span>
      <span>@아이디</span>
    </div>
  );
};

export default UserInfo;