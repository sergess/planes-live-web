'use client';

import React from 'react';
import {
  Source, Layer,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LAYER_1_ID = 'LAYER_1';
const LAYER_2_ID = 'LAYER_2';
const SOURCE_1_ID = 'polylineLayer1';
const SOURCE_2_ID = 'polylineLayer2';
const LINE_COLOR = '#573CFF';
const PAINT = {
  'line-color': LINE_COLOR,
  'line-width': 2,
};
const LAYOUT = {
  'line-join': 'bevel',
  'line-cap': 'round',
};
export default async function InRoute({
  latitude, longitude,
  longitudeEnd, latitudeEnd, positions = [],
}) {
  const mappedPositions = positions.map(({ lon, lat }) => [lon, lat]); // memo
  const coordLine1 = [
    mappedPositions[mappedPositions.length - 1],
    [longitudeEnd, latitudeEnd],
  ];
  const coordLine2 = [
    [longitude, latitude],
    ...mappedPositions,
  ];

  return (
    <>
      {longitudeEnd && latitudeEnd && (
        <Source
          id={SOURCE_1_ID}
          type="geojson"
          data={{
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: coordLine1,
            },
          }}
        >
          <Layer
            id={LAYER_1_ID}
            type="line"
            source="my-data"
            layout={LAYOUT}
            paint={PAINT}
          />
        </Source>
      )}
      {longitudeEnd && latitudeEnd && (
        <Source
          id={SOURCE_2_ID}
          type="geojson"
          data={{
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: coordLine2,
            },
          }}
        >
          <Layer
            id={LAYER_2_ID}
            type="line"
            source="my-data"
            layout={LAYOUT}
            paint={{
              ...PAINT,
              'line-dasharray': [1, 2],
            }}
          />
        </Source>
      )}
    </>
  );
}
