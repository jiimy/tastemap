'use client';

import React, { useEffect, useState } from 'react';
import s from './userinfo.module.scss';
import Imaage from 'next/image'
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Gravatar from "react-gravatar";

type userInfoStyle = {
  theme?: 'mypage' | 'post'
  name?: string;
}

const UserInfo = ({ theme = 'mypage', name }: userInfoStyle) => {
  const { data: session } = useSession();

  // console.log('그라바타', session, session?.user?.email);

  return (
    <div className={classNames([s.userinfo], {
      [s.is_post]: theme === 'post'
    })}>
      <div className={s.img}>
        <Gravatar email={name ? name : session?.user?.name as string} className={s.userProfile} />
      </div>
      <span>{name ? name : session?.user?.name}</span>
    </div>
  );
};

export default UserInfo;