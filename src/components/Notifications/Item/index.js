import React from 'react';
import localFont from 'next/font/local';

import RadioButtonSVG from '@/assets/svg/radioButton';
import styles from './item.module.css';

const SF_PRO = localFont({
  src: './../../../app/fonts/SanFranciscoProDisplay/SF-Pro-Display-Regular.otf',
  display: 'swap',
});
export default function Notifications({ children }) {
  return (
    <div className={`${SF_PRO.className} ${styles.container}`}>
      <p className={styles.text}>
        {children}
      </p>
      <RadioButtonSVG />
    </div>
  );
}
