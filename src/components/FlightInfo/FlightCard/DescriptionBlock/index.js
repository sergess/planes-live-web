import React from 'react';

import { STATUS } from '@/constants/flight';
import styles from '@/components/FlightInfo/FlightCard/InfoBlock/infoBlock.module.css';
import { EMPTY_FIELD } from '@/constants/index';
import GateCard from '@/components/GateCard';

export default function DescriptionBlock({
  status,
  departureGate,
  departureTerminal,
  arrivalTerminal,
  arrivalBaggageClaim,
}) {
  if ([STATUS.CANCELLED, STATUS.COMPLETED].includes(status)) return null;

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
            <div className={styles.value}>
              <span className={styles.valueTitle}>
                Gate
              </span>
              {departureGate ? (
                <GateCard
                  gate={departureGate}
                  isDeparture
                />
              ) : EMPTY_FIELD}
            </div>
          </>),
        [STATUS.ACTIVE]: (
          <>
            <p className={styles.label}>
              TERMINAL
              {' '}
              {arrivalTerminal || EMPTY_FIELD}
            </p>
            <div className={styles.value}>
              <span className={styles.valueTitle}>
                Bag claim
              </span>
              <div>
                {arrivalBaggageClaim ? (
                  <GateCard
                    gate={arrivalBaggageClaim}
                    isDeparture={false}
                  />
                ) : EMPTY_FIELD}
              </div>
            </div>
          </>),
      }[status]}
    </div>
  );
}
