import React from 'react';

import styles from './statistics.module.css';

const ITEMS = [{
  label: 'Arrivals/day',
  field: 'arrivals',
}, {
  label: 'Departures/day',
  field: 'departures',
}, {
  label: 'Routes',
  field: 'routes',
}, {
  label: 'Countries',
  field: 'countries',
}, {
  label: 'Airlines',
  field: 'airlines',
}, {
  label: 'Terminals',
  field: 'terminals',
}];
export default function Statistics(statistic) {
  return (
    <div>
      <div className={styles.label}>
        <p>STATISTICS</p>
      </div>
      <div className={styles.container}>
        {ITEMS.map(({ label, field }) => (
          <div className={styles.item}>
            <p className={styles.title}>{label}</p>
            {/* eslint-disable-next-line react/destructuring-assignment */}
            <p className={styles.count}>{statistic[field]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
