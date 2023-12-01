'use client';

import React, { useMemo, useState } from 'react';

import Modal from '@/components/Modal';
import ErrorPopup from '@/components/Modal/errorPopup';
import { MODAL_TYPE } from '@/constants/index';
import { ModalContext } from './ModalContext';

export default function ModalProvider({ children, type = MODAL_TYPE.DIALOG }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (withContent) => {
    setModalContent(withContent);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = useMemo(() => ({
    openModal,
    closeModal,
  }), []);

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && (type === MODAL_TYPE.DIALOG
        ? <Modal {...modalContent} />
        : <ErrorPopup {...modalContent} />)}
      {children}
    </ModalContext.Provider>
  );
}
