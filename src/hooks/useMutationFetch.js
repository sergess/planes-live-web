import useSWRMutation from 'swr/mutation';

const sendRequest = (url, { arg }) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(arg),
}).then((res) => res.json());

const useMutationFetch = (url) => {
  const { trigger, isMutating } = useSWRMutation(url, sendRequest);

  return { trigger, isMutating };
};

export default useMutationFetch;
