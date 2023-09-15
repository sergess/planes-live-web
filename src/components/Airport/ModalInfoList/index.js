'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as dayjs from 'dayjs';

import { formatDate } from "@/utils/date";
import Item from "@/components/Airport/InfoList/Item";

import styles from './modal.module.scss';

export default function ModalInfoList({data, tz, airports, mapAirportField, dateKey}) {
  const scrollRef = useRef();
  const [date, setDate] = useState(new Date());
  const [shift, setShift] = useState(0);

  const onScroll = useCallback(() => {
    if (scrollRef.current) {
      console.log(scrollRef.current);
      //setShift(scrollRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    console.log('shift', shift);
  }, [shift]);

  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <div className={styles.top}>
          <div className={styles.heading}>{dateKey}</div>
          <div className={styles.date}>{formatDate(date, 'ddd, MMM D')}</div>
        </div>
        <div className={styles.calendar}><button type="button">1</button> <button type="button">2</button> <button type="button" className={styles.active}>3</button> <button type="button">4</button> <button type="button">5</button></div>
      </div>
      <div ref={scrollRef} className={styles.scroll} onScroll={onScroll}>
        {
          data.length && data.map((item) => (
             <div className={styles.timeGroup} key={item.date} data={item.date}>
               <p className={styles.scrollHeading}>{formatDate(item.date, 'h A')}</p>
               {item.data.map(childItem => {
                 const flight = childItem.flight;
                 return (
                   <Item
                     key={flight.icao}
                     icao={flight.icao}
                     iata={flight.iata}
                     dateValue={flight[dateKey]}
                     actualDateValue={flight[`${dateKey}_actual`]}
                     airport={airports.find((air) => air.icao === flight[mapAirportField])}
                     sharedCodes={flight.shared_codes}
                     tz={tz}
                   />
                 )})}
             </div>
        ))
        }
      </div>
    </div>
  );
}
