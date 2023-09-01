'use client';

import React, { useContext } from 'react';
import Image from 'next/image';

import Status from '@/components/Status';
import Time from '@/components/FlightInfo/FlightCard/Time/time';
import InfoBlock from '@/components/FlightInfo/FlightCard/InfoBlock';
import DescriptionBlock from '@/components/FlightInfo/FlightCard/DescriptionBlock';
import { EMPTY_FIELD } from '@/constants/index';
import flightContext from '@/contexts/flight/FlightContext';
import { getDateDifferenceHM } from '@/utils/date';

import styles from './flightCard.module.css';

export default function FlightCard({
                                     destinationTz, departureTz,
                                   }) {
  // [TODO] params 'logoUrl', 'departureGate' are missing
  const logoUrl = null;
  const departureGate = null;

  const { flightData } = useContext(flightContext);

  if (!flightData?.flight || !flightData?.destinationAirport || !flightData?.departureAirport) {
    return null;
  }

  const {
    iata, status, departure: departureTime, arrival: arrivalTime,
    arrival_actual: actualArrivalTime, departure_actual: actualDepartureTime,
    arrival_terminal: arrivalTerminal, departure_terminal: departureTerminal,
    arrival_gate: arrivalGate, arrival_baggage_claim: arrivalBaggageClaim,
    departure_check_in_desk: departureCheckInDesk, actions,
  } = flightData.flight;

  const { iata: destinationIata, city: destinationCity, name: destinationName } = flightData.destinationAirport;
  const { city, name, iata: originIata } = flightData.departureAirport;

  const total = getDateDifferenceHM(
    actualArrivalTime || arrivalTime,
    actualDepartureTime || departureTime,
  );

  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <div className={styles.flexContainer}>
          {logoUrl && <Image width={24} height={24} className={styles.logo} src={logoUrl} alt="" />}
          <p className={styles.flightLabel}>
            {iata}
          </p>
        </div>

        <Status status={status} />
      </div>
      <div className={styles.infoContainer}>
        <InfoBlock
          status={status}
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          countOfUpdates={actions?.length}
        />
        <DescriptionBlock
          status={status}
          departureGate={departureGate}
          departureTerminal={departureTerminal}
          arrivalTerminal={arrivalTerminal}
          arrivalBaggageClaim={arrivalBaggageClaim}
        />
      </div>
      <div className={styles.boxBody}>
        <div className={styles.line}>
          <Image
            src="/svg/vert_line.svg"
            width={6}
            height={117}
            alt=""
          />
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.blockContainer}>
              <p className={styles.title}>{city}</p>
              <p className={styles.description} title={name}>
                {originIata}
                {' '}
                —
                {' '}
                {name}
              </p>
              <p className={styles.info}>
                Terminal
                {` ${departureTerminal || EMPTY_FIELD}`}
                {' '}
                • Check-in
                {' '}
                {departureCheckInDesk || EMPTY_FIELD}
                {' '}
                • Gate
                {' '}
                {departureGate || EMPTY_FIELD}
              </p>
            </div>
            <Time time={departureTime} actual={actualDepartureTime} tz={departureTz} />
          </div>
          <div className={styles.middle}>
            <Image
              src="/svg/hor_line.svg"
              width={109}
              height={2}
              alt=""
            />
            <p className={styles.timeDiff}>
              Total
              {` ${total}`}
            </p>
            <Image
              src="/svg/hor_line.svg"
              width={109}
              height={2}
              alt=""
            />
          </div>
          <div className={styles.block}>
            <div className={styles.blockContainer}>
              <p className={styles.title}>{destinationCity}</p>
              <p className={styles.description}>
                {destinationIata}
                {' '}
                —
                {' '}
                {destinationName}
              </p>
              <p className={styles.info}>
                Terminal
                {` ${arrivalTerminal || EMPTY_FIELD}`}
                {' '}
                • Gate
                {' '}
                {arrivalGate || EMPTY_FIELD}
                {' '}
                • Bag claim
                {' '}
                {arrivalBaggageClaim || EMPTY_FIELD}
              </p>
            </div>
            <Time time={arrivalTime} actual={actualArrivalTime} tz={destinationTz} />
          </div>
        </div>
      </div>
    </div>
  );
}
