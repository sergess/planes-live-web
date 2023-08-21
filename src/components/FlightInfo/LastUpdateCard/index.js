import React from 'react';
import Image from 'next/image';

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

const getIconPath = (code) => {
  switch (code) {
    case 23:
      return '/svg/notifications/gateDepartureAlt.svg';
    case 24:
      return '/svg/notifications/timeArrival.svg';
    case 25:
      return '/svg/notifications/closeOutlined.svg';
    case 26:
      return '/svg/notifications/timeDeparture.svg';
    case 27:
      return '/svg/notifications/timeArrival.svg';
    case 40:
      return '/svg/notifications/locationEntry.svg';
    case 41:
      return '/svg/notifications/locationLeft.svg';
    case 42:
      return '/svg/notifications/gateDepartureAlt.svg';
    case 43:
      return '/svg/notifications/gateArrivalAlt.svg';

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
            {DATE_VALUES.includes(action.action) ? formatDate(action.value, DATE_FORMAT)
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
