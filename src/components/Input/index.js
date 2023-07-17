'use client';

import React from 'react';

import debounce from 'lodash.debounce';
import styles from './input.module.css';

const DEBOUNCE = 200;

export default function Input({ placeholder, onChange, options }) {
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, DEBOUNCE),
    [options.length],
  );

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => debouncedChangeHandler(e)}
        className={styles.input}
        list="options"
      />
      <datalist className={styles.datalist} id="options">
        {options.map(({ label, value }) => (
          <option
            key={value}
            value={value}
            className={styles.option}
          >
            {label}
          </option>
        ))}
      </datalist>
    </>
  );
}
