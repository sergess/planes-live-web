'use client';

import React, { useState, useEffect, useMemo } from 'react';

import { FlightContext } from './FlightContext';

export default function FlightProvider({
  children,
  value,
}) {
  const [flightData, setFlightData] = useState(value);

  useEffect(() => {
    setFlightData(value);
  }, [value]);

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
