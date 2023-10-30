import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import styles from './footer.module.scss';

const APALON_COM_REF = 'https://apalon.com/';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/svg/app_icon.svg"
          width={40}
          height={41}
          alt="Planes Live - Flight Tracker app"
        />
        <p className={styles.label}>Planes Live</p>
      </div>
      <div className={styles.blocks}>
        <Link className={`${styles.infoLink} analytic__search_flights`} href="/search">Search for flights</Link>
        <a
          className={`${styles.infoLink} analytic__contact_support`}
          href="mailto:support@planeslive.com?subject=support"
        >
          Contact support
        </a>
        <span
          className={`ot-sdk-show-settings ${styles.infoLink} analytic__manage_preferences`}
        >
          Manage preferences
        </span>
      </div>
      <p className={styles.apalon}>
        Planes Live, a Clime Weather Service LLC brand, is
        part of the Apalon family. See more at
        {' '}
        <a className={styles.apalonHref} href={APALON_COM_REF} target="_blank" rel="noreferrer">Apalon.com</a>
        . All
        trademarks and brand names belong to their respective owners. Use
        of third party trademarks does not represent endorsement.
      </p>
      <p className={styles.copyright}>
        © 2023 Apalon LCC. All rights reserved.
      </p>
      <Link
        href="/privacyPolicy"
        className={`${styles.privacy} analytic__privacy_policy`}
      >
        Privacy Policy
      </Link>
      <span className={styles.separator}> | </span>
      <Link
        href="/terms"
        className={`${styles.privacy} analytic__terms`}
      >
        Terms
      </Link>
    </footer>
  );
}
