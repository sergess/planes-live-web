import React from 'react';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Planes live web',
  description: 'web version of planes live app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
