import React from 'react';
import s from './button.module.scss';
import classNames from 'classnames';

const Button = ({ children }: any) => {
  const count = React.Children.count(children);
  console.log("Children count:", count);
  
  return (
    <div role='button' className={classNames([s.btn], {
      [s.btn_flex]: count > 1
    })}>
      {children}
    </div>
  );
};

export default Button;