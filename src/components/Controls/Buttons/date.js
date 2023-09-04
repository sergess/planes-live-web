'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import dynamic from 'next/dynamic';
import styles from './button.module.css';

const CustomCalendar = dynamic(
  () => import('@/components/CustomCalendar'),
  {
    ssr: false,
  },
);

export default function Button({ children }) {
  const { openModal } = useContext(ModalContext);

  const onClick = () => {
    openModal({
      content: <CustomCalendar />,
    });
  };

  return (
    <button
      type="button"
      className={styles.date}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
