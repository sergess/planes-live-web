'use client';

import React, { useState, useContext, useCallback } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';

import styles from './ResetPassword.module.scss';

export default function ResetPassword() {
  const { token } = useContext(ModalContext);

  const [newPassword, setNewPassword] = useState(null);

  const onResetPassword = useCallback(() => {
    // [TODO] url and key must be moved to env
    fetch('https://auth.platforms.team/api/reset/password', {
      method: 'POST',
      headers: {
        'X-API-KEY': 'JGZE8xU8ex',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: newPassword,
        token,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log('New Password Has Been Set');
      } else {
        console.log('Something went wrong');
      }
    });
  }, [newPassword, token]);

  return (
    <div className={styles.form}>
      <div className={styles.heading}>
        New password
      </div>
      <div className={styles.note}>
        Your new password must contain
        at least 8 characters
      </div>
      <div className={styles.container}>
        <input name="newPassword" id="password" type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="New password" required />
        <button type="submit" disabled={!newPassword || newPassword?.length < 8} onClick={onResetPassword}>
          Set new password
        </button>
      </div>
    </div>
  );
}
