import React from 'react';
import { BookmarkIcon, SearchIcon } from '../imgs';
import s from './header.module.scss';

type HeaderType = {
  theme: 'search' | 'article', // 지도 검색, 
  title?: string
}

const Header = ({ theme = 'search', title }: HeaderType) => {
  return (
    <header className={s.header}>
      {theme === 'search' && <>
        <input type="search" className="search" />
        <div><SearchIcon /></div>
      </>
      }
      {theme === 'article' && <>
        <div>{title}</div>
      </>
      }
    </header>
  );
};

export default Header;