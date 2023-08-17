import {
  UNIX_TO_SECOND,
} from '@/constants/index';
import md5 from 'md5';

// eslint-disable-next-line import/prefer-default-export
export const getHeaders = (uri) => {
  const SECRET_API_KEY = process.env.API_SECRET_KEY;
  const unixTimeStamp = Math.floor(new Date().getTime() / UNIX_TO_SECOND);
  const signature = md5(uri + unixTimeStamp + SECRET_API_KEY);

  return {
    'Content-Type': 'application/json',
    'X-Timestamp': unixTimeStamp,
    'X-Signature': signature,
  };
};
