import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const getMatchedLabel = (label, search) => {
  const reg = new RegExp(search, 'ig');
  if (reg.test(label)) {
    const matches = label.match(reg);
    let result = label;
    matches.forEach((m) => {
      result = label.replaceAll(m, `<b>${m}</b>`);
    });

    return (
      <p dangerouslySetInnerHTML={{ __html: result }} />
    );
  }

  return label;
};
