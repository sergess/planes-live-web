'use client';

import React from 'react';

import debounce from 'lodash.debounce';
import styles from './input.module.css';

export default function Input({ placeholder, onChange, options = [] }) {
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, 300),
    [],
  );

  return (
    <>
      <input type="text" placeholder={placeholder} onChange={debouncedChangeHandler} className={styles.input} list="options" />
      <datalist className={styles.datalist} id="options">
        {options.map((option) => (<option className={styles.option}>{option}</option>))}
      </datalist>
    </>
  );
}
