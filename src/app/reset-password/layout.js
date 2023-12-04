import React from 'react';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import ModalProvider from '@/contexts/modal/ModalContextProvider';
import { MODAL_TYPE } from '@/constants/index';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <ModalProvider type={MODAL_TYPE.ERROR}>
      <div className={`${styles.container} ${inter.className}`}>
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
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          Need help? Let us know at
          {' '}
          <a href="mailto:support@planeslive.com">support@planeslive.com</a>
        </footer>
      </div>
    </ModalProvider>
  );
}
