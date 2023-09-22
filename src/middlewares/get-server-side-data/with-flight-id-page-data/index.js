import { Flight } from '@/services/index';

const withFlightIdPageData = async (id) => {
  const flightService = new Flight();
  const [flightResponse, commonDataResponse] = await Promise.all([
    flightService.getFlightById(id), flightService.getCommonFlightData(),
  ]);

  if (!flightResponse || !commonDataResponse) {
    return [];
  }

  return [flightResponse, commonDataResponse];
};

export default withFlightIdPageData;
