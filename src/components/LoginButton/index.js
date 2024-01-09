'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton() {
  const { data, status } = useSession();

  console.log(data);

  if (status === 'loading') {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      {
        data?.user ? (
          <>
            <div>{data.user.name}</div>
            <button type="submit" onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button type="submit" onClick={() => signIn()}>Sign In</button>
        )
      }
      <Link className="transition-colors hover:text-blue-500" href="/search">
        Search
      </Link>
    </div>
  );
}
