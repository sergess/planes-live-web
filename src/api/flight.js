import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';

export const getFlightInfo = async (code) => {
  const uri = `${request_uri}position/icao/${code}`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
};
export const getCommonData = async () => {
  const uri = `${request_uri}data`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
};
