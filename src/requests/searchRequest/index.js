export const searchRequest = async (text) => {
  try {
    const response = await fetch('api/search', {
      method: 'POST',
      body: JSON.stringify({
        query: text,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const { data } = await response.json();

    return data;
  } catch (err) {
    return null;
  }
};

export default searchRequest;
