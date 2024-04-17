import React from 'react';
import s from './category.module.scss';

const Category = () => {
  return (
    <div className={s.category}>
      <ul>
        <li>음식점</li>
        <li>카페</li>
        <li>술집</li>
        <li>쇼핑/여행</li>
        <li>가오픈/신상</li>
        <li>배달주문</li>
        <li>랭킹</li>
        <li>모임/약속</li>
      </ul>
      <h3>핫한 장소</h3>
    </div>
  );
};

export default Category;