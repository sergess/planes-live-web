import { Airport } from '@/services/index';

export const withAirport = async (flight) => {
  const airportService = new Airport();

  const [{ airport: destinationAirport }, { airport: departureAirport }] = await Promise.all(
    [airportService.getAirport(flight?.destination), airportService.getAirport(flight?.origin)],
  );

  if (!destinationAirport || !departureAirport) {
    return null;
  }

  return { destinationAirport, departureAirport };
};

export default withAirport;
