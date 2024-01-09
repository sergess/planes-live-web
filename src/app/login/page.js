'use client';

import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';

import styles from './login.module.scss';

export default function Login() {
  const userName = useRef('');
  const pass = useRef('');

  const onSubmit = async () => {
    const res = await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: true,
    });
  };

  return (
    <div className={styles.form}>
      <p>Login:</p>
      <input
        type="text"
        onChange={(e) => { userName.current = e.target.value; }}
        autoFocus
      />
      <input
        type="password"
        onChange={(e) => { pass.current = e.target.value; }}
      />
      <button type="submit" onClick={onSubmit}>Log in</button>
    </div>
  );
}
