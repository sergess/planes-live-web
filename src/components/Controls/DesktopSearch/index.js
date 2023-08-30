'use client';

import React from 'react';
import debounce from 'lodash.debounce';
import Image from 'next/image';

import { INPUT_DEBOUNCE, MIN_SYMBOL_COUNT } from '@/constants/index';
import NoResult from '@/components/NoResult';
import TrySearch from '@/components/TrySearch';
import Lottie from 'lottie-react';
import skeletonAnimation from '@/assets/skeleton/search-skeleton.json';
import styles from './desktopSearch.module.css';

export default function DesktopSearch({
  onChange = () => {}, options = [], onSelect, setText, placeholder,
  text, loading,
}) {
  const [isShow, setIsShow] = React.useState(false);
  const ref = React.useRef();
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, INPUT_DEBOUNCE),
    [options.length],
  );
  const onOptionClick = (value, type) => {
    onSelect(value, type);
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
          autoFocus
          placeholder={placeholder}
          className={styles.search}
          list="options"
        />
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <Image
            src="/svg/ic_close_dark.svg"
            priority
            width={28}
            height={28}
            alt="Close"
          />
        </button>
      </div>

      {isShow && (
        <ul className={styles.searchList}>
          {loading ? (
            <div className={styles.lottie}>
              <Lottie animationData={skeletonAnimation} loop />
            </div>
          ) : (
            <>
              {(!options.length && text.length > MIN_SYMBOL_COUNT) && <NoResult />}
              {(!options.length && text.length <= MIN_SYMBOL_COUNT) && <TrySearch />}
              {options.map(({ label, value, type }) => (
                <li
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
                  role="button"
                  onKeyDown={() => onOptionClick(value, type)}
                  onClick={() => {
                    setIsShow(false);
                    onOptionClick(value, type);
                  }}
                  tabIndex="0"
                  key={value}
                  className={styles.option}
                >
                  {label}
                  <span>{type}</span>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </>
  );
}
