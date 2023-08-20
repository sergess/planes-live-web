import React from 'react';
import Image from 'next/image';

import styles from './slider.module.css';

export default function Slider() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.iphone}
        src="/iphone_mockup.png"
        width={200}
        height={405}
        alt=""
      />
      <div className={styles.img1} />
      <div className={styles.img2} />
    </div>
  );
}
