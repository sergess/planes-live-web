'use client';

import React from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { INPUT_DEBOUNCE, ROUTE_BY_TYPE } from '@/constants/index';
import { getMatchedLabel } from '@/utils/search';

import styles from './mobileSearch.module.scss';

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
          onChange={debouncedChangeHandler}
          className={styles.search}
          onClick={onClick}
          autoFocus
        />
        <button
          type="button"
          className={`${styles.close} analytic__close_search`}
          onClick={onClose}
        >
          <Image
            src="/svg/ic_close_bold.svg"
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
            prefetch={false}
            key={value}
            className={`${styles.option} analytic__search_option`}
            href={`/${ROUTE_BY_TYPE[type]}/${value}`}
            data-analytic-code={value}
          >
            {getMatchedLabel(label, text)}
            <span>{type}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
