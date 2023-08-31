import React from 'react';

import styles from './CalendarTooltip.module.scss';

export default function CaledarTooltip({ date }) {
  return (
    <div className={styles.tooltip}>{ `No flights on ${date}` }</div>
  );
}
