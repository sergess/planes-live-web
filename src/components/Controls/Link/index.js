'use client';

import React, { useContext } from 'react';

import modalContext from '@/contexts/modal/ModalContext';

import styles from './link.module.css';

export default function LinkTo({
  children,
}) {
  const { openModal } = useContext(modalContext);

  return (
    <button
      type="button"
      className={styles.showAll}
      onClick={openModal}
    >
      {children}
    </button>
  );
}
