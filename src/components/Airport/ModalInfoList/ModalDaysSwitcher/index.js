'use client';

import React, { useRef, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';

import { formatDate } from '@/utils/date';
import { YEAR_MONTH_DAY_HOUR_FORMAT, HOUR_FORMAT } from '@/constants/date';

import styles from './modal.module.scss';

const getRangeBetweenDates = () => {
  const current = dayjs();
  const start = new Date(current.subtract(48, 'hour').toISOString());
  const end = new Date(current.add(48, 'hour').toISOString());
  const hours = [];
  for (let cur = start; cur <= end; cur.setHours(cur.getHours() + 1)) {
    hours.push(formatDate(cur, YEAR_MONTH_DAY_HOUR_FORMAT));
  }

  return hours;
};

export default function ModalInfoList({ data, date, onClick }) {
  const calendarRef = useRef();

  const currentDayRef = useCallback(
    (node) => {
      if (node !== null) {
        node.scrollIntoView({ inline: 'center' });
      }
    },
    [date, data],
  );

  const isSameDate = useCallback((value) => {
    if (data.some((item) => item.date === value)) {
      return true;
    }

    return null;
  }, [data]);

  const getMinDate = useMemo(() => data[0].date, [data]);
  const getMaxDate = useMemo(() => data[data.length - 1].date, [data]);
  const getNextDate = useMemo(() => data.find((item, key, arr) => arr[key - 1]?.date === date), [data, date]);
  const getPrevDate = useMemo(() => data.find((item, key, arr) => arr[key + 1]?.date === date), [data, date]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => onClick(getPrevDate.date)}
        disabled={date === getMinDate}
        className={styles.leftButton}
      >
        <Image
          src="/svg/ic_chevron_left.svg"
          width={24}
          height={24}
          alt="Left arrow"
        />
      </button>
      <button
        type="button"
        onClick={() => onClick(getNextDate.date)}
        disabled={date === getMaxDate}
        className={styles.rightButton}
      >
        <Image
          src="/svg/ic_chevron_left.svg"
          width={24}
          height={24}
          alt="Right arrow"
        />
      </button>
      <div ref={calendarRef} className={styles.calendar}>
        {
          getRangeBetweenDates().map((item) => {
            const active = formatDate(date, YEAR_MONTH_DAY_HOUR_FORMAT) === item ? styles.active : '';
            const isDate = isSameDate(item);

            return (
              <button
                key={item}
                type="button"
                ref={active ? currentDayRef : null}
                className={active}
                disabled={!isDate}
                onClick={() => onClick(item)}
              >
                { formatDate(item, HOUR_FORMAT) }
              </button>
            );
          })
        }
      </div>
    </div>
  );
}