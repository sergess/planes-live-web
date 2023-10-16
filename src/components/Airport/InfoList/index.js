import React from 'react';
import Image from 'next/image';
import * as dayjs from 'dayjs';

import LinkTo from '@/components/Controls/Link';
import { Airport } from '@/services/index';
import { filterOnlyFutureFlights, formatDate } from '@/utils/date';
import { YEAR_MONTH_DAY_HOUR_FORMAT } from '@/constants/date';
import Item from './Item';

import styles from './infoList.module.css';

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
    const d = formatDate(date, YEAR_MONTH_DAY_HOUR_FORMAT, tz);
    if (result[d]) {
      result[d].push(item);
    } else {
      result[d] = [item];
    }
  });
  Object.keys(result).forEach((item) => {
    dataArray.push({ date: item, data: result[item] });
  });
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
          key < 5 && (
          <Item
            key={flight.iata}
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
          )
        ))}
        <LinkTo
          data={dataArray}
          tz={tz}
          airports={airports}
          mapAirportField={mapAirportField}
          dateKey={dateKey}
          analyticSelector={`analytic__show_all_${query}`}
        >
          Show all
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
