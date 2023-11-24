'use client';

import React, { useMemo, useState, useEffect } from 'react';

import Modal from '@/components/Modal';
import ResetPassword from '@/components/ResetPassword';
import { ModalContext } from './ModalContext';

export default function ModalProvider({ children, token }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (withContent) => {
    setModalContent(withContent);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  useEffect(() => {
    if (token) {
      openModal({
        content: <ResetPassword />,
      });
    }
  }, [token]);

  const valueModalProvider = useMemo(() => ({
    token,
    openModal,
    closeModal,
  }), []);

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
}
