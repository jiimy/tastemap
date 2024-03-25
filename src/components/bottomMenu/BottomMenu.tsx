import React from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';

const BottomMenu = () => {
  return (
    <div className={s.bottom_menu}>
      <ul>
        <li><Link href="/">홈</Link></li>
        <li><Link href="/articles">게시글</Link></li>
        <li><Link href="/post">글쓰기</Link></li>
        <li><Link href="/alarm">알림</Link></li>
        <li><Link href="/user">마이</Link></li>
      </ul>
    </div>
  );
};

export default BottomMenu;