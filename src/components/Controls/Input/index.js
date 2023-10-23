'use client';

import React from 'react';

import styles from './input.module.scss';

export default function Input({
  placeholder, onClick = () => {},
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onClick={onClick}
    />
  );
}
