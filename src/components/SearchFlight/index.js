'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import {
  BASE_API, MIN_SYMBOL_COUNT, request_uri,
} from '@/constants/index';
import { getHeaders } from '@/utils/api';

const fetchData = async (text) => {
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
    console.log({ err });

    return [];
  }
};

export default function SearchFlight() {
  const router = useRouter();
  const [options, setOptions] = React.useState([]);
  const [text, setText] = React.useState('');

  const onChange = (e) => {
    if (options.map((o) => o.value).includes(e.target.value)) {
      setText('');
      router.push(`airport/${e.target.value}`);
    } else {
      setText(e.target.value);
    }
  };

  React.useEffect(() => {
    const asyncFetchDailyData = async (t) => {
      const response = await fetchData(t);
      setOptions(response.airports.map((a) => ({
        label: a.name,
        value: a.icao,
      })));
    };
    if (text.length > MIN_SYMBOL_COUNT) {
      asyncFetchDailyData(text);
    }
  }, [text]);

  return (
    <Input
      placeholder="Search by flight number, airline, or airport"
      onChange={onChange}
      options={options}
    />
  );
}
