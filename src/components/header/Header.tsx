import React from 'react';
import { BookmarkIcon, SearchIcon } from '../imgs';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <input type="search" className="search" />
      </div>
      <div><SearchIcon/></div>
    </header>
  );
};

export default Header;