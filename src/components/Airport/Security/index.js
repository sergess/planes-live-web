import React from 'react';

import PrimaryButton from '@/components/Controls/Buttons/primaryWithModal';
import styles from './security.module.css';

export default function Security({ airport }) {
  return (
    <div>
      <div className={styles.label}>
        <p>SECURITY WAIT TIMES</p>
      </div>
      <div className={styles.container}>
        <PrimaryButton analyticSelector="analytic__open_in_app" airport={airport}>Open in the app</PrimaryButton>
      </div>
    </div>
  );
}
