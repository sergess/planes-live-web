import React from 'react';
import Image from 'next/image';

import NoSearchResults from '@/assets/img/NoSearchResults.png';

import styles from './NoResult.module.css';

export default function NoResult() {
  return (
    <div className={styles.container}>
      <Image
        src={NoSearchResults}
        alt=""
      />
      <p className={styles.label}>No Results</p>
      <ul className={styles.list}>
        <li>Double-check the flight number or airports and search again</li>
        <li>
          For charter flights, contact the flight provider.
          We don’t always list them.
        </li>
        <li>
          Search for connecting flights one by one
        </li>
      </ul>
    </div>
  );
}