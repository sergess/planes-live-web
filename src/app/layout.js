import React from 'react';
import { Inter } from 'next/font/google';

import ModalProvider from '@/contexts/modal/ModalContextProvider';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Planes Live - Flight Tracker in Real Time',
  description: 'Track planes on an air traffic map, check aircraft flights, airline '
    + 'flight delays & cancellations, airport arrival & departure times and other flight info!',
};
// eslint-disable-next-line
const BannerMetaTags = () => {
  return (
    <>
      <meta name="apple-itunes-app" content="app-id=1097815000" />
      <meta name="google-play-app" content="app-id=com.apalon.flight.tracker" />
      <link rel="apple-touch-icon" href="/svg/img_app_icon.svg" />
      <link rel="android-touch-icon" href="/svg/img_app_icon.svg" />
    </>
  );
};
// eslint-disable-next-line
const BannerIOSMetaTags = () => {
  return (
    <>
      <meta name="apple-itunes-app" content="app-id=1097815000" />
      <meta name="google-play-app" content="app-id=com.apalon.flight.tracker" />
      <link rel="apple-touch-icon" href="/svg/app_icon_with_bg.svg" />
      <link rel="android-touch-icon" href="/svg/app_icon_with_bg.svg" />
    </>
  );
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BannerIOSMetaTags />
      <body className={inter.className}>
        <div>
          <ModalProvider>
            {children}
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
