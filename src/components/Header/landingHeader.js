import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';
import { BUTTON_SIZE } from '@/constants/index';

import styles from './header.module.css';

export default function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.labelWrapper}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <PrimaryButton size={BUTTON_SIZE.SM}>Download app</PrimaryButton>
    </header>
  );
}
