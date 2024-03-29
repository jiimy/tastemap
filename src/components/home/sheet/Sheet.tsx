import React from 'react';
import Category from '../category/Category';
import s from './sheet.module.scss'

const Sheet = () => {
  return (
    <div className={s.sheet}>
      <div className={s.sheet_header}>
        <span></span>
      </div>
        <Category />
    </div>
  );
};

export default Sheet;