import React from 'react';
import dynamic from 'next/dynamic';

import { isMobile } from '@/utils/serverComponent';
import { Flight } from '@/services/index';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default async function Layout({ desktop, mobile, params }) {
  // React will automatically dedupe the request
  const flightService = new Flight();
  const flightData = await flightService.getFlightInfo(params.id);

  const { flight } = flightData[0];

  if (isMobile()) {
    return (
      <div className="mobile flightLayout">
        <Map
          latitude={flight.waypoints[0].lat}
          longitude={flight.waypoints[0].lon}
          latitudeEnd={flight.waypoints[1].lat}
          longitudeEnd={flight.waypoints[1].lon}
          code={params.id}
        />
        {mobile}
      </div>
    );
  }

  return (
    <div className="flight flightLayout">
      {desktop}
      <Map
        latitude={flight.waypoints[0].lat}
        longitude={flight.waypoints[0].lon}
        latitudeEnd={flight.waypoints[1].lat}
        longitudeEnd={flight.waypoints[1].lon}
        code={params.id}
      />
    </div>
  );
}
