import React from 'react';
import s from './category.module.scss';
import Link from 'next/link';
import { LocateStateStore } from '@/store/locate';

const Category = () => {
  const { address }= LocateStateStore();

  return (
    <div className={s.category}>
      <h3>카테고리</h3>
      <ul>
        <li><Link href={`/result/search?keyword=${address} 음식점`}> 음식점 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 카페`}> 카페 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 술집`}> 술집 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 여행`}> 여행 </Link></li>
      </ul>
      <h3>핫한 장소</h3>
    </div>
  );
};

export default Category;