import React from 'react';
import Image from 'next/image';

import VertLine from '@/assets/svg/vertLine';
import HorLine from '@/assets/svg/horLine';
import Status from '@/components/Status';
import Time from '@/components/FlightInfo/FlightCard/Time/time';
import dayjs from 'dayjs';
import styles from './flightCard.module.css';

export default function FlightCard({
  iata, logoUrl, city, name, destinationCity, destinationName,
  originIata, destinationIata, departureTime, arrivalTime,
  actualDepartureTime, actualArrivalTime, arrivalTerminal,
  departureTerminal, arrivalGate, departureGate,
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

        <Status />
      </div>
      <div className={styles.boxBody}>
        <div className={styles.line}>
          <VertLine />
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
                {` ${departureTerminal}`}
                {' '}
                • Check-in 7236 • Gate
                {' '}
                {departureGate}
              </p>
            </div>
            <Time time={departureTime} actual={actualDepartureTime} />
          </div>
          <div className={styles.middle}>
            <HorLine />
            <p className={styles.timeDiff}>
              Total
              {!!totalHours && ` ${totalHours}h `}
              {` ${totalMinutes}m`}
            </p>
            <HorLine />
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
                {` ${arrivalTerminal}`}
                {' '}
                • Check-in 7236 • Gate
                {' '}
                {arrivalGate}
              </p>
            </div>
            <Time time={arrivalTime} actual={actualArrivalTime} />
          </div>
        </div>
      </div>
    </div>
  );
}
