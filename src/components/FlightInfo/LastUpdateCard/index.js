'use client';

import React, { useContext } from 'react';
import Image from 'next/image';

import { BUTTON_SIZE } from '@/constants/index';
import { UPDATE_LABELS } from '@/constants/flight';
import { formatDate, getLastUpdateTimeText } from '@/utils/date';
import CustomButton from '@/components/Controls/Buttons/custom';
import { M_TIME_FORMAT } from '@/constants/date';
import flightContext from '@/contexts/flight/FlightContext';
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
export default function LastUpdateCard() {
  const { flightData } = useContext(flightContext);

  const actions = flightData?.flight?.actions;

  const arrivalTz = flightData?.destinationAirport?.timezone_name;

  const departureTz = flightData?.departureAirport?.timezone_name;

  if (!actions || !arrivalTz || !departureTz) {
    return null;
  }

  const action = actions.reduce(
    (prev, current) => (prev.priority >= current.priority ? prev : current),
  );

  const getTzByCode = (val) => {
    if (val === 26) {
      return departureTz;
    }
    if (val === 27) {
      return arrivalTz;
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>LATEST UPDATE</p>
        <p className={styles.time}>
          {getLastUpdateTimeText(action.time)}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <Image
            src={getIconPath(action.action)}
            width={20}
            height={20}
            alt={UPDATE_LABELS[action.action]}
            style={{ marginRight: '.8rem' }}
          />
          <p>
            {`${UPDATE_LABELS[action.action]} `}
            {DATE_VALUES.includes(action.action) ? formatDate(action.value, M_TIME_FORMAT, getTzByCode(action.action))
              : action.value}
          </p>
        </div>
        <CustomButton
          size={BUTTON_SIZE.SM}
          analyticSelectors={{
            iosAnalyticSelector: 'analytic__download_app_store_modal_in_update',
            androidAnalyticSelector: 'analytic__download_gp_modal_in_update',
          }}
          analyticSelector="analytic__view_all"
        >
          View all updates (
          {actions?.length || 0}
          )
        </CustomButton>
      </div>
    </div>
  );
}
