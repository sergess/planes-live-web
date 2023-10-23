import React from 'react';
import Image from 'next/image';

import styles from './slider.module.scss';

export default function Slider() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.iphone}
        src="/svg/iphone_mockup.svg"
        width={200}
        height={405}
        alt="Planes Live app: flight information"
      />
      <div className={styles.img1} />
      <div className={styles.img2} />
    </div>
  );
}
