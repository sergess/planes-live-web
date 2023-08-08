import React from 'react';

import styles from './button.module.css';

export default function Button({ children, href }) {
  return (
    <a
      className={styles.outline}
      href={href}
      type="button"
    >
      {children}
    </a>
  );
}
