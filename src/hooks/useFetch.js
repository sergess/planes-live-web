import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

const useFetch = (url, query) => {
  /* eslint-disable no-shadow */
  const { data, error, isLoading } = useSWR(
    [url, JSON.stringify(query)],
    ([url, query]) => fetcher(url, query),
  );

  /* eslint-disable no-shadow */
  return { data, error, isLoading };
};

export default useFetch;
