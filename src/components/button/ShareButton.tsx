'use client';
import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // alert('링크가 복사되었습니다.');
    } catch (error) {
      console.error('Error copying link:', error);
      // alert('링크를 복사하는 도중 오류가 발생했습니다.');
    }
  };

  return (
    <button onClick={handleShare}>프로필공유</button>
  );
};

export default ShareButton;