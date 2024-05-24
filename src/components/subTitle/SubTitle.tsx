import React from 'react';
import s from './subtitle.module.scss';

type subtitleType = {
  children?: any;
}

const SubTitle = ({ children }: subtitleType) => {
  return (
    <div className={s.subtitle}>
      {children}
    </div>
  );
};

export default SubTitle;