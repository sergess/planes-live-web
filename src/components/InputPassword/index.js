'use client';

import React, {
  useState, useRef,
} from 'react';

// eslint-disable-next-line import/no-unresolved
import EyeOpen from 'public/svg/eyeOpen';
// eslint-disable-next-line import/no-unresolved
import EyeClosed from 'public/svg/eyeClosed';
import styles from './InputPassword.module.scss';

const PASSWORD_VALIDATION_REGEXP = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+';

const INPUT_TYPE = {
  PASSWORD: 'password',
  TEXT: 'text',
};
export default function InputPassword({ setValue, name, label }) {
  const inputRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <div className={`${styles.row} ${!isFocused && styles.hidden}`}>
        <input
          ref={inputRef}
          className={styles.input}
          name={name}
          id={name}
          type={isShow ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD}
          onChange={(e) => setValue(e.target.value)}
          placeholder=""
          pattern={PASSWORD_VALIDATION_REGEXP}
          required
          minLength={8}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => {
            setIsShow(!isShow);
            inputRef.current.focus();
          }}
        >
          {!isShow ? <EyeOpen /> : <EyeClosed />}
        </button>
      </div>
    </>
  );
}
