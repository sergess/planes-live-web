import React from 'react';

import { STATUS } from '@/constants/flight';
import styles from '@/components/FlightInfo/FlightCard/InfoBlock/infoBlock.module.css';

export default function DescriptionBlock({
  status,
  departureGate,
  departureTerminal,
  arrivalTerminal,
  arrivalBaggageClaim,
}) {
  return (
    <div className={styles.container}>
      {{
        [STATUS.SCHEDULED]: (
          <>
            <p className={styles.label}>
              TERMINAL
              {' '}
              {departureTerminal}
            </p>
            <p className={styles.value}>
              Gate
              {' '}
              {departureGate}
            </p>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>
              TERMINAL
              {' '}
              {arrivalTerminal}
            </p>
            <p className={styles.value}>
              Bag claim
              {' '}
              {arrivalBaggageClaim}
            </p>
          </>),
        [STATUS.COMPLETED]: (
          <>
            cancelled
          </>),
      }[status]}
    </div>
  );
}
