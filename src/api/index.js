import { request_uri } from '@/constants/index';

// eslint-disable-next-line import/prefer-default-export
export const searchRequest = async (text) => {
  try {
    const response = await fetch('api/search', {
      method: 'POST',
      body: JSON.stringify({
        query: text,
      }),
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    return [];
  }
};
