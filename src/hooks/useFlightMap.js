import React from 'react';

import { getCoordinatesAngle } from '@/utils/distance';
import Image from 'next/image';
import { STATUS } from '@/constants/flight';
import { transformLineToGeodesic } from '@/utils/geodesicLine';

const updateMeridianCord = (longitude) => {
  if (longitude < 0) {
    return longitude + 360;
  }

  return longitude;
};
/* get objects to calculate plane degrees direction */
const getPositionsForAngle = (waypoints, positions = []) => {
  if (positions.length === 0) {
    return { current: waypoints[0], next: waypoints[1] };
  }

  return { current: positions[positions.length - 1], next: waypoints[1] };
};
const updateWP = (flight) => {
  const updated = { ...flight };

  if (updated?.waypoints.length === 2) {
    updated.waypoints[0].lon = updateMeridianCord(updated.waypoints[0].lon);
    updated.waypoints[1].lon = updateMeridianCord(updated.waypoints[1].lon);
  }

  return updated;
};
const getLinesByStatus = (flight, position, mappedPositions = []) => {
  // check Map position to avoid cases when flight in progress and we don't have positions
  if (flight.status === STATUS.ACTIVE && mappedPositions.length) {
    const planePosition = position ? [position.lon, position.lat] : mappedPositions[mappedPositions.length - 1];

    return [
      {
        id: 'source1',
        layerId: 'layer1',
        coordinates: [
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          ...mappedPositions,
          planePosition,
        ],
      },
      {
        id: 'source2',
        layerId: 'layer2',
        coordinates: transformLineToGeodesic([
          planePosition,
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ]),
        layerPaint: { 'line-dasharray': [1, 2] },
      },
    ];
  }
  if (flight.status === STATUS.COMPLETED) {
    return [
      {
        id: 'source1',
        layerId: 'layer1',
        // if we have positions we show it, if not we show geoline
        coordinates: !mappedPositions.length ? transformLineToGeodesic([
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ]) : [
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          ...mappedPositions,
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ],
      },
    ];
  }
  if (flight.status === STATUS.SCHEDULED || !mappedPositions.length) {
    return [
      {
        id: 'source1',
        layerId: 'layer1',
        coordinates: transformLineToGeodesic([
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ]),
        layerPaint: { 'line-dasharray': [1, 2] },
      },
    ];
  }

  return [];
};
const getMarkersByStatus = (flight, mappedPositions, departureAirport, destinationAirport, position) => {
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
    const { current, next } = getPositionsForAngle(flight.waypoints, flight.positions);
    const angle = position?.course || getCoordinatesAngle(current, next);

    return [...markers, {
      id: 3,
      latitude: position.lat,
      longitude: position.lon,
      height: '28px',
      html: <Image
        src="/svg/map_aviation.svg"
        priority
        width={28}
        height={28}
        style={{
          transform: `rotate(calc(${position?.course || angle}deg + 90deg))`,
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

export default ({
  flight, departureAirport, destinationAirport, position,
}) => {
  if (!flight || !departureAirport || !destinationAirport) {
    return {
      initialView: null, lines: null, markers: null, mappedPositions: null,
    };
  }

  const mappedPositions = flight?.positions
    ?.map(({ lon, lat }) => {
      if (lon < 0) {
        return [updateMeridianCord(lon), lat];
      }

      return [lon, lat];
    }) || [];
  const updatedFlight = updateWP(flight);
  const markers = getMarkersByStatus(updatedFlight, mappedPositions, departureAirport, destinationAirport, position);
  const lines = getLinesByStatus(updatedFlight, position, mappedPositions);

  const initialView = getInitialView(updatedFlight, markers);

  return {
    initialView, lines, markers, mappedPositions,
  };
};
