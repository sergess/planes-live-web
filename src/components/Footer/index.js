import React from 'react';

import LogoSvg from '@/assets/svg/logo';
import styles from './footer.module.css';

const TERMS_REF = 'http://planeslive.com/terms';
const POLICY_REF = 'http://planeslive.com/privacyPolicy';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <LogoSvg />
        <p className={styles.label}>Planes Live</p>
      </div>
      <div className={styles.blocks}>
        <p>Search for flights</p>
        <a
          className={styles.support}
          href="mailto:support@planeslive.app?subject=support"
        >
          Contact support
        </a>
        <p>More apps</p>
      </div>
      <p className={styles.copyright}>
        Copyright @ 2022 Apalon Apps. All rights reserved.
      </p>
      <a
        href={POLICY_REF}
        target="_blank"
        className={styles.privacy}
        rel="noreferrer"
      >
        Privacy Policy
      </a>
      <span> | </span>
      <a
        href={TERMS_REF}
        target="_blank"
        className={styles.privacy}
        rel="noreferrer"
      >
        Terms of use
      </a>
    </footer>
  );
}
