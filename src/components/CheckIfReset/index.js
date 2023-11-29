'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function CheckIfReset({ token }) {
  useEffect(() => {
    if (token) {
      redirect(`/reset-password?token=${token}`);
    }
  }, [token]);

  return null;
}
