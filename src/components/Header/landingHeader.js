import React from 'react';

import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';
import Android from '@/assets/svg/android';
import Apple from '@/assets/svg/apple';
import { ANDROID_DOWNLOAD_LINK, BUTTON_SIZE, IOS_DOWNLOAD_LINK } from '@/constants/index';

import { getHref } from '@/utils/index';
import styles from './header.module.css';

export default function LandingHeader() {
  const href = getHref();

  return (
    <header className={styles.header}>
      <div className={styles.labelWrapper}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <div className={styles.mobile}>
        <PrimaryButton size={BUTTON_SIZE.SM}>Download app</PrimaryButton>
      </div>
      <div className={styles.desktop}>
        <a
          className={styles.link}
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          Download app
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href={ANDROID_DOWNLOAD_LINK}
          rel="noreferrer"
        >
          <Android />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href={IOS_DOWNLOAD_LINK}
          rel="noreferrer"
        >
          <Apple />
        </a>
      </div>
    </header>
  );
}
