'use client';

import React, { useContext } from 'react';

import modalContext from '@/contexts/modal/ModalContext';
import ModalInfoList from '@/components/Airport/ModalInfoList';

import styles from './link.module.css';

export default function LinkTo({
  children, data, tz, airports,
  mapAirportField, dateKey, analyticSelector = '',
}) {
  const { openModal } = useContext(modalContext);

  const onClick = () => {
    openModal({
      content: <ModalInfoList
        data={data}
        tz={tz}
        airports={airports}
        mapAirportField={mapAirportField}
        dateKey={dateKey}
      />,
    });
  };

  return (
    <button
      type="button"
      className={`${styles.showAll} ${analyticSelector}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
