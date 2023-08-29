'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import SubscriptionPopup from '@/components/SubscriptionPopup';

export default function ModalControls() {
  const { openModal } = useContext(ModalContext);

  const onClickFirstButton = () => {
    openModal({
      content: <SubscriptionPopup />,
    });
  };

  const onClickSecondButton = () => {
    openModal({
      content: <h1>1</h1>,
    });
  };

  return (
    <div>
      <button type="button" onClick={onClickFirstButton}>Open first modal</button>
      <button type="button" onClick={onClickSecondButton}>Open second modal</button>
    </div>
  );
}
