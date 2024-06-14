import React from 'react';
import UserInfo from '../userInfo/UserInfo';

type AlarmItemType = {
  type: 'all' | 'mention'
}

const AlarmItem = ({ type }: AlarmItemType) => {
  return (
    <div>
      {/* 전체 일경우 */}
      {type === 'all' && <>
        유저이미지 / 텍스트
      </>}
      {/* 댓글 및 언급 일경우 */}
      {type === 'mention' && <>
        <UserInfo theme='post' />
        / 유저아이디 - 텍스트
      </>}
    </div>
  );
};

export default AlarmItem;
