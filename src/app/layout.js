import React from 'react';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/normalize.css';
import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontSize: '10px' }}>
        <header className={styles.header}>
          <div className={styles.labelWrapper}>
            <LogoSvg />
            <div className={styles.label}>Planes Live</div>
          </div>
          <PrimaryButton>Download app</PrimaryButton>
        </header>
        {children}
        <footer />
      </body>
    </html>
  );
}
