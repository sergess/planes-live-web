'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import styles from './button.module.css';

export default function Button({
  children, className = styles.custom, analyticSelector = '',
  analyticSelectors,
}) {
  const { openModal } = useContext(ModalContext);

  const onClick = () => {
    openModal({
      content: <SubscriptionPopup analyticSelectors={analyticSelectors} />,
    });
  };

  return (
    <button
      type="button"
      className={`${className} ${analyticSelector}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
