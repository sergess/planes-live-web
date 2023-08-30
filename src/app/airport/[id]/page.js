import React from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import AirportContacts from '@/components/Airport/AirportContacts';
import InfoList from '@/components/Airport/InfoList';
import Statistics from '@/components/Airport/Statistics';
import Security from '@/components/Airport/Security';
import { Airport } from '@/services/index';
import { withAirportsPageData } from '@/middlewares/get-server-side-data/with-airports-page-data';
import styles from './page.module.scss';

const CustomMap = dynamic(() => import('@/components/CustomMap'), { ssr: false });

const airportService = new Airport();

export const generateMetadata = async ({ params }) => {
  const { airport } = await airportService.getAirport(params.id);

  return {
    title: `JFK, John F. Kennedy International Airport - Arrivals, 
    Departures & Overview | Planes Live which means its stucture is 
    (${params.id}), [${airport.name}] - 
    | Arrivals, Departures & Overview | Planes Live`,
    description: `Keep track of aircraft arrivals, departures, 
    delays at ${params.name} (${params.id}) and more! (64 wo airport details)`,
  };
};

export default async function Page({ params, searchParams }) {
  const [airportResponse, commonDataResponse] = await withAirportsPageData(params?.id);

  if (!airportResponse) {
    notFound();
  }
  const { airport, statistic } = airportResponse;

  const show_departures = searchParams?.show_departures || 6;
  const show_arrivals = searchParams?.show_arrivals || 6;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {airport.name}
        </h1>
        <AirportContacts
          city={airport.city}
          country={airport.country}
          iata={airport.iata}
          phone={airport.phone}
          tz={airport.timezone_name}
        />
        <InfoList
          label="ARRIVALS"
          code={params.id}
          query="arrivals"
          showAll={show_arrivals}
          otherQuery={`show_departures=${show_departures}`}
          airports={commonDataResponse.airports}
          isArrival
          mapAirportField="origin"
          tz={airport.timezone_name}
        />
        <InfoList
          label="DEPARTURES"
          code={params.id}
          query="departures"
          showAll={show_departures}
          otherQuery={`show_arrivals=${show_arrivals}`}
          airports={commonDataResponse.airports}
          isArrival={false}
          mapAirportField="destination"
          tz={airport.timezone_name}
        />
        <Statistics {...statistic} />
        <Security />
      </div>
      <CustomMap
        markers={[{
          id: 'marker1',
          latitude: airport.lat,
          longitude: airport.lon,
          label: airport.iata,
        }]}
        initialViewState={{
          latitude: airport.lat,
          longitude: airport.lon,
        }}
      />
    </>
  );
}
