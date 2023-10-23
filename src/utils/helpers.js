export const getAirport = (commonDataResponse, flight) => commonDataResponse.airports
  .find((air) => air.icao === flight);
export const getAirline = (commonDataResponse, flight) => commonDataResponse.airlines
  .find((air) => air.icao === flight);
