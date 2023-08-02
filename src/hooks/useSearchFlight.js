import React from 'react';
import { useRouter } from 'next/navigation';

import {
  BASE_API, MIN_SYMBOL_COUNT, OPTION_TYPE, request_uri, ROUTE_BY_TYPE,
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
    return [];
  }
};

export default () => {
  const router = useRouter();
  const [options, setOptions] = React.useState([]);
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSelect = (value, type) => {
    router.push(`/${ROUTE_BY_TYPE[type]}/${value}`);
  };

  React.useEffect(() => {
    const asyncFetch = async (t) => {
      setLoading(true);
      const response = await fetchData(t);
      setLoading(false);

      setOptions([...response.airports
        .map((a) => ({
          label: a.name,
          value: a.icao,
          type: OPTION_TYPE.airport,
        })), ...response.autosuggest
        .filter((e) => e.type === 'icao')
        .map((a) => ({
          label: a.code,
          value: a.code,
          type: OPTION_TYPE.flight,
        }))]);
    };
    if (text.length > MIN_SYMBOL_COUNT) {
      asyncFetch(text);
    }
  }, [text]);

  return {
    onSelect,
    onChange,
    options,
    text,
    setText,
    loading,
  };
};
