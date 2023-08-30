import React from 'react';

import { formatDate } from '@/utils/date';
import { DAY_MONTH_DATE_FORMAT } from '@/constants/date';
import styles from './dateBlock.module.css';
import dynamic from "next/dynamic";
import Image from "next/image";

const ChangeDateButton = dynamic(() => import('@/components/Controls/Buttons/date'), { ssr: false });

export default function DateBlock() {
  const date = new Date();

  return (
    <p className={styles.label}>
      <span className={styles.date}>
        {formatDate(date, DAY_MONTH_DATE_FORMAT)}
      </span>
      <ChangeDateButton>
        Change date <Image
        src="/svg/calendar.svg"
        width={24}
        height={24}
        alt="Change Date"
      />
      </ChangeDateButton>
    </p>
  );
}
