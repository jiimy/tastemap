import React from 'react';
import s from './bottomMenu.module.scss';

const BottomMenu = () => {
  return (
    <div className={s.bottom_menu}>
      <ul>
        <li>홈</li>
        <li>탐색</li>
        <li>글쓰기</li>
        <li>알림</li>
        <li>마이</li>
      </ul>
    </div>
  );
};

export default BottomMenu;