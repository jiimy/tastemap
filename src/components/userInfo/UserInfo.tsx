import React from 'react';
import s from './userinfo.module.scss';
import Imaage from 'next/image'
import classNames from 'classnames';

type userInfoStyle = {
  theme?: 'mypage' | 'post'
}

const UserInfo = ({ theme = 'mypage' }: userInfoStyle) => {
  return (
    <div className={classNames([s.userinfo], {
      [s.is_post]: theme === 'post'
    })}>
      <div className={s.img}>
        <img src="https://source.unsplash.com/random" alt="프로필 이미지" />
        {/* <Imaage src="https://source.unsplash.com/random" alt="프로필 이미지" width={200} height={200}/> */}
      </div>
      <span>닉네임</span>
      <span>@아이디</span>
    </div>
  );
};

export default UserInfo;