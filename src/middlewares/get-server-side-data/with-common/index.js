import { Flight } from '@/services/index';

export const withCommon = async () => {
  const flightService = new Flight();
  const response = await flightService.getCommonFlightData();

  if (!response) {
    return null;
  }

  return response;
};

export default withCommon;
