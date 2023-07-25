import React from 'react';
import Image from 'next/image';

import LogoSvg from '@/assets/svg/logo.svg';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/assets/svg/logo.svg" width={40} height={41} alt="" />
        <p className={styles.label}>Planes Live</p>
      </div>
      <div className={styles.blocks}>
        <p>Search for flights</p>
        <p>Contact support</p>
        <p>More apps</p>
      </div>
      <p className={styles.copyright}>
        Copyright @ 2022 Apalon Apps. All rights reserved.
      </p>
      <p className={styles.privacy}>Privacy Policy | Terms</p>
    </footer>
  );
}
