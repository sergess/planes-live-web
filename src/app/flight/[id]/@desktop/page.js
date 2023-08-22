import React from 'react';

import PageTemplate from '../pageTemplate';

export default async function Page({ params }) {
  return (
    <div>
      <PageTemplate params={params} />
    </div>
  );
}
