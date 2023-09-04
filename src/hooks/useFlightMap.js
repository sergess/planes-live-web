import React from 'react';

import { getCoordinatesAngle } from '@/utils/distance';
import Image from 'next/image';
import { STATUS } from '@/constants/flight';

/* get objects to calculate plane degrees direction */
const getPositionsForAngle = (positions, waypoints) => {
  if (positions.length === 0) {
    return { current: waypoints[0], next: waypoints[1] };
  }

  return { current: positions[positions.length - 1], next: waypoints[1] };
};

const getLinesByStatus = (flight, mappedPositions) => {
  if (flight.status === STATUS.ACTIVE) {
    return [
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
  }
  if (flight.status === STATUS.COMPLETED) {
    return [
      {
        id: 'source1',
        layerId: 'layer1',
        coordinates: [
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ],
      },
    ];
  }
  if (flight.status === STATUS.SCHEDULED) {
    return [
      {
        id: 'source1',
        layerId: 'layer1',
        coordinates: [
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ],
        layerPaint: { 'line-dasharray': [1, 2] },
      },
    ];
  }

  return [];
};
const getMarkersByStatus = (flight, mappedPositions, departureAirport, destinationAirport) => {
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
  if (flight.status === STATUS.ACTIVE) {
    const { current, next } = getPositionsForAngle(flight.positions, flight.waypoints);
    const angle = getCoordinatesAngle(current, next);

    return [...markers, {
      id: 3,
      latitude: current.lat,
      longitude: current.lon,
      height: '28px',
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
    }];
  }

  return markers;
};
const getInitialView = (flight, markers) => {
  if (flight.status === STATUS.ACTIVE) {
    return flight?.positions?.length ? markers[2] : markers[0];
  }
  if (flight.status === STATUS.COMPLETED) {
    return {
      latitude: flight.waypoints[1].lat,
      longitude: flight.waypoints[1].lon,
    };
  }
  if (flight.status === STATUS.SCHEDULED) {
    return {
      latitude: flight.waypoints[0].lat,
      longitude: flight.waypoints[0].lon,
    };
  }

  return null;
};

export default ({ flight, departureAirport, destinationAirport }) => {
  if (!flight || !departureAirport || !destinationAirport) {
    return {
      initialView: null, lines: null, markers: null, mappedPositions: null,
    };
  }

  const mappedPositions = flight?.positions?.map(({ lon, lat }) => [lon, lat]) || [];
  const markers = getMarkersByStatus(flight, mappedPositions, departureAirport, destinationAirport);
  const lines = getLinesByStatus(flight, mappedPositions);

  const initialView = getInitialView(flight, markers);

  return {
    initialView, lines, markers, mappedPositions,
  };
};
