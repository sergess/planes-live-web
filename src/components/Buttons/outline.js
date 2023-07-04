import React from 'react';

import styles from './button.module.css';

export default function Button({ children }) {
  return (
    <button className={styles.outline} type="button">{children}</button>
  );
}
