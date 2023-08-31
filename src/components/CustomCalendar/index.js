'use client';

import React, {useState, useRef, useCallback, useEffect} from 'react';
import Calendar from 'react-calendar';
import * as dayjs from 'dayjs';
import Image from "next/image";

import CaledarTooltip from "@/components/CalendarTooltip";
import {MONTH_DAY_DATE_FORMAT} from "@/constants/date";

import './common.css';
import styles from './calendar.module.scss';

import flightRequest from "@/requests/flightRequest";
import isSameDay from "@/utils/isSameDay";

export default function CustomCalendar() {
  const interval = useRef();
  const [date, setDate] = useState(null);
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const [days, setDays] = useState(null);

  useEffect(() => {
    (async () => {
      const { dates } = await flightRequest({flight: 'FLI401', month: '2023-9'});
      const arrayDates = dates.map(item => item.date);
      setDays(arrayDates)
    })();
  }, []);

  const currentDate = new Date();
  const maxDate = new Date(dayjs(currentDate).add(3, 'month').toISOString());
  const minDate = new Date(dayjs(currentDate).subtract(1, 'week').toISOString());

  const formatShortWeekday = useCallback((locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()], []);
  const formatMonthYear = useCallback((locale, date) => dayjs(date).format('MMMM'),[]);
  const selectFlightDay = ({ date }) => {
    return isSameDay(days, date) ? 'flightday' : null
  };

  const onOpenTooltip = useCallback(() => {
    clearTimeout(interval.current);
    setTooltipOpened(true);
    interval.current = setTimeout(() => setTooltipOpened(false), 3000);
  }, []);

  const onClick = value => {
    if (isSameDay(days, value)) {
      setTooltipOpened(false);
    } else {
      onOpenTooltip();
      const date = dayjs(value).format(MONTH_DAY_DATE_FORMAT);
      setDate(date);
    }
  };

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
            defaultActiveStartDate={currentDate}
            tileClassName={selectFlightDay}
            maxDetail="month"
            minDate={minDate}
            maxDate={maxDate}
            formatShortWeekday={formatShortWeekday}
            formatMonthYear={formatMonthYear}
            onClickDay={onClick}
          />
        </div>
    </>
  );
}
