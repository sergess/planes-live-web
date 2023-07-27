'use client';

import React from 'react';

import Map, { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from '@/constants/index';
import styles from './map.module.css';

export default function MapBox({ latitude, longitude }) {
  const geoControlRef = React.useRef();

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
          interactive: false,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{
            enableHighAccuracy: true,
            showUserLocation: true,
          }}
          trackUserLocation
          showUserHeading
          ref={geoControlRef}
        />
      </Map>
    </div>
  );
}
