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
        ? `https://7zfc.adj.st/openScreen?screen=FlightInfo&flightId=${flightData.id}&adj_t=17vtzarm&adj_fallback=https%3A%2F%2Fplaneslive.com%2F&adj_redirect_macos=https%3A%2F%2Fplaneslive.com%2F`
        : `https://app.adjust.com/17vyoxsh?deep_link=planeslive-app%3A%2F%2Fcom.apalon.flight.tracker%2Fflight%3FflightId%3D${flightData.id}&fallback=https%3A%2F%2Fplaneslive.com%2F&redirect_macos=https%3A%2F%2Fplaneslive.com%2F`;
    }

    if (props?.airport && isMobile) {
      href = getMobileOperatingSystem() === PLATFORM.IOS
        ? `https://7zfc.adj.st/openScreen?screen=AirportInfo&airportId=${props.airport}&adj_t=17vtzarm&adj_fallback=https%3A%2F%2Fplaneslive.com%2F&adj_redirect_macos=https%3A%2F%2Fplaneslive.com%2F`
        : `https://app.adjust.com/17vyoxsh?deep_link=planeslive-app%3A%2F%2Fcom.apalon.flight.tracker%2Fairport_details%3Ficao%3D${props.airport}%26isFull%3Dtrue&fallback=https%3A%2F%2Fplaneslive.com%2F&redirect_macos=https%3A%2F%2Fplaneslive.com%2F`;
    }

    return (
      <Component {...(!isMobile ? { onClick, href, ...props } : { href, ...props })}>{children}</Component>
    );
  };
}

export default WithModal(Button, SubscriptionPopup);
