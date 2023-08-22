import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    typeof window !== 'undefined' && getWindowDimensions(),
  );

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
