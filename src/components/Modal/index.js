'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/state/contexts/modal/ModalContext';

import Image from 'next/image';
import styles from './modal.module.css';

export default function Modal({ content }) {
  const { closeModal } = useContext(ModalContext);

  const onClose = () => {
    closeModal();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <Image
            src="/svg/ic_close.svg"
            priority
            width={28}
            height={28}
            alt="Close"
          />
        </button>
        <div className={styles.body}>
          {content}
        </div>
      </div>
    </div>
  );
}
