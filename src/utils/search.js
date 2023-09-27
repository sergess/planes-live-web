import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const getMatchedLabel = (label, search) => {
  const reg = new RegExp(`(${search})`, 'gi');
  if (reg.test(label)) {
    const parts = label.split(reg);

    return (
      <p>
        {parts.map((part) => (part.toLowerCase() === search
          .toLowerCase() ? <b key={part}>{part}</b> : part))}
      </p>
    );
  }

  return label;
};
