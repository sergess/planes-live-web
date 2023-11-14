'use client';

import React from 'react';
import debounce from 'lodash.debounce';
import Image from 'next/image';
import Link from 'next/link';

import { INPUT_DEBOUNCE, MIN_SYMBOL_COUNT, ROUTE_BY_TYPE } from '@/constants/index';
import NoResult from '@/components/NoResult';
import TrySearch from '@/components/TrySearch';
import Lottie from 'lottie-react';
import skeletonAnimation from '@/assets/skeleton/search-skeleton.json';
import { getMatchedLabel } from '@/utils/search';
import styles from './desktopSearch.module.scss';

export default function DesktopSearch({
  onChange = () => {}, options = [], setText, placeholder,
  text, loading, autoFocus = false,
}) {
  const [isShow, setIsShow] = React.useState(!!autoFocus);
  const ref = React.useRef();
  const debouncedChangeHandler = React.useCallback(
    debounce(onChange, INPUT_DEBOUNCE),
    [options.length],
  );
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
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={`${styles.search} analytic__search_input`}
          list="options"
        />
        <button
          type="button"
          className={`${styles.close} analytic__close_search`}
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
        <div className={styles.searchList}>
          {loading ? (
            <div className={styles.lottie}>
              <Lottie animationData={skeletonAnimation} loop />
            </div>
          ) : (
            <>
              {(!options.length && text.length > MIN_SYMBOL_COUNT) && <NoResult />}
              {(!options.length && text.length <= MIN_SYMBOL_COUNT) && <TrySearch />}
              {options.map(({ label, value, type }) => (
                <Link
                  prefetch={false}
                  key={value}
                  className={`${styles.option} analytic__search_option`}
                  href={`/${ROUTE_BY_TYPE[type]}/${value}`}
                  onClick={() => {
                    setIsShow(false);
                  }}
                  data-analytic-code={value}
                >
                  {getMatchedLabel(label, text)}
                  <span>{type}</span>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
