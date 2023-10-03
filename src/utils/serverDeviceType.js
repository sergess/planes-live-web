import { headers } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export const getAppDeeplink = (flight) => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  if (/android/ig.test(userAgent)) {
    // Android
    return `${process.env.ANDROID_SMARTBANNER_DEEPLINK}?flightId=${flight.id}`;
  }

  if (/iPad|iPhone|iPod/ig.test(userAgent)) {
    // iOS
    return `${process.env.IOS_SMARTBANNER_DEEPLINK}?screen=FlightInfo&flightId=${flight.id}`;
  }

  return '';
};
