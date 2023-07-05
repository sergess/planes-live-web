import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import Notifications_Slider from '@/assets/img/Notifications_Slider.png';
import Image from 'next/image';
import styles from './notification.module.css';

export default function Notification() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.primaryText}>Notifications</span>
        {' '}
        <br />
        when you need them
      </div>
      <p className={styles.description}>Be the first to know when flights change</p>
      {false && <Image src={Notifications_Slider} alt="" className={styles.img} />}
      <div className={styles.buttonContainer}>
        <PrimaryButton>Download app</PrimaryButton>
      </div>
    </div>
  );
}
