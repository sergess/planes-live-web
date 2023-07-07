import React from 'react';

import kennedyAirport from '@/assets/img/kennedyAirport.png';
import Image from 'next/image';
import Phone from '@/assets/svg/phone';
import Weather from '@/assets/svg/weather';
import styles from './card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <Image
          className={styles.img}
          src={kennedyAirport}
          alt=""
        />
        <figcaption className={styles.figCaption}>
          John F Kennedy
          International Airport
          {' '}
        </figcaption>
      </figure>
      <div className={styles.row}>
        <span className={styles.primaryText}>
          <Phone />
          <span className={styles.text}>+1 206-787-5388</span>
        </span>
        <span>
          <Weather />
          <span className={styles.text}>22°</span>
        </span>
      </div>
      <div className={styles.row}>
        <p className={styles.textLg}>
          JFK
        </p>
        <p className={styles.textSm}>
          New York
          {' '}
          <br />
          <span>United States</span>
        </p>
      </div>
      <p className={`${styles.row} ${styles.dark_7}`}>
        <span>11:56 • GMT-7</span>
        {' '}
        <span>Mon, May 3</span>
      </p>
    </div>
  );
}
