'use client';

import React, { useContext } from 'react';

import flightContext from '@/contexts/flight/FlightContext';
import MapBox from '@/components/Map';
import useFlightMap from '@/hooks/useFlightMap';

export default function MapWithFlightData() {
  const { flightData } = useContext(flightContext);

  const flight = flightData?.flight;
  const destinationAirport = flightData?.destinationAirport;
  const departureAirport = flightData?.departureAirport;

  const { markers, lines, initialView } = useFlightMap({
    flight,
    departureAirport,
    destinationAirport,
  });

  if (!markers || !lines || !initialView) {
    return null;
  }

  return (
    <MapBox
      initial
      markers={markers}
      lines={lines}
      initialViewState={initialView && {
        latitude: initialView.latitude,
        longitude: initialView.longitude,
      }}
    />
  );
}
