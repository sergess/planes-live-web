'use client';

import React from 'react';
import Link from 'next/link';

import styles from './delayHistoryCard.module.css';

export default function DelayHistoryCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>DELAY HISTORY</p>
      </div>
      <div className={styles.tabs}>
        <Link
          href="/"
          className={styles.tab}
        >
          Departures
        </Link>
        <Link
          href="/"
          className={styles.tab}
        >
          Arrivals
        </Link>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressWrapper}>
          <label className={styles.label} htmlFor="file">
            <div className={styles.labelText}>
              <p>
                On time
              </p>
              <p>10%</p>
            </div>
            <progress
              className={styles.progress}
              id="file"
              value="32"
              max="100"
            >
              {' '}
              32%
            </progress>
          </label>
        </div>
        <div className={styles.progressWrapper}>
          <label className={styles.label} htmlFor="file">
            On time
            <progress
              className={styles.progress}
              id="file"
              value="32"
              max="100"
            >
              {' '}
              32%
            </progress>
          </label>
        </div>
        <div className={styles.progressWrapper}>
          <label className={styles.label} htmlFor="file">
            On time
            <progress
              className={styles.progress}
              id="file"
              value="32"
              max="100"
            >
              {' '}
              32%
            </progress>
          </label>
        </div>
        <div className={styles.progressWrapper}>
          <label className={styles.label} htmlFor="file">
            On time
            <progress
              className={styles.progress}
              style={{
                '::WebkitProgressValue': {
                  background: 'grey',
                },
              }}
              id="file"
              value="32"
              max="100"
            >
              32%
            </progress>
          </label>
        </div>
      </div>
    </div>
  );
}
