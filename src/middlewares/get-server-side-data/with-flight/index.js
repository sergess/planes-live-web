import { Flight } from '@/services/index';

export const withFlight = async (
  flightId,
) => {
  const flightService = new Flight();
  const response = await flightService.getFlightInfo(flightId);

  if (!response) {
    return null;
  }

  const { flight } = response[0];

  return flight;
};

export default withFlight;
