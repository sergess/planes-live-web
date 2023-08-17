import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primary';
import { BUTTON_SIZE } from '@/constants/index';
import dayjs from 'dayjs';
import { UPDATE_LABELS } from '@/constants/flight';
import styles from './lastUpdateCard.module.css';

const getValue = (action) => {
  switch (action) {
    case 'value1':
      return 1;

    case 'value2':
      return 1;

    default: {
      return '';
    }
  }
};
export default function LastUpdateCard({
  actions = [],
  departureTime,
  arrivalGate,
  arrivalTerminal,
  arrivalTime,
  departureTerminal,
}) {
  const action = actions.reduce(
    (prev, current) => (prev.priority > current.priority ? prev : current),
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>LATEST UPDATE</p>
        <p>
          {dayjs().diff(dayjs(actions[0].time), 'minute')}
          {' '}
          min ago
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <p>
            {`${UPDATE_LABELS[action.action]} `}
            {getValue(action.action)}
            {{
              23: '',
              24: '',
              25: '',
              26: (departureTime),
              27: (arrivalTime),
              40: (departureTerminal),
              41: (arrivalTerminal),
              42: '',
              43: (arrivalGate),
            }[action.action]}
          </p>
        </div>
        <PrimaryButton size={BUTTON_SIZE.SM}>
          View all updates (
          {actions.length || 0}
          )
        </PrimaryButton>
      </div>
    </div>
  );
}
