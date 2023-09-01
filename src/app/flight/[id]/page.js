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
import ModalProvider from '@/contexts/modal/ModalContextProvider';
import FlightPreview from '@/components/Swipe/FlightPreview';

import FlightProvider from '@/contexts/flight/FlightContextProvider';
import useFlightMap from '@/hooks/useFlightMap';
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
  const currentDate = new Date();

  const { markers, lines, initialView } = useFlightMap({
    flight,
    departureAirport,
    destinationAirport,
  });

  return (
    <FlightProvider value={{
      flight, destinationAirport, departureAirport, date: currentDate,
    }}
    >
      <ModalProvider>
      <Map
        initial
        markers={markers}
        lines={lines}
        initialViewState={initialView && {
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
              destinationTz={destinationAirport.timezone_name}
              departureTz={departureAirport.timezone_name}
            />
            <LastUpdateCard />
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
      </ModalProvider>
    </FlightProvider>
  );
}
