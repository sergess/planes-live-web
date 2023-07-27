'use client';

import React from 'react';
import debounce from 'lodash.debounce';

import Close from '@/assets/svg/close';

import { INPUT_DEBOUNCE } from '@/constants/index';
import styles from './desktopSearch.module.css';

export default function DesktopSearch({
  onChange = () => {}, options = [], onSelect, setText, placeholder,
}) {
  const [isShow, setIsShow] = React.useState(false);
  const ref = React.useRef();
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, INPUT_DEBOUNCE),
    [options.length],
  );
  const onOptionClick = (index) => {
    onSelect(options[index].value);
  };
  const onClose = () => {
    setText('');

    setIsShow(false);
    ref.current.value = '';
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          ref={ref}
          type="text"
          onChange={debouncedChangeHandler}
          onFocus={() => {
            setIsShow(true);
          }}
          placeholder={placeholder}
          className={styles.search}
          list="options"
        />
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <Close color="rgba(148, 148, 156, 1" />
        </button>
      </div>

      {isShow && (
      <ul className={styles.searchList}>
        {options.map(({ label, value }, index) => (
          <li
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
            role="button"
            onKeyDown={() => onOptionClick(index)}
            onClick={() => {
              setIsShow(false);
              onOptionClick(index);
            }}
            tabIndex="0"
            key={value}
            value={value}
            className={styles.option}
          >
            {label}
            <span>Airport</span>
          </li>
        ))}
      </ul>
      )}
    </>
  );
}
