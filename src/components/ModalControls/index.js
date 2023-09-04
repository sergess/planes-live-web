'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import CustomCalendar from '@/components/CustomCalendar';

export default function ModalControls() {
  const { openModal } = useContext(ModalContext);

  const onClickFirstButton = () => {
    openModal({
      content: <SubscriptionPopup />,
    });
  };

  const onClickSecondButton = () => {
    openModal({
      content: <CustomCalendar />,
    });
  };

  return (
    <div>
      <button type="button" onClick={onClickFirstButton}>Open first modal</button>
      <button type="button" onClick={onClickSecondButton}>Open second modal</button>
    </div>
  );
}
