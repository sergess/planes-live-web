import React from 'react';
import Image from 'next/image';

import LinkTo from '@/components/Controls/Link';
import { Airport } from '@/services/index';
import Item from './Item';

import styles from './infoList.module.css';

const SHOW_ITEMS_COUNT = 6;

const airportService = new Airport();

export default async function InfoList({
  label, code, query, isArrival, showAll, otherQuery,
}) {
  const response = await airportService.getAirportFlightsByQuery(code, query);
  const dateKey = isArrival ? 'arrival' : 'departure';
  const airportLabel = isArrival ? 'origin:' : 'destination';
  const items = response.slice(0, +showAll);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <Image
          src="/svg/ic_departure.svg"
          width={12}
          height={12}
          alt="Departure icon"
        />
        <p>{label}</p>
      </div>
      {items.length > 0 && (
      <div className={styles.container}>
        {items.map(({ flight }) => (
          <Item
            icao={flight.icao}
            airportLabel={flight[airportLabel]}
            dateValue={flight[dateKey]}
            actualDateValue={flight[`${dateKey}_actual`]}
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
