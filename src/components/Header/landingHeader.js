import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { BUTTON_SIZE } from '@/constants/index';

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
    </header>
  );
}
