import React from 'react';
import s from './articles.module.scss';
import { BookmarkIcon, HeartIcon } from '../imgs';
import CommentIcon from '../imgs/CommentIcon';
import Link from 'next/link';
import UserInfo from '../userInfo/UserInfo';
import classNames from 'classnames';
import ShopEmoji from '../shopEmoji/ShopEmoji';

type articlesListType = {
  type: 'info' | 'list', // info: 게시글 상세, list: 글 목록
}

const ArticleUi = ({ type }: articlesListType) => {
  return (
    <>
      <div>
        <UserInfo />
        <ShopEmoji status='good' />
      </div>
      <div className={classNames([s.content], {
        'is_info': type === 'info'
      })}>
        다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 
      </div>
      {type == 'info' && <>
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
      </>
      }
      {type == 'list' && <>
        <div className={s.etc}>
          <span><HeartIcon /> 2</span>
          <span><CommentIcon /> 2</span>
          <span><BookmarkIcon /> 2</span>
        </div>
      </>}
    </>
  )
}

const Articles = ({ type = 'list' }: articlesListType) => {
  return (
    <>
      {
        type == 'list' &&
        <Link className={s.articles} href="">
          <ArticleUi type={type} />
        </Link>
      }
      {
        type == 'info' &&
        <div className={s.articles}>
          <ArticleUi type={type} />
        </div>
      }
    </>
  );
};

export default Articles;