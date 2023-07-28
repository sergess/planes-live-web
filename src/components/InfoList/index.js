import React from 'react';

import Arrival from '@/assets/svg/arrival';
import { BASE_API, request_uri } from '@/constants/index';
import { getHeaders } from '@/utils/api';
import LinkTo from '@/components/Link';
import Item from './Item';

import styles from './infoList.module.css';

const SHOW_ITEMS_COUNT = 10;

const fetchData = async (code, query) => {
  const uri = `${request_uri}airport/${code}/${query}`;
  const headers = getHeaders(uri);

  const response = await fetch(`${BASE_API}${uri}`, {
    headers,
  });
  // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();

  return data;
};

export default async function InfoList({
  label, code, query, isArrival, showAll, otherQuery,
}) {
  const response = await fetchData(code, query);
  const dateKey = isArrival ? 'arrival' : 'departure';
  const airportLabel = isArrival ? 'origin:' : 'destination';
  const items = response.slice(0, +showAll);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <Arrival />
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
