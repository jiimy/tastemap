import React from 'react';
import s from './articles.module.scss';
import { BookmarkIcon, HeartIcon } from '../imgs';
import CommentIcon from '../imgs/CommentIcon';
import Link from 'next/link';
import UserInfo from '../userInfo/UserInfo';
import classNames from 'classnames';
import ShopEmoji from '../shopEmoji/ShopEmoji';
import Image from 'next/image';

type articlesListType<T = any> = {
  theme: 'info' | 'list', // info: 게시글 상세, list: 글 목록
  data: Record<string, any>;
}

const ArticleUi = ({ theme, data }: articlesListType) => {

  console.log(
    // data.imgurls != null && data.imurls.map((item: any, i: number) => (
    //     console.log(data)
    //   ))
    data.imgurls
  )
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
        { data.content}
      </div>
      <div className={classNames([s.img], {
        [s.list_img]: theme == 'list'
      })}>
        {/* <img src="https://source.unsplash.com/random" alt="" /> */}
        {/* {data.imgurls != null && data.imurls.map((item: any, i: number) => (
          <Image src={item} key={i} alt="" />
        ))} */}
        {data.imgurls != null && typeof(data.imgurls) != 'number' && <Image src={data.imgurls[0]} alt="" /> }
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

const Articles = ({ theme = 'list', data }: articlesListType) => {
  return (
    <>
      {
        theme == 'list' &&
        <Link className={s.articles} href="">
            <ArticleUi theme={theme} data={data} />
        </Link>
      }
      {
        theme == 'info' &&
        <div className={s.articles}>
            <ArticleUi theme={theme} data={data} />
        </div>
      }
    </>
  );
};

export default Articles;