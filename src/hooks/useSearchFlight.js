import React from 'react';
import { useRouter } from 'next/navigation';

import {
  MIN_SYMBOL_COUNT, OPTION_TYPE, ROUTE_BY_TYPE,
} from '@/constants/index';
import { searchRequest } from '@/requests/index';

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
      const response = await searchRequest(t);

      setLoading(false);

      // [TODO] Think about better way how it could be done
      if (response) {
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
      }
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
