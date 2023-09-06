import React from 'react';

export default function BannerMetaTags({ path }) {
  return (
    <>
      <meta name="smartbanner:disable-positioning" content="true" />
      <meta name="apple-itunes-app" content={`app-id=${process.env.IOS_STORE_ID}, app-argument=${path}`} />
      <meta name="google-play-app" content={`app-id=${process.env.ANDROID_STORE_ID}, app-argument=${path}`} />
      <link rel="apple-touch-icon" href="/svg/app_icon_with_bg.svg" />
      <link rel="android-touch-icon" href="/svg/app_icon_with_bg.svg" />
    </>
  );
}
