import React from 'react'
import ModalFrame from '../ModalFrame'

type BasicModalType = {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode,
  dimClick?: boolean,
  isDim?: boolean,
  onClose?: boolean,
  className?: string
}

const BasicModal = ({ setOnModal, children, dimClick, isDim = true, className }: BasicModalType) => {
  return (
    <ModalFrame
      setOnModal={setOnModal}
      isDim={isDim}
      onClose
      dimClick={dimClick}
      className={className}
    >
      {children}
    </ModalFrame>
  )
}

export default BasicModal