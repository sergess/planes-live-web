import { Flight } from '@/services/index';

export const withFlightDate = async (
  flightId,
  date,
) => {
  const flightService = new Flight();
  const response = await flightService.getFlightDataById(flightId, date);

  if (!response) {
    return null;
  }

  const { flights } = response.data;

  return flights;
};

export default withFlightDate;
