import React from 'react';

import RadioButtonSVG from '@/assets/svg/radioButton';
import styles from './item.module.css';

export default function Notifications({ children }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {children}
      </p>
      <RadioButtonSVG />
    </div>
  );
}
