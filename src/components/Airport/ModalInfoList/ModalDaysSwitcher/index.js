'use client';

import React, { useRef, useCallback, useEffect } from 'react';
import dayjs from 'dayjs';

import { formatDate } from "@/utils/date";

import styles from './modal.module.scss';

function getRangeBetweenDates() {
  const current = dayjs();
  const start = new Date(current.subtract(30, 'hour').toISOString());
  const end = new Date(current.add(30, 'hour').toISOString());
  let hours = [];
  for (let cur = start; cur <= end; cur.setHours(cur.getHours() + 1)) {
    hours.push(formatDate(cur, 'YYYY-MM-DD HH'));
  }
  return hours;
}

export default function ModalInfoList({data, date, onClick}) {
  const calendarRef = useRef();

  const currentDayRef = useCallback(
    (node) => {
      if (node !== null) {
        node.scrollIntoView({ inline: 'center' })
      }
    },
    [date, data]
  );

  const isSameDate = (value) => {
    if (data.some(item => item.date === value)) {
      return true;
    }
  };

  return(
    <div className={styles.wrapper}>
      <div ref={calendarRef} className={styles.calendar}>
        {
          getRangeBetweenDates().map((item, key) => {
              {
                const active = formatDate(date, 'YYYY-MM-DD HH') === item ? styles.active : '';
                const isDate = isSameDate(item);
                return (
                  <button
                    key={key}
                    type="button"
                    ref={active ? currentDayRef : null}
                    className={active}
                    disabled={!isDate}
                    onClick={() => onClick(item)}
                  >
                    { formatDate(item, 'H') }
                  </button>
                )
              }
          })
        }
      </div>
    </div>
  )
}