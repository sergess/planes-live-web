'use client';

import React from 'react';

import { getHref } from '@/utils/index';
import { BUTTON_SIZE } from '@/constants/index';

import styles from './button.module.css';

export default function Button({ children, size = BUTTON_SIZE.LG, ...props }) {
  const href = getHref();

  return (
    <a
      target="_blank"
      className={`${styles.primary} ${size === BUTTON_SIZE.LG
        ? styles.large : styles.small}`}
      rel="noreferrer"
      href={href}
      {...props}
    >
      { children }
    </a>
  );
}
