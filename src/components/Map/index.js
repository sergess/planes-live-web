'use client';

import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import Map, { GeolocateControl } from 'react-map-gl';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './map.module.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGxhbmVzeXVyeSIsImEiOiJjbGtpZm9wd2cwMDFvM25uNjd2cnM3MDhsIn0.19JwNwLX4T9BhA1V5-m29g';
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
