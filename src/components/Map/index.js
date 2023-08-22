'use client';

import React from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/constants/index';
import styles from './map.module.css';

export default async function MapBox({
  latitude, longitude, code,
  longitudeEnd, latitudeEnd,
}) {
  const geoControlRef = React.useRef();

  const {
    Map, GeolocateControl, Marker, Source, Layer, NavigationControl,
  } = (await import('react-map-gl'));

  return (
    <div className={styles.mapContainer}>
      <Map
        onLoad={() => {
          if (!latitude && !longitude) {
            geoControlRef.current?.trigger();
          }
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          latitude,
          longitude,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {longitudeEnd && latitudeEnd && (
        <Source
          id="polylineLayer"
          type="geojson"
          data={{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [
                [longitude, latitude],
                [longitudeEnd, latitudeEnd],
              ],
            },
          }}
        >
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              'line-join': 'bevel',
              'line-cap': 'round',
            }}
            paint={{
              'line-color': '#2166EE',
              'line-width': 1,
            }}
          />
        </Source>
        )}
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
        {longitude && latitude && (
          <Marker longitude={longitude} latitude={latitude} anchor="bottom">
            <div className={styles.marker}>{code}</div>
          </Marker>
        )}
        {longitudeEnd && latitudeEnd && (
          <Marker longitude={longitudeEnd} latitude={latitudeEnd} anchor="bottom">
            <div className={styles.marker}>{code}</div>
          </Marker>
        )}
        <NavigationControl />
      </Map>
    </div>
  );
}
