'use client';

import React, { useContext } from 'react';

import SubscriptionPopup from '@/components/SubscriptionPopup';
import Button from '@/components/Controls/Buttons/primary';
import { ModalContext } from '@/contexts/modal/ModalContext';

export default function PrimaryWithModal(props) {
  const { openModal } = useContext(ModalContext);

  const onClick = (e) => {
    e.preventDefault();
    openModal({
      content: <SubscriptionPopup />,
    });
  };

  return (
    <Button onClick={onClick} {...props} />
  );
}
