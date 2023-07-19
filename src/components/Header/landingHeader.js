import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';

import styles from './header.module.css';

export default function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.labelWrapper}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <PrimaryButton>Download app</PrimaryButton>
    </header>
  );
}
