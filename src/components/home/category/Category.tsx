import React, { useEffect, useState } from 'react';
import s from './category.module.scss';
import Link from 'next/link';
import { LocateStateStore } from '@/store/locate';

const Category = () => {
  const { address } = LocateStateStore();

  console.log('add', address);
  //   양식 한식 중식 일식 
  // 고깃집 해산물 / 회 분식
  // 카페 디저트 베이커리 술

  return (
    <div className={s.category}>
      <h3>카테고리</h3>
      <ul>
        <li><Link href={`/result/search?keyword=${address} 음식점`}> 음식점 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 한식`}> 한식 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 중식`}> 중식 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 일식`}> 일식 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 고깃집`}> 고깃집 </Link></li>
        <li><Link href={`/result/search?keyword=${address} 분식`}> 분식 </Link></li>
      </ul>
      <h3>핫한 장소</h3>

    </div>
  );
};

export default Category;