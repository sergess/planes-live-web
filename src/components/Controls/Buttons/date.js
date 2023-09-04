'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import styles from './button.module.css';
import dynamic from "next/dynamic";

const CustomCalendar = dynamic(
  () => import('@/components/CustomCalendar'),
  {
    ssr: false,
  }
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
