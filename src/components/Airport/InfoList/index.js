import React from 'react';
import Image from 'next/image';

import LinkTo from '@/components/Controls/Link';
import { Airport } from '@/services/index';
import { filterOnlyFutureFlights } from '@/utils/date';
import Item from './Item';

import styles from './infoList.module.css';

const SHOW_ITEMS_COUNT = 6;

const airportService = new Airport();
const DEPARTURE_ICON = '/svg/ic_departure.svg';
const ARRIVAL_ICON = '/svg/ic_arrival.svg';

export default async function InfoList({
  label, code, query, isArrival, showAll, otherQuery, airports,
  mapAirportField, tz,
}) {
  const response = await airportService.getAirportFlightsByQuery(code, query);
  const dateKey = isArrival ? 'arrival' : 'departure';
  const items = response.filter((item) => filterOnlyFutureFlights(item, dateKey, tz))
    .slice(0, +showAll);

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
        {items.map(({ flight }) => (
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
        ))}
        <LinkTo
          href={`?show_${query}=${+showAll + SHOW_ITEMS_COUNT}&${otherQuery}`}
        >
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
