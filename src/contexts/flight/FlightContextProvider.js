'use client';

import React, { useState, useMemo } from 'react';

import { FlightContext } from './FlightContext';

export default function FlightProvider({
  children,
  value,
}) {
  const [flightData, setFlightData] = useState(value);

  const valueFlightProvider = useMemo(() => ({
    flightData,
    setFlightData,
  }), [flightData]);

  return (
    <FlightContext.Provider value={valueFlightProvider}>
      {children}
    </FlightContext.Provider>
  );
}
