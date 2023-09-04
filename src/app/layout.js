import React from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import SWRProvider from '@/contexts/swr/SWRProvider';

import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Planes Live - Flight Tracker in Real Time',
  description: 'Track planes on an air traffic map, check aircraft flights, airline '
    + 'flight delays & cancellations, airport arrival & departure times and other flight info!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <SWRProvider>
            {children}
          </SWRProvider>
        </div>
      </body>
      <Script src="/anchor.js" />
    </html>
  );
}
