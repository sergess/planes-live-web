'use client';

import React from 'react';

import { getHref } from '@/utils/index';
import { BUTTON_SIZE } from '@/constants/index';
import WithModal from '@/components/HOC/withModal';
import SubscriptionPopup from '@/components/SubscriptionPopup';

import styles from './button.module.css';

// eslint-disable-next-line func-style
export function Button({ children, size = BUTTON_SIZE.LG, ...props }) {
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

export default WithModal(Button, SubscriptionPopup);
