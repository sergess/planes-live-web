const fetcher = (url, query) => fetch(url, {
  method: query ? 'POST' : 'GET',
  ...(query && { body: query }),
}).then((r) => r.json());

export default fetcher;
