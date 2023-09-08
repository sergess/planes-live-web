import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { ANDROID_DOWNLOAD_LINK, BUTTON_SIZE, IOS_DOWNLOAD_LINK } from '@/constants/index';
import { getHref } from '@/utils/index';

import styles from './header.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primary'), { ssr: false });

export default function LandingHeader() {
  const href = getHref();

  return (
    <header className={styles.header}>
      <div className={styles.labelWrapper}>
        <Image
          src="/svg/app_icon.svg"
          priority
          width={40}
          height={41}
          alt="Planes Live - Flight Tracker app"
        />
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
          href={IOS_DOWNLOAD_LINK}
          rel="noreferrer"
        >
          <Image
            src="/svg/store_apple.svg"
            priority
            width={28}
            height={28}
            alt="Android logo"
          />
        </a>
        <a
          className={styles.icon}
          target="_blank"
          href={ANDROID_DOWNLOAD_LINK}
          rel="noreferrer"
        >
          <Image
            src="/svg/store_android.svg"
            priority
            width={28}
            height={28}
            alt="Apple logo"
          />
        </a>
      </div>
    </header>
  );
}
