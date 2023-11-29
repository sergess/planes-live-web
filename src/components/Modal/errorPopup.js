'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import styles from './modal.module.scss';

export default function ErrorPopup({ content }) {
  const { closeModal } = useContext(ModalContext);

  const onClose = () => {
    closeModal();
  };

  return (
    <div className={`${styles.backdropTransparent}`} onClick={onClose}>
      {content}
    </div>
  );
}
