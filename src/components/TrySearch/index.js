import React from 'react';

import styles from './TrySearch.module.css';

export default function TrySearch() {
  return (
    <div className={styles.container}>
      <p>
        You could try:
        <br />
        ‘AA100’, ‘Emirates’, or ‘LAX’
      </p>
    </div>
  );
}
