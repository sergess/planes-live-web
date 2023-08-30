'use client';

import React from 'react';
import Calendar from 'react-calendar';
import * as dayjs from 'dayjs';

import './common.css';
import styles from './calendar.module.scss';
import Image from "next/image";

export default function CustomCalendar() {
  // [Todo] Mock active days
  const days = [new Date(2023, 7, 30), new Date(2023, 7, 31), new Date(2023, 7, 29)];

  const currentDate = new Date();
  const maxDate = new Date(dayjs(currentDate).add(3, 'month').toISOString());
  const minDate = new Date(dayjs(currentDate).subtract(1, 'week').toISOString());

  const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];
  const formatMonthYear = (locale, date) => dayjs(date).format('MMMM');

  return (
    <>
      <div className={styles.body}>
        <div className={styles.heading}>
          Select date
        </div>
        <Calendar
          next2Label={null}
          prev2Label={null}
          prevLabel={<Image
            src="/svg/ic_chevron_left.svg"
            width={28}
            height={28}
            alt="Left arrow"
          />}
          nextLabel={<Image
            src="/svg/ic_chevron_right.svg"
            width={28}
            height={28}
            alt="Right arrow"
          />}
          maxDetail="month"
          minDate={minDate}
          maxDate={maxDate}
          value={days}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={formatMonthYear}
          onClickDay={(value) => console.log('New date is: ', value.getDate())}
        />
      </div>
    </>
  );
}
