'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Status from '@/components/Status';
import Time from '@/components/FlightInfo/FlightCard/Time/time';
import InfoBlock from '@/components/FlightInfo/FlightCard/InfoBlock';
import DescriptionBlock from '@/components/FlightInfo/FlightCard/DescriptionBlock';
import { EMPTY_FIELD } from '@/constants/index';
import flightContext from '@/contexts/flight/FlightContext';
import { getDateDifferenceHM } from '@/utils/date';
import { STATUS } from '@/constants/flight';

import styles from './flightCard.module.scss';

const AIRLINE_PLACEHOLDER = '/svg/airline_placeholder.svg';
const getCodes = (flight, flightNumber, flightId) => {
  let extraCode;
  let id;

  // we move from airport page
  if (flightId) {
    id = flightNumber;
    extraCode = flight.shared_codes;
  } else if (flightNumber === flight.iata) {
    // we search by main code
    id = flightNumber;
  } else if (flightNumber !== flight.iata) {
    // we search by shared code
    id = flightNumber;
    extraCode = flight.iata;
  }

  return {
    extraCode,
    id,
  };
};
export const getLabel = (flightNumber, iata, codes = '') => {
  if (codes.includes(flightNumber) || flightNumber !== iata) {
    return 'Operates as';
  }

  return 'Also known as';
};
export default function FlightCard({ logoUrl, flightId, flightNumber }) {
  const { flightData } = useContext(flightContext);
  if (!flightData?.flight || !flightData?.destinationAirport || !flightData?.departureAirport) {
    return null;
  }

  const {
    status, departure: departureTime, arrival: arrivalTime,
    arrival_actual: actualArrivalTime, departure_actual: actualDepartureTime,
    arrival_terminal: arrivalTerminal, departure_terminal: departureTerminal,
    arrival_gate: arrivalGate, arrival_baggage_claim: arrivalBaggageClaim,
    departure_check_in_desk: departureCheckInDesk, actions, departure_gate: departureGate,
    shared_codes: sharedCodes, iata,
  } = flightData.flight;

  const {
    iata: destinationIata, city: destinationCity, name: destinationName, timezone_name: destinationTz,
    icao: destinationIcao,
  } = flightData.destinationAirport;
  const {
    city, name, iata: originIata, timezone_name: departureTz,
    icao: departureIcao,
  } = flightData.departureAirport;

  const total = getDateDifferenceHM(
    actualArrivalTime || arrivalTime,
    actualDepartureTime || departureTime,
  );

  const { id, extraCode } = getCodes(flightData.flight, flightNumber, flightId);

  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <div className={styles.flexContainer}>
          <Image
            width={24}
            height={24}
            className={styles.logo}
            src={logoUrl || AIRLINE_PLACEHOLDER}
            alt="airline logo"
          />
          <h1 className={styles.flightLabel}>
            {id}
            {extraCode && (
            <>
              <br />
              <span className={styles.operates}>
                {getLabel(iata, flightNumber, sharedCodes)}
                {` ${extraCode}`}
              </span>
            </>
            )}
          </h1>
        </div>

        <Status status={status} />
      </div>
      <div className={styles.infoContainer}>
        <InfoBlock
          status={status}
          departureTime={actualDepartureTime || departureTime}
          arrivalTime={actualArrivalTime || arrivalTime}
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
      <div
        className={styles.boxBody}
        style={{
          opacity: status === STATUS.CANCELLED ? 0.5 : 1,
        }}
      >
        <div className={styles.container}>
          <div className={styles.lineContainer}>
            <div
              className={styles.line}
            >
              <div
                className={styles.lineItem}
              />
            </div>
            <div className={styles.pathWrapper}>
              <div className={styles.block}>
                <div className={styles.blockContainer}>
                  <p className={styles.title}>{city}</p>
                  <Link
                    href={`/airport/${departureIcao}`/* TODO use iata */}
                    className={styles.description}
                    title={name}
                    prefetch={false}
                  >
                    {originIata}
                    {' '}
                    —
                    {' '}
                    {name}
                  </Link>
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
                <Time
                  time={departureTime}
                  actual={actualDepartureTime}
                  tz={departureTz}
                  status={status}
                />
              </div>
              <div className={styles.middle}>
                <Image
                  src="/svg/hor_line.svg"
                  width={105}
                  height={2}
                  alt=""
                />
                <p className={styles.timeDiff}>
                  Total
                  {` ${total}`}
                </p>
                <Image
                  src="/svg/hor_line.svg"
                  width={105}
                  height={2}
                  alt=""
                />
              </div>
              <p className={styles.title}>{destinationCity}</p>
            </div>
          </div>
          <div className={`${styles.bottomBlock} bottomBlock`}>
            <div className={styles.blockContainer}>
              <Link
                href={`/airport/${destinationIcao}`}
                className={styles.description}
                prefetch={false}
              >
                {destinationIata}
                {' '}
                —
                {' '}
                {destinationName}
              </Link>
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
            <Time
              time={arrivalTime}
              actual={actualArrivalTime}
              tz={destinationTz}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
