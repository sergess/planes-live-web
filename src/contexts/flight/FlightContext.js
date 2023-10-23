'use client';

import { createContext } from 'react';

export const FlightContext = createContext({
  flightData: null,
  setFlightData: () => {},
});

export default FlightContext;
