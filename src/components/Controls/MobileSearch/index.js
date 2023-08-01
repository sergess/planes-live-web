'use client';

import React from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';

import Close from '@/assets/svg/close';

import { INPUT_DEBOUNCE } from '@/constants/index';
import styles from './mobileSearch.module.css';

export default function Input({
  onChange = () => {}, options = [], onClick = () => {}, onSelect,
}) {
  const router = useRouter();

  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, INPUT_DEBOUNCE),
    [options.length],
  );
  const onOptionClick = (e, type) => {
    onSelect(options[e.target.value].value, type);
  };
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
          autoFocus
        />
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <Close />
        </button>
      </div>

      <ul className={styles.searchList}>
        {options.map(({ label, value, type }) => (
          <li
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
            role="button"
            onKeyDown={(e) => onOptionClick(e, type)}
            tabIndex="0"
            key={value}
            value={value}
            className={styles.option}
            onClick={(e) => onOptionClick(e, type)}
          >
            {label}
            <span>Airport</span>
          </li>
        ))}
      </ul>
    </>
  );
}
