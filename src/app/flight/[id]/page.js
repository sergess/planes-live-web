import React from 'react';

import Swipe from '@/components/Swipe';

import styles from './page.module.css';

const getDrawerState = (state = 0) => {
  if (+state === 0) {
    return styles.middle;
  }
  if (+state === 1) {
    return styles.top;
  }
  if (+state === -1) {
    return styles.bottom;
  }

  return '';
};
export default async function Page({
  params, searchParams = {
    drawer: 0,
  },
}) {
  const date = new Date();
  const [day, month] = date.toString().split(' ');

  return (
    <div className={styles.container}>
      <div className={`${styles.drawer} ${getDrawerState(+searchParams.drawer || 0)}`}>
        <Swipe id={params.id} state={+searchParams.drawer || 0} />
        <p className={styles.label}>
          <span className={styles.date}>
            {day}
            ,
            {' '}
            {month}
            {' '}
            {date.getDate()}
          </span>
          <span className={styles.changeLabel}>
            Change date
          </span>
        </p>

      </div>
    </div>
  );
}
