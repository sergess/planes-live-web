import React from 'react';
import { Inter } from 'next/font/google';

// relative path to avoid warning
import './styles/globals.css';
import PrimaryButton from '@/components/Buttons/primary';
import LogoSvg from '@/assets/svg/logo';
import Footer from '@/components/Footer';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Planes live web',
  description: 'web version of planes live app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className={styles.labelWrapper}>
            <LogoSvg />
            <p className={styles.label}>Planes Live</p>
          </div>
          <PrimaryButton>Download app</PrimaryButton>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
