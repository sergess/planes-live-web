'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import CustomCalendar from "@/components/CustomCalendar";
import styles from './button.module.css';

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
