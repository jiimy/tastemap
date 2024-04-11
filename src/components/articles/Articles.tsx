import React from 'react';
import s from './articles.module.scss';
import { BookmarkIcon, HeartIcon } from '../imgs';
import CommentIcon from '../imgs/CommentIcon';
import Link from 'next/link';

// type articlesListType = {
//   type: 'board' | '',
// }

const Articles = () => {
  return (
    <Link className={s.articles} href="">
      - 프로필이미지, 닉네임, 아이디, 상태-좋아요,추천해요, 아쉬워요
      <div className={s.etc}>
        <span><HeartIcon /> 2</span>
        <span><CommentIcon /> 2</span>
        <span><BookmarkIcon/> 2</span>

      </div>
    </Link>
  );
};

export default Articles;