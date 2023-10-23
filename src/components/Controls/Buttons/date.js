'use client';

import React, { useContext } from 'react';

import { ModalContext } from '@/contexts/modal/ModalContext';
import dynamic from 'next/dynamic';
import flightContext from '@/contexts/flight/FlightContext';
import styles from './button.module.css';

const CustomCalendar = dynamic(
  () => import('@/components/CustomCalendar'),
  {
    ssr: false,
  },
);

export default function Button({ children }) {
  const { openModal, closeModal } = useContext(ModalContext);
  const { flightData, setFlightData } = useContext(flightContext);

  const test = (data) => {
    setFlightData((prevState) => ({
      ...prevState,
      flight: data.flight,
      date: data.date,
      position: data.position,
    }));
    closeModal();
  };

  const onClick = () => {
    openModal({
      content: <CustomCalendar flightData={flightData} setFlightData={(data) => test(data)} />,
    });
  };

  return (
    <button
      type="button"
      className={`${styles.date} analytic__change_date`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
