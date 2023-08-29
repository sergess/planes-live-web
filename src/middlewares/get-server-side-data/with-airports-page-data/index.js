import { Airport, Flight } from '@/services/index';

export const withAirportsPageData = async (id) => {
  const flightService = new Flight();
  const airportService = new Airport();
  const [airportResponse, commonDataResponse] = await Promise.all([
    airportService.getAirport(id), flightService.getCommonFlightData(),
  ]);

  if (!airportResponse || !commonDataResponse) {
    return null;
  }

  return [airportResponse, commonDataResponse];
};

export default withAirportsPageData;
