import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primary';
import { BUTTON_SIZE } from '@/constants/index';
import dayjs from 'dayjs';
import { UPDATE_LABELS } from '@/constants/flight';
import { formatDate } from '@/utils/date';
import styles from './lastUpdateCard.module.css';

const DATE_VALUES = [
  26,
  27,
];
const DATE_FORMAT = 'H:mm A';

export default function LastUpdateCard({
  actions = [],
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
            {DATE_VALUES.includes(action.action) ? formatDate(action.value, DATE_FORMAT)
              : action.value}
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
