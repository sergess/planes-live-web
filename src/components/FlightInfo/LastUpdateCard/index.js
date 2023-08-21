import React from 'react';
import Image from 'next/image';

import PrimaryButton from '@/components/Controls/Buttons/primary';
import { BUTTON_SIZE } from '@/constants/index';
import dayjs from 'dayjs';
import { UPDATE_LABELS } from '@/constants/flight';
import { formatDate } from '@/utils/date';
import { M_TIME_FORMAT } from '@/constants/date';
import styles from './lastUpdateCard.module.css';

const DATE_VALUES = [
  26,
  27,
];

const getIconPath = (code) => {
  switch (code) {
    case 23:
      return '/svg/notifications/gate_departure_alt.svg';
    case 24:
      return '/svg/notifications/time_arrival.svg';
    case 25:
      return '/svg/notifications/close_outlined.svg';
    case 26:
      return '/svg/notifications/time_departure.svg';
    case 27:
      return '/svg/notifications/time_arrival.svg';
    case 40:
      return '/svg/notifications/location_entry.svg';
    case 41:
      return '/svg/notifications/location_left.svg';
    case 42:
      return '/svg/notifications/gate_departure_alt.svg';
    case 43:
      return '/svg/notifications/gate_arrival_alt.svg';

    default:
      return '';
  }
};
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
          <Image
            src={getIconPath(action.action)}
            width={21}
            height={21}
            alt={UPDATE_LABELS[action.action]}
            style={{ marginRight: '.8rem' }}
          />
          <p>
            {`${UPDATE_LABELS[action.action]} `}
            {DATE_VALUES.includes(action.action) ? formatDate(action.value, M_TIME_FORMAT)
              : action.value}
          </p>
        </div>
        <PrimaryButton size={BUTTON_SIZE.SM}>
          View all updates (
          {actions?.length || 0}
          )
        </PrimaryButton>
      </div>
    </div>
  );
}
