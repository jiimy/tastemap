import React from 'react';
import s from './articles.module.scss';
import { BookmarkIcon, HeartIcon } from '../imgs';
import CommentIcon from '../imgs/CommentIcon';
import Link from 'next/link';

const ArticleInfo = () => {
  return (
    <Link className={s.articles} href="">
      - 프로필이미지, 닉네임, 아이디, 상태-좋아요,추천해요, 아쉬워요
      <br />
      내용 - 3wnfRkwlaks qhduwlrp.
      <div className="content"></div>
      <div className={s.img}>
        {/* 이미지가 여러개 있다면 슬라이드 */}
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className={s.locate}>
        서울시 관악구 봉천동 블라블라블라
      </div>
    </Link>
  );
};

export default ArticleInfo;