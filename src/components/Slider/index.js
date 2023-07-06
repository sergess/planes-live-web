import React from 'react';

import Image from 'next/image';
import iPhone_Mockup from '@/assets/img/iPhone_Mockup.png';
import styles from './slider.module.css';

export default function Slider() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.iphone}
        src={iPhone_Mockup}
        alt=""
      />
      <div className={styles.img1} />
      <div className={styles.img2} />
    </div>
  );
}
