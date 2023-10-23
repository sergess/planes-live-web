import { ANDROID_DOWNLOAD_LINK, IOS_DOWNLOAD_LINK, PLATFORM } from '@/constants/index';

export const getMobileOperatingSystem = () => {
  let userAgent;
  if (typeof window !== 'undefined') {
    userAgent = window.opera;
  }
  if (typeof navigator !== 'undefined') {
    userAgent = navigator?.userAgent || navigator?.vendor;
  }

  if (/android/i.test(userAgent)) {
    return PLATFORM.Android;
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return PLATFORM.IOS;
  }

  return 'unknown';
};
export const getHref = () => {
  if (getMobileOperatingSystem() === PLATFORM.IOS) {
    return IOS_DOWNLOAD_LINK;
  }

  return ANDROID_DOWNLOAD_LINK;
};
