import { useEffect, useState } from 'react';

import useMutationFetch from '@/hooks/useMutationFetch';

import {
  MIN_SYMBOL_COUNT, OPTION_TYPE,
} from '@/constants/index';

export default () => {
  const [text, setText] = useState('');
  const [options, setOptions] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const { trigger, isMutating: loading } = useMutationFetch('/api/search');

  useEffect(() => {
    if (text.length > MIN_SYMBOL_COUNT) {
      (async () => {
        try {
          const { data: resultOfSearch } = await trigger({ query: text });
          setOptions([...resultOfSearch.airports
            .map((a) => ({
              label: a.name,
              value: a.icao, /* TODO move to iata */
              type: OPTION_TYPE.airport,
            })), ...resultOfSearch.autosuggest
            .filter((e) => e.type === 'iata') // temporary filter
            .map((a) => ({
              label: a.code,
              value: a.code,
              type: OPTION_TYPE.flight,
            }))]);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Something went wrong');
        }
      })();
    }
  }, [text]);

  return {
    onChange,
    options,
    text,
    setText,
    loading,
  };
};
