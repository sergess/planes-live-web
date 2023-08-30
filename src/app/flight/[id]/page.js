import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import { withAirport, withFlight } from '@/middlewares/get-server-side-data';
import Swipe from '@/components/Swipe';
import Features from '@/components/Banners/Landing/Features';
import Traffic from '@/components/Banners/Landing/Traffic';
import Slider from '@/components/Slider';
import NotificationBanner from '@/components/Banners/Landing/Notification';
import AirportBanner from '@/components/Banners/Landing/Airport';
import KnowMore from '@/components/Banners/Landing/KnowMore';
import Footer from '@/components/Footer';
import DateBlock from '@/components/FlightInfo/DateBlock';
import FlightCard from '@/components/FlightInfo/FlightCard';
import LastUpdateCard from '@/components/FlightInfo/LastUpdateCard';
import DelayHistoryCard from '@/components/FlightInfo/DelayHistoryCard';
import FlightPreview from '@/components/Swipe/FlightPreview';

import useFlight from '@/hooks/useFlight';
import styles from './page.module.scss';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });
export default async function Page({ params }) {
  const { id: flightId } = params;
  const flight = await withFlight(flightId);

  if (!flight) {
    notFound();
  }

  const { destinationAirport, departureAirport } = await withAirport(flight);

  if (!destinationAirport || !departureAirport) {
    notFound();
  }

  const { markers, lines, initialView } = useFlight({
    flight,
    departureAirport,
    destinationAirport,
  });

  return (
    <>
      <Map
        initial
        markers={markers}
        lines={lines}
        initialViewState={{
          latitude: initialView.latitude,
          longitude: initialView.longitude,
        }}
      />
      <div className={styles.container}>
        <Swipe id={flightId}>
          <FlightPreview
            destinationAirport={departureAirport}
            airport={destinationAirport}
            flight={flight}
          />
          <div className={styles.body}>
            <DateBlock />
            <FlightCard
              city={departureAirport.city}
              logoUrl=""
              iata={flight?.iata}
              name={departureAirport.name}
              originIata={departureAirport.iata}
              status={flight.status}
              destinationIata={destinationAirport.iata}
              destinationCity={destinationAirport.city}
              destinationName={destinationAirport.name}
              departureTime={flight.departure}
              arrivalTime={flight.arrival}
              actualArrivalTime={flight.arrival_actual}
              actualDepartureTime={flight.departure_actual}
              arrivalTerminal={flight.arrival_terminal}
              departureTerminal={flight.departure_terminal}
              arrivalGate={flight.arrival_gate}
              arrivalBaggageClaim={flight.arrival_baggage_claim}
              departureCheckInDesk={flight.departure_check_in_desk}
              actions={flight.actions}
            />
            {flight?.actions?.length
              && (
                <LastUpdateCard
                  actions={flight.actions}
                />
              )}
            <DelayHistoryCard />
            {/* applyMobile,landingBanners - classes for flight page styles */}
            <div className={`${styles.mobContent} landingBanners applyMobile`}>
              <Features isMobileView />
              <Traffic />
              <Slider />
              <NotificationBanner />
              <AirportBanner />
              <KnowMore />
              <Footer />
            </div>
          </div>
        </Swipe>
      </div>
    </>
  );
}
