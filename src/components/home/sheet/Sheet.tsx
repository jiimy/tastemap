'use client';

import React, { useState } from 'react';
import Category from '../category/Category';
import s from './sheet.module.scss'
import classNames from 'classnames';

const Sheet = () => {
  const [sheet, setSheet] = useState(false);

  return (
    <div className={classNames([s.sheet], {
      [s.is_toggle]: sheet
    })}>
      <div className={s.sheet_header} onClick={() => setSheet(!sheet)}>
        <span></span>
      </div>
      <Category />
    </div>
  );
};

export default Sheet;