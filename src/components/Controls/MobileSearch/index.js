'use client';

import React from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { INPUT_DEBOUNCE, ROUTE_BY_TYPE } from '@/constants/index';
import { getMatchedLabel } from '@/utils/search';

import styles from './mobileSearch.module.css';

export default function Input({
  onChange = () => {}, options = [], onClick = () => {}, text,
}) {
  const router = useRouter();

  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, INPUT_DEBOUNCE),
    [options.length],
  );
  const onClose = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="text"
          onChange={(e) => debouncedChangeHandler(e)}
          className={styles.search}
          onClick={onClick}
        />
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <Image
            src="/svg/ic_close.svg"
            priority
            width={28}
            height={28}
            alt="Close"
          />
        </button>
      </div>

      <div className={styles.searchList}>
        {options.map(({ label, value, type }) => (
          <Link
            key={value}
            className={styles.option}
            href={`/${ROUTE_BY_TYPE[type]}/${value}`}
          >
            {getMatchedLabel(label, text)}
            <span>{type}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
