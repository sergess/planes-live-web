'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import styles from './button.module.css';

export default function Button({ children }) {
  const { openModal } = useContext(ModalContext);

  const onClick = () => {
    openModal({
      content: <SubscriptionPopup />,
    });
  };

  return (
    <button
      type="button"
      className={styles.custom}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
