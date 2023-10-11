'use client';

import React from 'react';
import Map, {
  Marker, GeolocateControl, Source, Layer, NavigationControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/constants/index';

import MapBadge from '@/components/Map/MapBadge';
import styles from './map.module.scss';

const DEFAULT_MARKER_SIZE = '24px';
const MAP_PADDING = 100;
const DEFAULT_ZOOM = 3.5;

export default async function MapBox({
  zoom,
  mapRef = null,
  markers = [],
  lines = [],
  initialViewState = {},
  isAdjustPosition = false,
}) {
  const geoControlRef = React.useRef();
  const isMultiLine = lines.length && lines[0].coordinates.length === 2;

  return (
    <div className={styles.mapContainer}>
      <Map
        ref={mapRef}
        renderWorldCopies
        onLoad={() => {
          if (isAdjustPosition && markers.length >= 2) {
            if (isMultiLine) {
              mapRef.current.fitBounds(
                [[markers[0].longitude, markers[0].latitude],
                  [markers[1].longitude, markers[1].latitude]],
                { padding: MAP_PADDING },
              );
            } else {
              // multiline handling
              mapRef.current.setZoom(0);
            }
          }
          if (!markers.length) {
            geoControlRef.current?.trigger();
          }
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          ...initialViewState,
          zoom: zoom || DEFAULT_ZOOM,
        }}
        attributionControl={false}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {lines.map((l) => (
          <Source
            key={l.id}
            id={l.id}
            type="geojson"
            data={{
              type: 'Feature',
              properties: {},
              geometry: {
                type: l.coordinates.length === 2 ? 'MultiLineString' : 'LineString',
                coordinates: l.coordinates,
              },
            }}
          >
            <Layer
              id={l.layerId}
              type="line"
              source={l.id}
              layout={{
                'line-join': 'bevel',
                'line-cap': 'round',
              }}
              paint={{
                'line-color': '#2166EE',
                'line-width': 1,
                ...l.layerPaint,
              }}
            />
          </Source>
        ))}
        <GeolocateControl
          positionOptions={{
            enableHighAccuracy: false,
            showUserLocation: false,
          }}
          fitBoundsOptions={{ linear: true, zoom: zoom || DEFAULT_ZOOM }}
          trackUserLocation
          showUserHeading={false}
          ref={geoControlRef}
        />
        {markers.map((m) => (
          <Marker
            key={m.id}
            style={{
              height: m.height || DEFAULT_MARKER_SIZE,
            }}
            longitude={m.longitude}
            latitude={m.latitude}
            anchor="center"
          >
            {m.label ? (
              <div className={styles.marker}>
                {m.label}
              </div>
            ) : m.html}
          </Marker>
        ))}
        <NavigationControl />
        <MapBadge />
      </Map>
    </div>
  );
}
