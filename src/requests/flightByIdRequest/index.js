export const flightByIdRequest = async (query) => {
  try {
    const response = await fetch('/api/flightsbyid', {
      method: 'POST',
      body: JSON.stringify({
        query,
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

export default flightByIdRequest;
