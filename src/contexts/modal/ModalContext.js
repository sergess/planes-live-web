'use client';

import { createContext } from 'react';

export const ModalContext = createContext({
  token: null,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
