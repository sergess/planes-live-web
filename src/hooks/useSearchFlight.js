import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  MIN_SYMBOL_COUNT, OPTION_TYPE, ROUTE_BY_TYPE,
} from '@/constants/index';
import useMutationFetch from '@/hooks/useMutationFetch';

export default () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [options, setOptions] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSelect = (value, type) => {
    router.push(`/${ROUTE_BY_TYPE[type]}/${value}`);
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
              value: a.icao,
              type: OPTION_TYPE.airport,
            })), ...resultOfSearch.autosuggest
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
    onSelect,
    onChange,
    options,
    text,
    setText,
    loading,
  };
};
