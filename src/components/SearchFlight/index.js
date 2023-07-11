import React from 'react';

import Input from '@/components/Input';

export default async function SearchFlight() {
  const onChange = () => {
  };

  return (
    <Input onChange={onChange} placeholder="Search by flight number, airline, or airport" />
  );
}
