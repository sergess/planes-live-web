'use client';

import React, { useContext } from 'react';

import { getHref } from '@/utils/index';
import { ModalContext } from '@/contexts/modal/ModalContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

export default function WithModal(Component, Popup) {
  return function Comp({ children }) {
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
      <Component {...(!isMobile ? { onClick } : { href })}>{children}</Component>
    );
  };
}
