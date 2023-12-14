'use client';

import React, { useContext } from 'react';

import { getHref, getMobileOperatingSystem } from '@/utils/index';
import { ModalContext } from '@/contexts/modal/ModalContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import Button from '@/components/Controls/Buttons/primary';
import flightContext from '@/contexts/flight/FlightContext';
import { PLATFORM } from '@/constants/index';

// eslint-disable-next-line func-style
function WithModal(Component, Popup) {
  return function Comp({ children, ...props }) {
    const { openModal } = useContext(ModalContext);
    const { flightData } = useContext(flightContext);
    const { isMobile } = useDeviceDetect();
    const onClick = (e) => {
      e.preventDefault();
      openModal({
        content: <Popup />,
      });
    };

    const url = getHref();

    let href = url;

    if (flightData?.id && isMobile) {
      href = getMobileOperatingSystem() === PLATFORM.IOS
        ? `https://link.email.planeslive.com/uni/flight?flightId=${flightData.id}`
        : `https://link.email.planeslive.com/uni/openScreen?screen=FlightInfo&flightId=${flightData.id}`;
    }

    if (props?.airport && isMobile) {
      href = getMobileOperatingSystem() === PLATFORM.IOS
        ? `https://link.email.planeslive.com/uni/airport_details?icao=${props.airport}&isFull=true`
        : `https://link.email.planeslive.com/uni/openScreen?screen=AirportInfo&airportId=${props.airport}`;
    }

    return (
      <Component {...(!isMobile ? { onClick, href, ...props } : { href, ...props })}>{children}</Component>
    );
  };
}

export default WithModal(Button, SubscriptionPopup);
