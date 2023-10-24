import React from 'react';

import { getCoordinatesAngle } from '@/utils/distance';
import Image from 'next/image';
import { STATUS } from '@/constants/flight';
import { transformLineToGeodesic } from '@/utils/geodesicLine';

const updateMeridianCord = (longitude) => {
  // disable temporary
  if (false && longitude < 0) {
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
  const updated = JSON.parse(JSON.stringify(flight));

  if (updated?.waypoints.length === 2) {
    updated.waypoints[0].lon = updateMeridianCord(updated.waypoints[0].lon);
    updated.waypoints[1].lon = updateMeridianCord(updated.waypoints[1].lon);
  }

  return updated;
};
const getLinesByStatus = (flight, mappedPositions = []) => {
  // check Map position to avoid cases when flight in progress and we don't have positions
  if (flight.status === STATUS.ACTIVE && mappedPositions.length) {
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
        coordinates: transformLineToGeodesic([
          mappedPositions[mappedPositions.length - 1],
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
        coordinates: transformLineToGeodesic([
          [flight.waypoints[0].lon, flight.waypoints[0].lat],
          [flight.waypoints[1].lon, flight.waypoints[1].lat],
        ]), /* Todo: possibly add mappedPositions */
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
    const { current, next } = getPositionsForAngle(flight.waypoints, flight.positions);
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
  const mappedPositions = flight?.positions
    ?.map(({ lon, lat }) => {
      if (lon < 0) {
        return [updateMeridianCord(lon), lat];
      }

      return [lon, lat];
    }) || [];
  const updatedFlight = updateWP(flight);
  const markers = getMarkersByStatus(updatedFlight, mappedPositions, departureAirport, destinationAirport);
  const lines = getLinesByStatus(updatedFlight, mappedPositions);

  const initialView = getInitialView(updatedFlight, markers);

  return {
    initialView, lines, markers, mappedPositions,
  };
};
