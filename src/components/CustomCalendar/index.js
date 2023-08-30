'use client';

import React, {useState, useRef, useCallback} from 'react';
import Calendar from 'react-calendar';
import * as dayjs from 'dayjs';
import Image from "next/image";

import CaledarTooltip from "@/components/CalendarTooltip";
import {MONTH_DAY_DATE_FORMAT} from "@/constants/date";

import './common.css';
import styles from './calendar.module.scss';

export default function CustomCalendar() {
  const interval = useRef();
  const [date, setDate] = useState(null);
  const [tooltipOpened, setTooltipOpened] = useState(false);

  // [Todo] Mock active days
  const days = [new Date(2023, 7, 30), new Date(2023, 7, 31), new Date(2023, 7, 29)];

  const currentDate = new Date();
  const maxDate = new Date(dayjs(currentDate).add(3, 'month').toISOString());
  const minDate = new Date(dayjs(currentDate).subtract(1, 'week').toISOString());

  const formatShortWeekday = useCallback((locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()], []);
  const formatMonthYear = useCallback((locale, date) => dayjs(date).format('MMMM'),[]);

  const onOpenTooltip = useCallback(() => {
    clearTimeout(interval.current);
    setTooltipOpened(true);
    interval.current = setTimeout(() => setTooltipOpened(false), 3000);
  }, []);
  
  const isSame = (value) => {
    if (days.some((item) => dayjs(item).isSame(value, 'day'))) {
      setTooltipOpened(false);
    } else {
      onOpenTooltip();
      const date = dayjs(value).format(MONTH_DAY_DATE_FORMAT);
      setDate(date);
    }
  };

  const onClick = value => isSame(value);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.heading}>
          Select date
        </div>
        {tooltipOpened && <CaledarTooltip date={date} />}
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
            onClickDay={onClick}
          />
        </div>
    </>
  );
}
