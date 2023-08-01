'use client';

import React from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/constants/index';
import styles from './map.module.css';

export default async function MapBox({ latitude, longitude, code }) {
  const geoControlRef = React.useRef();
  if (typeof window === 'undefined') return null;
  if (window?.matchMedia('(max-width: 701px)').matches) {
    return null;
  }

  const { Map, GeolocateControl, Marker } = (await import('react-map-gl'));

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
          longitude,
          latitude,
          zoom: 3.5,
          interactive: true,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
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
      </Map>
    </div>
  );
}
