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

  return (
    <>
      <div className={classNames('', {
        [s.list_title]: theme == 'list'
      })}>
        <UserInfo theme='post' name={data.name} />
        <ShopEmoji status='good' />
      </div>
      <div className={classNames([s.content], {
        'is_info': theme == 'info'
      })}>
        {data.content}
      </div>
      <div className={classNames([s.img], {
        [s.list_img]: theme == 'list'
      })}>
        {/* <img src="https://source.unsplash.com/random" alt="" /> */}
        {data.imgurls != null && data.imgurls.map((item: any, i: number) => (
          <Image key={i} src={item} alt="" width={300} height={300} style={{ objectFit: "cover" }} />
        ))}
        {/* {data.imgurls != null && <Image src="https://xxjrg87yxh7xrark.public.blob.vercel-storage.com/00-td3rKzTLWBq1lP1Nb7HKkCvkGzfIty.png" alt="" width={300} height={300} style={{ objectFit: "cover" }} />} */}
        {data.imgurls.length >= 2 &&
          <span className={s.count}>+{data.imgurls.length - 1}</span>
        }
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
        <Link className={s.articles} href={`/articles/${data.id}`}>
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