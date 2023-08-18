import React from 'react';

import { STATUS } from '@/constants/flight';
import styles from '@/components/FlightInfo/FlightCard/InfoBlock/infoBlock.module.css';
import { EMPTY_FIELD } from '@/constants/index';

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
              {departureGate || EMPTY_FIELD}
            </p>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>
              TERMINAL
              {' '}
              {arrivalTerminal || EMPTY_FIELD}
            </p>
            <p className={styles.value}>
              Bag claim
              {' '}
              {arrivalBaggageClaim || EMPTY_FIELD}
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
