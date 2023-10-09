import React, { useRef } from 'react';

const LINE_HEIGHT = 70;
const usePathLine = () => {
  const blockRef = useRef();
  const [height, setHeight] = React.useState(LINE_HEIGHT);

  React.useEffect(() => {
    if (blockRef?.current?.clientHeight) {
      setHeight(blockRef?.current?.clientHeight);
    }
  }, [blockRef.current?.clientHeight]);

  return { height, blockRef };
};

export default usePathLine;
