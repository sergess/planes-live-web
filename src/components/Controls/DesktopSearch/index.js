'use client';

import React from 'react';
import debounce from 'lodash.debounce';

import Close from '@/assets/svg/close';

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
  const onOptionClick = (index, type) => {
    onSelect(options[index].value, type);
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
          {loading ? (
            <div className={styles.lottie}>
              <Lottie animationData={skeletonAnimation} loop />
            </div>
          ) : (
            <>
              {(!options.length && text.length > MIN_SYMBOL_COUNT) && <NoResult />}
              {(!options.length && text.length <= MIN_SYMBOL_COUNT) && <TrySearch />}
              {options.map(({ label, value, type }, index) => (
                <li
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */
                  role="button"
                  onKeyDown={() => onOptionClick(index, type)}
                  onClick={() => {
                    setIsShow(false);
                    onOptionClick(index, type);
                  }}
                  tabIndex="0"
                  key={value}
                  value={value}
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
