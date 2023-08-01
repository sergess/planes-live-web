import React from 'react';
import styles from './page.module.css';

export default async function Page({ params }) {
  return (
    <div className={styles.container}>
      flight page
      {' '}
      {params.id}
    </div>
  );
}
