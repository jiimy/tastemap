import React from 'react';
import s from './articles.module.scss';
import { BookmarkIcon, HeartIcon } from '../imgs';
import CommentIcon from '../imgs/CommentIcon';
import Link from 'next/link';
import UserInfo from '../userInfo/UserInfo';
import classNames from 'classnames';
import ShopEmoji from '../shopEmoji/ShopEmoji';

type articlesListType = {
  theme: 'info' | 'list', // info: 게시글 상세, list: 글 목록
}

const ArticleUi = ({ theme }: articlesListType) => {
  return (
    <>
      <div className={classNames('', {
        [s.list_title]: theme == 'list'
      })}>
        <UserInfo theme='post' />
        <ShopEmoji status='good' />
      </div>
      <div className={classNames([s.content], {
        'is_info': theme == 'info'
      })}>
        다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가 다람쥐 헌 쳇바퀴에 돌아가
      </div>
      <div className={classNames([s.img], {
        [s.list_img]: theme == 'list'
      })}>
        
        {/* post 에서 이미지가 여러개 있다면 슬라이드 */}
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        <img src="https://source.unsplash.com/random" alt="" />
        {/* list 에서 이미지가 여러개 있다면 처음것만 보여주고 갯수 출력 */}
        <span className={s.count}>+3</span>
      </div>
      {theme == 'info' && <>
        <div className={s.locate}>
          서울시 관악구 봉천동 블라블라블라
        </div>
      </>
      }
      {theme == 'list' && <>
        <div className={s.etc}>
          <span><HeartIcon /> 2</span>
          <span><CommentIcon /> 2</span>
          <span><BookmarkIcon /> 2</span>
        </div>
      </>}
    </>
  )
}

const Articles = ({ theme = 'list' }: articlesListType) => {
  return (
    <>
      {
        theme == 'list' &&
        <Link className={s.articles} href="">
          <ArticleUi theme={theme} />
        </Link>
      }
      {
        theme == 'info' &&
        <div className={s.articles}>
          <ArticleUi theme={theme} />
        </div>
      }
    </>
  );
};

export default Articles;