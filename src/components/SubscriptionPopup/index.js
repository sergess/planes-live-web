import React from 'react';
import Image from 'next/image';

import StoreBadge from '@/components/StoreBadge';
import Button from '@/components/Controls/Buttons/primary';

import styles from './SubscriptionPopup.module.scss';

export default function SubscriptionPopup() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/popup_icon_logo.png"
          fill
          alt="Planes Live"
        />
      </div>
      <div className={styles.about}>
        <strong>Know more.<br /> Guess less.</strong>
        Track flights in real time<br /> with the Planes Live app
      </div>
      <div className={styles.buttons}>
        <Button>Download app</Button>
        <div>
          <Image
            src="/qr_ios.png"
            width={172}
            height={172}
            alt="QR ios"
          />
          <Image
            src="/qr_gp.png"
            width={172}
            height={172}
            alt="QR gp"
          />
          <StoreBadge />
        </div>
      </div>
    </div>
  );
}
