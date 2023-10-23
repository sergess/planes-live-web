'use client';

import React, { useContext } from 'react';

import { getHref } from '@/utils/index';
import { ModalContext } from '@/contexts/modal/ModalContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import Button from '@/components/Controls/Buttons/primary';

// eslint-disable-next-line func-style
function WithModal(Component, Popup) {
  return function Comp({ children, ...props }) {
    const { openModal } = useContext(ModalContext);
    const { isMobile } = useDeviceDetect();
    const onClick = (e) => {
      e.preventDefault();
      openModal({
        content: <Popup />,
      });
    };

    const href = getHref();

    return (
      <Component {...(!isMobile ? { onClick, ...props } : { href, ...props })}>{children}</Component>
    );
  };
}

export default WithModal(Button, SubscriptionPopup);
