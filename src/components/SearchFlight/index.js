'use client';

import React from 'react';

import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import md5 from 'md5';
import {
  BASE_API, MIN_SYMBOL_COUNT, SECRET_API_KEY, request_uri, UNIX_TO_SECOND,
} from '@/constants/index';

const fetchData = async (text) => {
  try {
    const unixTimeStamp = Math.floor(new Date().getTime() / UNIX_TO_SECOND);
    const signature = md5(request_uri + unixTimeStamp + SECRET_API_KEY);

    const response = await fetch(`${BASE_API}${request_uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Timestamp': unixTimeStamp,
        'X-Signature': signature,
      },
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
