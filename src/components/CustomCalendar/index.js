'use client';

import React, {
  useState, useRef, useCallback, useMemo,
} from 'react';
import Calendar from 'react-calendar';
import * as dayjs from 'dayjs';
import Image from 'next/image';

import CalendarTooltip from '@/components/CalendarTooltip';
import { formatDate, isSameDay } from '@/utils/date';
import useFetch from '@/hooks/useFetch';
import useMutationFetch from '@/hooks/useMutationFetch';
import CalendarMoreFlights from '@/components/CalendarMoreFlights';
import CalendarLoader from '@/components/CalendarLoader';
import {
  MONTH_DAY_DATE_FORMAT,
  YEAR_MONTH_DATE_FORMAT,
  YEAR_MONTH_DAY_DATE_FORMAT,
} from '@/constants/date';

import './common.css';
import styles from './calendar.module.scss';

export default function CustomCalendar({ flightData, setFlightData }) {
  const interval = useRef();

  const [dayWithoutFlight, setDayWithoutFlight] = useState(null);
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const [openedMoreFlights, setOpenedMoreFlights] = useState(false);
  const [flights, setFlights] = useState([]);

  const currentDate = new Date();

  const maxDate = new Date(dayjs(currentDate).add(3, 'month').toISOString());

  const getMinDate = useCallback(
    () => {
      const numberOfYear = currentDate.getFullYear();
      const numberOfMonth = currentDate.getMonth();
      const prevNumberOfMonth = numberOfMonth === 0 ? 11 : numberOfMonth - 1;

      return currentDate.getDate() > 1
        ? new Date(numberOfYear, numberOfMonth, 1)
        : new Date(numberOfYear, prevNumberOfMonth, 1);
    },
    [currentDate],
  );

  const { data: flightSchedule, isLoading: flightScheduleLoading } = useFetch('/api/flight', {
    flight: flightData?.flight?.icao, // TODO: change to iata?
    month: formatDate(currentDate, YEAR_MONTH_DATE_FORMAT),
  });

  const daysWithFlight = useMemo(() => {
    if (!flightSchedule) return null;

    return flightSchedule.data.dates.map((item) => item.date);
  }, [flightSchedule]);

  const { trigger, isMutating } = useMutationFetch('/api/flightsbyid');

  const formatShortWeekday = useCallback((locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()], []);
  const formatMonthYear = useCallback((locale, date) => formatDate(date, 'MMMM'), []);
  const selectFlightDay = useCallback(({ date }) => (isSameDay(daysWithFlight, date) ? 'flightday' : null), [daysWithFlight]);

  const onOpenTooltip = useCallback(() => {
    setTooltipOpened(true);
    clearTimeout(interval.current);
    interval.current = setTimeout(() => setTooltipOpened(false), 3000);
  }, []);

  const setFlight = useCallback(
    (value) => () => setFlightData({
      flight: flights[value].flight,
      date: flights[value].flight.departure,
      position: flights[value].position,
    }),
    [flights],
  );

  const onSelectDate = useCallback(async (value) => {
    try {
      if (isSameDay(daysWithFlight, value)) {
        const { data } = await trigger(
          { flight: flightData?.flight?.icao, date: formatDate(value, YEAR_MONTH_DAY_DATE_FORMAT) },
        );
        setFlights(data.flights);
        setTooltipOpened(false);
        if (flightSchedule.data.dates.some((item) => item.count === 1)) {
          setFlightData({
            flight: data.flights[0].flight,
            date: data.flights[0].flight.departure,
            position: data.flights[0].position,
          });
          // change url without reload
          window.history.pushState({}, null, `/flight/${data.flights[0].flight.icao}/${data.flights[0].flight.id}`);
        } else {
          setOpenedMoreFlights(true);
        }
      } else {
        setOpenedMoreFlights(false);
        onOpenTooltip();
        const selectedDate = formatDate(value, MONTH_DAY_DATE_FORMAT);
        setDayWithoutFlight(selectedDate);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Something went wrong');
    }
  }, [daysWithFlight]);

  return (
    <div className={styles.body}>
      {(flightScheduleLoading || isMutating) && <CalendarLoader />}
      <div className={styles.heading}>
        Select date
      </div>
      {tooltipOpened && <CalendarTooltip date={dayWithoutFlight} />}
      {openedMoreFlights && <CalendarMoreFlights flights={flights} onClick={(value) => setFlight(value)} />}
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
        tileClassName={selectFlightDay}
        value={currentDate}
        tileDisabled={({ activeStartDate, date }) => dayjs(activeStartDate).month() !== dayjs(date).month()}
        maxDetail="month"
        minDate={getMinDate()}
        maxDate={maxDate}
        formatShortWeekday={formatShortWeekday}
        formatMonthYear={formatMonthYear}
        onClickDay={onSelectDate}
      />
    </div>
  );
}
