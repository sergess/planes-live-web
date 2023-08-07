import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';

// eslint-disable-next-line import/prefer-default-export
export const searchRequest = async (text) => {
  try {
    const uri = `${request_uri}search`;
    const headers = getHeaders(uri);

    const response = await fetch(`${BASE_API}${uri}`, {
      method: 'POST',
      headers,
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
