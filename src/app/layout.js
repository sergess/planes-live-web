import React from 'react';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import {ThemeContextProvider} from "../contexts/context";

import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Planes live web 11',
  description: 'web version of planes live app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeContextProvider>
          {children}
      </ThemeContextProvider>
        <Footer />
      </body>
    </html>
  );
}
