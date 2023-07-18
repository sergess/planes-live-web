import React from 'react';

import PageHeader from '@/components/Header/pageHeader';

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <main>
        {children}
      </main>
    </>
  );
}
