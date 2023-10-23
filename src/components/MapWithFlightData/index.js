'use client';

import React, { useContext, useRef } from 'react';

import flightContext from '@/contexts/flight/FlightContext';
import MapBox from '@/components/Map';
import useFlightMap from '@/hooks/useFlightMap';

export default function MapWithFlightData() {
  const { flightData } = useContext(flightContext);
  const mapRef = useRef(null);

  const flight = flightData?.flight;
  const destinationAirport = flightData?.destinationAirport;
  const departureAirport = flightData?.departureAirport;

  const { markers, lines, initialView } = useFlightMap({
    flight,
    departureAirport,
    destinationAirport,
    position: flightData.position,
  });

  if (!markers || !lines) {
    return null;
  }

  return (
    <MapBox
      initial
      markers={markers}
      lines={lines}
      isAdjustPosition
      initialViewState={initialView && {
        latitude: initialView.latitude,
        longitude: initialView.longitude,
      }}
      mapRef={mapRef}
    />
  );
}
