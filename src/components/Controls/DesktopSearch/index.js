'use client';

import React from 'react';
import debounce from 'lodash.debounce';

import Close from '@/assets/svg/close';

import styles from './desktopSearch.module.css';

const DEBOUNCE = 200;

export default function DesktopSearch({
  onChange = () => {}, options = [], onSelect, setText,
}) {
  const [isShow, setIsShow] = React.useState(false);
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, DEBOUNCE),
    [options.length],
  );
  const onOptionClick = (e) => {
    onSelect(options[e.target.value].value);
  };
  const onClose = () => {
    setText('');
    setIsShow(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="text"
          onChange={(e) => debouncedChangeHandler(e)}
          onFocus={() => {
            setIsShow(true);
          }}
          onBlur={() => {
            setIsShow(false);
          }}
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
        {options.map(({ label, value }) => (
          <li
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
            role="button"
            onKeyDown={onOptionClick}
            onClick={(e) => {
              setIsShow(false);
              onOptionClick(e);
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
