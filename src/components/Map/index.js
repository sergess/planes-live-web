'use client';

import React from 'react';
import Map, {
  Marker, GeolocateControl, Source, Layer, NavigationControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/constants/index';

import styles from './map.module.scss';

export default async function MapBox({
  mapRef = null,
  markers = [],
  lines = [],
  initialViewState,
}) {
  const geoControlRef = React.useRef();

  return (
    <div className={styles.mapContainer}>
      <Map
        ref={mapRef}
        onLoad={() => {
          if (!markers.length) {
            geoControlRef.current?.trigger();
          }
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          ...initialViewState,
          zoom: 3.5,
        }}
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
                type: 'LineString',
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
                'line-width': 2,
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
          fitBoundsOptions={{ linear: true, maxZoom: 3.5, zoom: 3.5 }}
          trackUserLocation
          showUserHeading={false}
          ref={geoControlRef}
        />
        {markers.map((m) => (
          <Marker key={m.id} longitude={m.longitude} latitude={m.latitude} anchor="center">
            {m.label ? (
              <div className={styles.marker}>
                {m.label}
              </div>
            ) : m.html}
          </Marker>
        ))}
        <NavigationControl />
      </Map>
    </div>
  );
}
