'use client';

import Button from '@/components/button/Button';
import BasicModal from '@/components/portalModal/basicModal/BasicModal';
import React, { useState } from 'react';

const Index = () => {
  const [modal1, setModal1] = useState(false);

  return (
    <div>
      {modal1 && (
        <BasicModal
          className="w-600"
          dimClick={false}
          setOnModal={() => setModal1(false)}
        >테스트 모달 </BasicModal>
      )}
      <div>
        <button onClick={() => setModal1(true)}>모달</button>
      </div>
    </div>
  );
};

export default Index;