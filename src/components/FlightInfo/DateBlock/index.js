'use client';

import React, { useContext } from 'react';
import Image from 'next/image';

import { formatDate } from '@/utils/date';
import { DAY_MONTH_DATE_FORMAT } from '@/constants/date';
import ChangeDateButton from '@/components/Controls/Buttons/date';

import flightContext from '@/contexts/flight/FlightContext';
import styles from './dateBlock.module.css';

export default function DateBlock() {
  const { flightData } = useContext(flightContext);

  return (
    <p className={styles.label}>
      <span className={styles.date}>
        {formatDate(flightData?.date, DAY_MONTH_DATE_FORMAT)}
      </span>
      <ChangeDateButton>
        Change date
        {' '}
        <Image
          src="/svg/calendar.svg"
          width={24}
          height={24}
          alt="Change Date"
        />
      </ChangeDateButton>
    </p>
  );
}
