import React from 'react';

import { getCoordinatesAngle } from '@/utils/distance';
import Image from 'next/image';

/* get objects to calculate plane degrees direction */
const getPositionsForAngle = (positions, waypoints) => {
  const current = positions[positions.length - 1];

  return { current, next: waypoints[1] };
};
export default ({ flight, departureAirport, destinationAirport }) => {
  const markers = [{
    id: 1,
    latitude: flight.waypoints[0].lat,
    longitude: flight.waypoints[0].lon,
    label: departureAirport.iata,
  }, {
    id: 2,
    latitude: flight.waypoints[1].lat,
    longitude: flight.waypoints[1].lon,
    label: destinationAirport.iata,
  }];
  if (flight?.positions?.length > 2) {
    const { current, next } = getPositionsForAngle(flight.positions, flight.waypoints);
    const angle = getCoordinatesAngle(current, next);

    markers.push({
      id: 3,
      latitude: current.lat,
      longitude: current.lon,
      html: <Image
        src="/svg/map_aviation.svg"
        priority
        width={28}
        height={28}
        style={{
          transform: `rotate(calc(${angle}deg + 90deg))`,
        }}
        alt="Plane icon"
      />,
    });
  }
  const mappedPositions = flight?.positions?.map(({ lon, lat }) => [lon, lat]) || [];
  const lines = [
    {
      id: 'source1',
      layerId: 'layer1',
      coordinates: [
        [flight.waypoints[0].lon, flight.waypoints[0].lat],
        ...mappedPositions,
      ],
    },
    {
      id: 'source2',
      layerId: 'layer2',
      coordinates: [
        mappedPositions[mappedPositions.length - 1],
        [flight.waypoints[1].lon, flight.waypoints[1].lat],
      ],
      layerPaint: { 'line-dasharray': [1, 2] },
    },
  ];
  const initialView = flight?.positions?.length ? markers[2] : markers[0];

  return {
    initialView, lines, markers, mappedPositions,
  };
};
