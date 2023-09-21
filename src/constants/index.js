export const request_uri = '/2.12/';
export const MIN_SYMBOL_COUNT = 2;
export const UNIX_TO_SECOND = 1000;

export const IOS_DOWNLOAD_LINK = 'https://apps.apple.com/app/id1097815000';
export const ANDROID_DOWNLOAD_LINK = 'https://play.google.com/store/apps/details?id=com.apalon.flight.tracker';

export const PLATFORM = {
  Android: 'Android',
  IOS: 'iOS',
};

export const BUTTON_SIZE = {
  SM: 'sm',
  LG: 'lg',
};
export const INPUT_DEBOUNCE = 200;
export const MAPBOX_TOKEN = 'pk.eyJ1IjoicGxhbmVzeXVyeSIsImEiOiJjbGtpZm9wd2cwMDFvM25uNjd2cnM3MDhsIn0.19JwNwLX4T9BhA1V5-m29g';

export const FEATURES_ANCHOR = 'features';
export const OPTION_TYPE = {
  airport: 'Airport',
  flight: 'Flight',
};
export const ROUTE_BY_TYPE = {
  Airport: 'airport',
  Flight: 'flight',
};

export const EMPTY_FIELD = 'n/a';
export const ERROR_CODE = {
  NOT_FOUND: 404,
  SERVER: 500,
};
export const ERROR_TEXT = {
  [ERROR_CODE.SERVER]: {
    title: 'The server hit turbulence',
    text: 'Give it another try in a few minutes. If it doesn’t help, please let us know.',
  },
  [ERROR_CODE.NOT_FOUND]: {
    title: 'The page is off the radar',
    text: 'We can’t find this page. Let’s take you back to the main page. Or tell us more so we can fix it.',
  },
};
