import React from 'react';

import styles from './input.module.css';

export default function Input({ placeholder }) {
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  );
}
