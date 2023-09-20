import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

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
import withFlightPageData from '@/middlewares/get-server-side-data/with-flight-page-data';
import withFlightIdPageData from '@/middlewares/get-server-side-data/with-flight-id-page-data';

import { getAirline, getAirport } from '@/utils/helpers';
import styles from './page.module.scss';

const MapWithFlightData = dynamic(
  () => import('@/components/MapWithFlightData'),
  {
    ssr: false,
  },
);

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  if (slug.length > 2) {
    notFound();
  }

  const flightNumber = slug[0];

  const flightId = slug[1] || null;

  const [flightResponse, commonDataResponse] = flightId
    ? await withFlightIdPageData(flightId)
    : await withFlightPageData(flightNumber);

  if (!flightResponse?.length || !commonDataResponse) {
    notFound();
  }

  const { flight } = flightResponse[0];
  const departureAirport = getAirport(commonDataResponse, flight.origin);
  const destinationAirport = getAirport(commonDataResponse, flight.destination);
  const airline = getAirline(commonDataResponse, flight.airline_icao);

  return ({
    title: `${departureAirport.city} - ${destinationAirport.city} (${flight.iata}) ${airline.name} Flight Tracker |
  Planes Live.`,
    description: `Instantly track the status of an ${airline.name} airline flight
  [${flight.iata}], route from ${departureAirport.city} to ${destinationAirport.city}. (61 wo flight details)`,
    themeColor: '#292838',
    itunes: {
      appId: process.env.IOS_STORE_ID,
      appArgument: `/flight/${flightNumber}`,
    },
    icons: {
      apple: '/svg/app_icon_with_bg.svg',
      other: {
        rel: 'android-touch-icon',
        url: '/svg/app_icon_with_bg.svg',
      },
    },
    other: {
      'smartbanner:disable-positioning': true,
      'google-play-app': `app-id=${process.env.ANDROID_STORE_ID}, app-argument=${`/flight/${flightNumber}`}}`,
    },
  });
};

export default async function Page({ params }) {
  const { slug } = params;

  if (slug.length > 2) {
    notFound();
  }

  const flightNumber = slug[0];
  const flightId = slug[1] || null;

  const [flightResponse, commonDataResponse] = flightId
    ? await withFlightIdPageData(flightId)
    : await withFlightPageData(flightNumber);

  if (!flightResponse?.length || !commonDataResponse) {
    notFound();
  }

  const { flight } = flightResponse[0];
  const currentDate = flightId ? new Date(flight.departure) : new Date();

  const departureAirport = getAirport(commonDataResponse, flight.origin);
  const destinationAirport = getAirport(commonDataResponse, flight.destination);
  const airline = getAirline(commonDataResponse, flight.airline_icao);

  if (!destinationAirport || !departureAirport) {
    notFound();
  }

  return (
    <FlightProvider value={{
      flight, destinationAirport, departureAirport, date: currentDate,
    }}
    >
      <ModalProvider>
        <MapWithFlightData />
        <div className={styles.container}>
          <FlightPreview />
          <Swipe id={flightNumber}>
            <div className={styles.body}>
              <DateBlock />
              <FlightCard
                logoUrl={airline.logo_url_s}
                extraCode={flight.iata === params.id ? null : params.id}
              />
              <LastUpdateCard />
              <DelayHistoryCard />
              {/* applyMobile,landingBanners - classes for flight page styles */}
              <div className={`${styles.mobContent} landingBanners applyMobile`}>
                <Features isMobileView id={flightNumber} />
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