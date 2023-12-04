import React from 'react';

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
export const MODAL_TYPE = {
  DIALOG: 'dialog',
  ERROR: 'error',
};
export const ERROR_TEXT = {
  [ERROR_CODE.SERVER]: {
    title: 'The server',
    subTitle: ' hit turbulence',
    getText: (styles) => (
      <span>
        Give it another try in a few minutes.
        {' '}
        <br className={styles.newLineMob} />
        If it doesn’t help,
        {' '}
        <br className={styles.newLineDesc} />
        please let us know.
      </span>
    ),
    buttonText: 'Reload',
    firstSymbol: 5,
    lastSymbol: 0,
  },
  [ERROR_CODE.NOT_FOUND]: {
    title: 'The page',
    subTitle: ' is off the radar',
    getText: (styles) => (
      <span>
        We can’t find this page. Let’s take you back to
        {' '}
        <br className={styles.newLineMob} />
        the main page.
        {' '}
        <br className={styles.newLineDesc} />
        Or tell us more so we can fix it.
      </span>
    ),
    buttonText: 'Go to main page',
    firstSymbol: 4,
    lastSymbol: 4,
  },
};
