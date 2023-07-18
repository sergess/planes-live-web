import React from 'react';

import {
  BASE_API, request_uri,
} from '@/constants/index';
import { getHeaders } from '@/utils/api';

const fetchData = async (code) => {
  const uri = `${request_uri}airport/${code}`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });
    // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
};

export default async function Page({ params }) {
  const res = await fetchData(params.id);
  console.log(res, 'headers');

  return (
    <div>
      Airport:
      {' '}
      {params.id}
    </div>
  );
}
