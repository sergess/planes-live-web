'use client';

import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';

import Item from '@/components/Airport/InfoList/Item';
import ModalDaysSwitcher from '@/components/Airport/ModalInfoList/ModalDaysSwitcher';
import { formatDate } from '@/utils/date';
import { HOUR_24_FORMAT, WEEKDAY_MONTH_DAY_FORMAT, YEAR_MONTH_DAY_HOUR_FORMAT } from '@/constants/date';
import { trackEvent } from '@/services/analytic';

import styles from './modal.module.scss';

export default function ModalInfoList({
  data, tz, airports, mapAirportField, dateKey,
}) {
  const scrollRef = useRef();
  const [date, setDate] = useState(formatDate(new Date(), YEAR_MONTH_DAY_HOUR_FORMAT));

  const onScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollBox = scrollRef.current;
      Object.values(scrollBox.children).forEach((node) => {
        const elemTopСoordinate = node.getBoundingClientRect().top - scrollBox.getBoundingClientRect().top;
        const elemHeightValue = node.getBoundingClientRect().height;
        if (elemTopСoordinate <= 0 && elemTopСoordinate > 0 - elemHeightValue) {
          setDate(node.getAttribute('data'));
        }
      });
    }
  }, []);

  const onClick = useCallback((value, event) => {
    setDate(value);
    if (event) {
      const title = dateKey[0].toUpperCase() + dateKey.slice(1);
      const action = `${event} ${title}s`;
      trackEvent(action, { SelectedDate: value });
    }
    if (scrollRef.current) {
      const scrollBox = scrollRef.current;
      const { scrollTop } = scrollBox;
      Object.values(scrollBox.children).forEach((node) => {
        if (node.getAttribute('data') === value) {
          const { top } = node.getBoundingClientRect();
          scrollBox.scrollTop = top - scrollBox.getBoundingClientRect().top + scrollTop + 1;
        }
      });
    }
  }, []);

  useEffect(() => onClick(formatDate(date, YEAR_MONTH_DAY_HOUR_FORMAT)), []);

  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <div className={styles.top}>
          <div className={styles.heading}>
            {`${dateKey}s`}
          </div>
          <div className={styles.date}>{formatDate(date, WEEKDAY_MONTH_DAY_FORMAT)}</div>
        </div>
        <ModalDaysSwitcher
          data={data}
          date={date}
          onClick={onClick}
        />
      </div>
      <div ref={scrollRef} className={styles.scroll} onScroll={onScroll}>
        {
          data.length && data.map((item) => (
            <div className={styles.timeGroup} key={item.date} data={item.date}>
              <p className={styles.scrollHeading}>{formatDate(item.date, HOUR_24_FORMAT)}</p>
              {item.data.map((childItem) => {
                const { flight } = childItem;

                return (
                  <Item
                    key={flight.id}
                    id={flight.id}
                    icao={flight.icao}
                    iata={flight.iata}
                    dateValue={flight[dateKey]}
                    actualDateValue={flight[`${dateKey}_actual`]}
                    airport={airports.find((air) => air.icao === flight[mapAirportField])}
                    sharedCodes={flight.shared_codes}
                    tz={tz}
                    dateKey={dateKey}
                  />
                );
              })}
            </div>
          ))
        }
      </div>
    </div>
  );
}
