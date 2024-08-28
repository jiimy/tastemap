'use client';

import Button from '@/components/button/Button';
import BasicModal from '@/components/portalModal/basicModal/BasicModal';
import MapModal from '@/components/portalModal/mapModal/MapModal';
import React, { useState } from 'react';

const Index = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [mapmodal, setMapmodal] = useState(false);

  return (
    <div>
      {modal1 && (
        <BasicModal
          className="w-600"
          dimClick={true}
          setOnModal={() => setModal1(false)}
        >테스트 모달 </BasicModal>
      )}
      {mapmodal && <MapModal setOnModal={setMapmodal} />}
      <div>
        <button onClick={() => setModal1(true)}>모달</button>
        <button onClick={() => setMapmodal(true)}>지도모달</button>
      </div>
    </div>
  );
};

export default Index;