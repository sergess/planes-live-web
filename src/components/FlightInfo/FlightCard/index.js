import React from 'react';
import Image from 'next/image';

import Status from '@/components/Status';
import Time from '@/components/FlightInfo/FlightCard/Time/time';
import dayjs from 'dayjs';
import InfoBlock from '@/components/FlightInfo/FlightCard/InfoBlock';
import DescriptionBlock from '@/components/FlightInfo/FlightCard/DescriptionBlock';
import { EMPTY_FIELD } from '@/constants/index';
import { STATUS } from '@/constants/flight';

import styles from './flightCard.module.css';

export default function FlightCard({
  iata, logoUrl, city, name, destinationCity, destinationName,
  originIata, destinationIata, departureTime, arrivalTime,
  actualDepartureTime, actualArrivalTime, arrivalTerminal,
  departureTerminal, arrivalGate, departureGate, status, arrivalBaggageClaim,
  departureCheckInDesk,
}) {
  const total = dayjs(actualArrivalTime || arrivalTime)
    .diff(dayjs(actualDepartureTime || departureTime), 'minutes');
  const totalHours = Math.floor(total / 60);
  const totalMinutes = total % 60;

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
          status={STATUS.CANCELLED}
          departureTime={departureTime}
          arrivalTime={arrivalTime}
        />
        <DescriptionBlock
          status={STATUS.CANCELLED}
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
            <div>
              <p className={styles.title}>{city}</p>
              <p className={styles.description}>
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
            <Time time={departureTime} actual={actualDepartureTime} />
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
              {!!totalHours && ` ${totalHours}h `}
              {` ${totalMinutes}m`}
            </p>
            <Image
              src="/svg/hor_line.svg"
              width={109}
              height={2}
              alt=""
            />
          </div>
          <div className={styles.block}>
            <div>
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
            <Time time={arrivalTime} actual={actualArrivalTime} />
          </div>
        </div>
      </div>
    </div>
  );
}
