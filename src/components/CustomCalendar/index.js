'use client';

import React, {
  useState, useRef, useCallback, useEffect, useContext,
} from 'react';
import Calendar from 'react-calendar';
import * as dayjs from 'dayjs';
import Image from 'next/image';

import CaledarTooltip from '@/components/CalendarTooltip';
import { flightRequest, flightByIdRequest } from '@/requests/index';
import {
  DAY_MONTH_DATE_FORMAT,
  MONTH_DAY_DATE_FORMAT,
  YEAR_MONTH_DATE_FORMAT,
  YEAR_MONTH_DAY_DATE_FORMAT,
} from '@/constants/date';
import { isSameDay } from '@/utils/isSameDay';
import flightContext from '@/contexts/flight/FlightContext';
import { formatDate } from '@/utils/date';

import './common.css';
import styles from './calendar.module.scss';

export default function CustomCalendar() {
  const interval = useRef();
  const [dayWithoutFlight, setDayWithoutFlight] = useState(null);
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const [days, setDays] = useState(null);
  const { flightData, setFlightData } = useContext(flightContext);

  const currentDate = new Date();

  const maxDate = new Date(dayjs(currentDate).add(3, 'month').toISOString());
  const minDate = new Date(dayjs(currentDate).subtract(1, 'week').toISOString());

  useEffect(() => {
    (async () => {
      // [TODO] return date + count: {date: '2023-08-30', count: 1}
      const { dates } = await flightRequest(
        { flight: flightData?.flight?.icao, month: formatDate(currentDate, YEAR_MONTH_DATE_FORMAT) },
      );
      const arrayDates = dates.map((item) => item.date);
      setDays(arrayDates);
    })();
  }, []);

  const getFlightData = (value) => {
    (async () => {
      // [TODO] return array of flights
      const { flights } = await flightByIdRequest({ flight: flightData?.flight?.icao, date: value });
      setFlightData(
        (prevState) => ({ ...prevState, flight: flights[0].flight, date: formatDate(value, DAY_MONTH_DATE_FORMAT) }),
      );
    })();
  };

  const formatShortWeekday = useCallback((locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()], []);
  const formatMonthYear = useCallback((locale, date) => formatDate(date, 'MMMM'), []);
  const selectFlightDay = useCallback(({ date }) => (isSameDay(days, date) ? 'flightday' : null), [days]);

  const onOpenTooltip = useCallback(() => {
    setTooltipOpened(true);
    clearTimeout(interval.current);
    interval.current = setTimeout(() => setTooltipOpened(false), 3000);
  }, []);

  const onClick = useCallback((value) => {
    if (isSameDay(days, value)) {
      setTooltipOpened(false);
      // [TODO] here should be loader?
      getFlightData(formatDate(value, YEAR_MONTH_DAY_DATE_FORMAT));
    } else {
      onOpenTooltip();
      const selectedDate = formatDate(value, MONTH_DAY_DATE_FORMAT);
      setDayWithoutFlight(selectedDate);
    }
  }, [days]);

  return (
    <div className={styles.body}>
      <div className={styles.heading}>
        Select date
      </div>
      {tooltipOpened && <CaledarTooltip date={dayWithoutFlight} />}
      <Calendar
        next2Label={null}
        prev2Label={null}
        prevLabel={(
          <Image
            src="/svg/ic_chevron_left.svg"
            width={28}
            height={28}
            alt="Left arrow"
          />
)}
        nextLabel={(
          <Image
            src="/svg/ic_chevron_right.svg"
            width={28}
            height={28}
            alt="Right arrow"
          />
)}
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
  );
}
