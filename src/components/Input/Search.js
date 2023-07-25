'use client';

import React from 'react';

import debounce from 'lodash.debounce';
import Close from '@/assets/svg/close';
import { useRouter } from 'next/navigation';
import styles from './input.module.css';

const DEBOUNCE = 200;

export default function Input({
  onChange = () => {}, options = [], onClick = () => {}, onSelect,
}) {
  const router = useRouter();

  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, DEBOUNCE),
    [options.length],
  );
  const onOptionClick = (e) => {
    onSelect(options[e.target.value].value);
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
          list="options"
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
        {options.map(({ label, value }) => (
          <li
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
            role="button"
            onKeyDown={onOptionClick}
            tabIndex="0"
            key={value}
            value={value}
            className={styles.option}
            onClick={onOptionClick}
          >
            {label}
            <span>Airport</span>
          </li>
        ))}
      </ul>
    </>
  );
}
