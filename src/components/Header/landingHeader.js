import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { ANDROID_DOWNLOAD_LINK, BUTTON_SIZE, IOS_DOWNLOAD_LINK } from '@/constants/index';
import CustomButton from '@/components/Controls/Buttons/custom';

import styles from './header.module.scss';

const PrimaryButton = dynamic(() => import('@/components/Controls/Buttons/primaryWithModal'), { ssr: false });

export default function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.labelWrapper}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/svg/app_icon.svg"
            priority
            width={40}
            height={41}
            alt="Planes Live - Flight Tracker app"
          />
        </Link>
        <p className={styles.label}>Planes Live</p>
      </div>
      <div className={styles.mobile}>
        <PrimaryButton size={BUTTON_SIZE.SM}>Download app</PrimaryButton>
      </div>
      <div className={styles.desktop}>
        <CustomButton
          className={`${styles.link} analytic__download_app`}
          size={BUTTON_SIZE.SM}
        >
          Download app
        </CustomButton>
        <a
          className={`${styles.icon} analytic__apple_icon`}
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
          className={`${styles.icon} analytic__android_icon`}
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
