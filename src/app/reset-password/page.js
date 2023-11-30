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

const getError = (password, confirm) => {
  if (password !== confirm) {
    return 'Passwords do not match. Please re-enter the password';
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
    ).then(JSON.parse)
      .then((res) => {
        if (res.status === NO_CONTENT_STATUS) {
          setIsCompleted(true);
        } else {
          openErrorPopup(res.message);
        }
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
        <h1 className={styles.heading}>Change password</h1>
        <InputPassword setValue={setPassword} name="password" />
        <InputPassword setValue={setConfirmPassword} name="confirmPassword" />
        <div className={styles.note}>
          Your password must be at least 8 characters long, include a number, an uppercase letter and a lowercase letter.
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
            Change password
          </button>
        )}
      </div>
    </form>
  );
}
