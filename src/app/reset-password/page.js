'use client';

import React, {
  useState, useContext,
} from 'react';
import Image from 'next/image';
import { AuthSDK } from '@platforms-web/mosaic-auth-js-sdk';

import { ModalContext } from '@/contexts/modal/ModalContext';
import ErrorBadge from '@/components/ErrorBadge';
import CompletedScreen from '@/components/CompletedScreen';
import InputPassword from '@/components/InputPassword';
import styles from './page.module.scss';

const NO_CONTENT_STATUS = 204;
const authService = new AuthSDK({ apiKey: process.env.X_API_KEY });
const ERROR_MESSAGE = {
  SERVER:
  <div>
    Something went wrong. Try reloading the page or coming back later. If it doesn’t help,
    {' '}
    <a style={{ textDecoration: 'none' }} href="mailto:support@planeslive.com">contact us</a>
    .
  </div>,
  NOT_FOUND:
  <div>
    Sorry, we could not save your new password. Try resetting it again from the app. If it doesn’t help,
    {' '}
    <a style={{ textDecoration: 'none' }} href="mailto:support@planeslive.com">contact us</a>
    .
  </div>,
  PASSWORD_DONT_MATCH: 'Passwords do not match. Please check and try again.',
  DONT_MEET_REQUIREMENTS: 'Password does not meet the requirements. Try another one.',
};

const getError = (password, confirm) => {
  if (password !== confirm) {
    return ERROR_MESSAGE.PASSWORD_DONT_MATCH;
  }

  return false;
};
export default function Page({ searchParams }) {
  const { openModal } = useContext(ModalContext);
  const token = searchParams?.token;
  const [password, setPassword] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const openErrorPopup = (error) => {
    openModal({
      content: <ErrorBadge error={error} />,
    });
  };
  const onResetPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const error = getError(password, confirmPassword);
    if (error) {
      openErrorPopup(error);

      return;
    }

    setLoading(true);
    authService.resetPassword(
      {
        password,
        token,
      },
    )
      .then((res) => {
        if (res.status === NO_CONTENT_STATUS) {
          setIsCompleted(true);
        } else if (res?.code === 404) {
          openErrorPopup(ERROR_MESSAGE.NOT_FOUND);
        } else {
          openErrorPopup(res.message);
        }
      }, () => {
        openErrorPopup(ERROR_MESSAGE.SERVER);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (isCompleted) {
    return (<CompletedScreen />);
  }

  return (
    <form className={styles.form} onSubmit={onResetPassword}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Set a new password</h1>
        <InputPassword setValue={setPassword} name="password" placeholder="" label="Password" />
        <InputPassword setValue={setConfirmPassword} name="confirmPassword" placeholder="" label="Confirm password" />
        <div className={styles.note}>
          Make sure your password has:
          <ul className={styles.ul}>
            <li>8 characters or more</li>
            <li>a number</li>
            <li>an uppercase letter</li>
            <li>a lowercase letter</li>
          </ul>
        </div>
        {loading ? (
          <div className={styles.spinWrapper}>
            <Image
              src="/svg/spinner.svg"
              width={32}
              height={32}
              alt="Spinner"
              className={styles.spin}
            />
          </div>
        ) : (
          <button
            type="submit"
            className={styles.button}
          >
            Set password
          </button>
        )}
      </div>
    </form>
  );
}
