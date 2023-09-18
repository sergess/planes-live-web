'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

import Item from "@/components/Airport/InfoList/Item";
import ModalDaysSwitcher from "@/components/Airport/ModalInfoList/ModalDaysSwitcher";
import { formatDate } from "@/utils/date";

import styles from './modal.module.scss';

export default function ModalInfoList({data, tz, airports, mapAirportField, dateKey}) {
  const scrollRef = useRef();
  const [date, setDate] = useState(formatDate(new Date(), 'YYYY-MM-DD HH'));

  const onScroll = useCallback(() => {
    if (scrollRef.current) {
      const scrollBox = scrollRef.current;
      for (let node of scrollBox.children) {
        const elemTopСoordinate = node.getBoundingClientRect().top - scrollBox.getBoundingClientRect().top;
        const elemHeightValue = node.getBoundingClientRect().height;
        if ( elemTopСoordinate <= 0 && elemTopСoordinate > 0 - elemHeightValue ) {
          setDate(node.getAttribute('data'));
        }
      }
    }
  }, []);

  const onClick = value => {
    setDate(value);
    if (scrollRef.current) {
      const scrollBox = scrollRef.current;
      const { scrollTop } = scrollBox;
      for (let node of scrollBox.children) {
        if(node.getAttribute('data') === value) {
          const { top } = node.getBoundingClientRect();
          scrollBox.scrollTop = top - scrollBox.getBoundingClientRect().top + scrollTop + 1;
        }
      }
    }
  }

  useEffect(() => onClick(formatDate(date, 'YYYY-MM-DD HH')), []);

  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <div className={styles.top}>
          <div className={styles.heading}>{dateKey}</div>
          <div className={styles.date}>{formatDate(date, 'ddd, MMM D')}</div>
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
