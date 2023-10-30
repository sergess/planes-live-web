import React from 'react';

import styles from './button.module.css';

export default function Button({ children, href, analyticSelector = '' }) {
  return (
    <a
      className={`${styles.outline} ${analyticSelector}`}
      href={href}
      type="button"
    >
      {children}
    </a>
  );
}
