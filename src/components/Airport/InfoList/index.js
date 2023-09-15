import React from 'react';
import Image from 'next/image';

import LinkTo from '@/components/Controls/Link';
import { Airport } from '@/services/index';
import {filterOnlyFutureFlights, formatDate} from '@/utils/date';
import Item from './Item';

import styles from './infoList.module.css';
import * as dayjs from "dayjs";

const SHOW_ITEMS_COUNT = 6;

const airportService = new Airport();
const DEPARTURE_ICON = '/svg/ic_departure.svg';
const ARRIVAL_ICON = '/svg/ic_arrival.svg';

export default async function InfoList({
  label, code, query, isArrival, airports,
  mapAirportField, tz,
}) {
  const response = await airportService.getAirportFlightsByQuery(code, query);
  const dateKey = isArrival ? 'arrival' : 'departure';
  const items = response.filter((item) => filterOnlyFutureFlights(item, dateKey, tz));

  // [TODO] Think about best way to get appropriate date format
  const result = {};
  const dataArray = [];
  response.forEach((item) => {
    const date = item.flight[`${dateKey}_actual`] || item.flight[dateKey];
    const d = formatDate(date, 'YYYY-MM-DD HH', tz);
    if(result[d]){
      result[d].push(item);
    } else {
      result[d] = [item];
    }
  });
  for (let key in result) {
    dataArray.push({'date': key, 'data': result[key]});
  }
  dataArray.sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <Image
          src={isArrival ? ARRIVAL_ICON : DEPARTURE_ICON}
          width={14}
          height={14}
          alt="Departure icon"
        />
        <p>{label}</p>
      </div>
      {items.length > 0 && (
      <div className={styles.container}>
        {items.map(({ flight }, key) => (
          key < 5 && <Item
            key={flight.icao}
            icao={flight.icao}
            iata={flight.iata}
            dateValue={flight[dateKey]}
            actualDateValue={flight[`${dateKey}_actual`]}
            airport={airports.find((air) => air.icao === flight[mapAirportField])}
            sharedCodes={flight.shared_codes}
            tz={tz}
          />
        ))}
        <LinkTo data={dataArray} tz={tz} airports={airports} mapAirportField={mapAirportField} dateKey={dateKey}>
          Show All
        </LinkTo>
      </div>
      )}

      {!items?.length && (
      <div className={styles.empty}>
        Can’t load the timetable
        Try reloading the page or checking later
      </div>
      )}
    </div>
  );
}
