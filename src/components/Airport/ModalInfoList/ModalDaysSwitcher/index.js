'use client';

import React, { useCallback, useMemo } from 'react';
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

const LEFT_BUTTON = 'Click on left arrow in';
const RIGHT_BUTTON = 'Click on right arrow in';
const DATE_CHOSEN = 'Date chosen in';

export default function ModalInfoList({ data, date, onClick }) {
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

  const getMinDate = data[0].date;
  const getMaxDate = data[data.length - 1].date;
  const getNextDate = useMemo(() => data.find((item, key, arr) => arr[key - 1]?.date === date), [data, date]);
  const getPrevDate = useMemo(() => data.find((item, key, arr) => arr[key + 1]?.date === date), [data, date]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => onClick(getPrevDate.date, LEFT_BUTTON)}
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
        onClick={() => onClick(getNextDate.date, RIGHT_BUTTON)}
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
      <div className={styles.calendar}>
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
                onClick={() => onClick(item, DATE_CHOSEN)}
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
