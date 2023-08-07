import { cache } from 'react';
import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';

// eslint-disable-next-line import/prefer-default-export
export const getAirport = cache(async (code) => {
  const uri = `${request_uri}airport/${code}`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
});

export const getAirportFlightsByQuery = async (code, query) => {
  const uri = `${request_uri}airport/${code}/${query}`;
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
