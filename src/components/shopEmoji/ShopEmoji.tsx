import React from 'react';

type shopEmojiType = {
  status: 'good' | 'normal' | 'bad' // 음식점 상태

}

const ShopEmoji = ({ status }: shopEmojiType) => {
  return (
    <div>
      {status =='good' && <>
        [아이콘] 좋아요
      </>}
      {status =='normal' && <>
        [아이콘] 평범해요
      </>}
      {status =='bad' && <>
        [아이콘] 별로에요
      </>}
    </div>
  );
};

export default ShopEmoji;