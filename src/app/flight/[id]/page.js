import React from 'react';
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import Swipe from "@/components/Swipe";
import Features from "@/components/Banners/Landing/Features";
import Traffic from "@/components/Banners/Landing/Traffic";
import Slider from "@/components/Slider";
import NotificationBanner from "@/components/Banners/Landing/Notification";
import AirportBanner from "@/components/Banners/Landing/Airport";
import KnowMore from "@/components/Banners/Landing/KnowMore";
import Footer from "@/components/Footer";
import {Airport, Flight} from "@/services/index";
import DateBlock from "@/components/FlightInfo/DateBlock";
import FlightCard from "@/components/FlightInfo/FlightCard";
import LastUpdateCard from "@/components/FlightInfo/LastUpdateCard";
import DelayHistoryCard from "@/components/FlightInfo/DelayHistoryCard";

import styles from "@/app/flight/[id]/page.module.css";

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const flightService = new Flight();
const airportService = new Airport();

export default async function Page({ params }) {
  const response = await flightService.getFlightInfo(params.id);

  if (!response) {
    notFound();
  }

  const { flight } = response[0];

  const [{ airport: destinationAirport }, { airport }] = await Promise.all(
    [airportService.getAirport(flight?.destination), airportService.getAirport(flight?.origin)],
  );

  if (!destinationAirport || !airport) {
    notFound();
  }

  return (
    <>
    <div className={styles.container}>
        <Swipe id={params.id}>
          <div className={styles.body}>
            <DateBlock />
            <FlightCard
              city={airport.city}
              logoUrl=""
              iata={flight?.iata}
              name={airport.name}
              originIata={airport.iata}
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
            <div className={styles.mobContent}>
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
  <Map
    latitude={flight.waypoints[0].lat}
    longitude={flight.waypoints[0].lon}
    latitudeEnd={flight.waypoints[1].lat}
    longitudeEnd={flight.waypoints[1].lon}
    code={params.id}
  />
    </>
  );
}
