import { Flight } from '@/services/index';

const withFlightPageData = async (id) => {
  const flightService = new Flight();
  const [flightResponse, commonDataResponse] = await Promise.all([
    flightService.getFlightInfo(id), flightService.getCommonFlightData(),
  ]);

  if (!flightResponse || !commonDataResponse) {
    return [];
  }

  return [flightResponse, commonDataResponse];
};

export default withFlightPageData;
