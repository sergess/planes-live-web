'use client';

import React from 'react';

import { getHref } from '@/utils/index';
import styles from './button.module.css';

export default function Button({ children }) {
  const href = getHref();

  return (
    <a href={href} className={styles.primary}>{children}</a>
  );
}
