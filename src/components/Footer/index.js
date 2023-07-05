import React from 'react';

import LogoSvg from '@/assets/svg/logo';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <p className={styles.blocks}>
        Search for flights
        <br />
        Contact support
        <br />
        More apps
        <br />
      </p>
      <p className={styles.copyright}>
        Copyright @ 2022 Apalon Apps. All rights reserved.
      </p>
      <p className={styles.privacy}>Privacy Policy | Terms</p>
    </footer>
  );
}
