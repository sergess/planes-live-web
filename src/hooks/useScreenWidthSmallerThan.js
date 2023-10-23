import { useState, useEffect } from 'react';

const getWindowWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

export default function useScreenWidthSmallerThan(value) {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' && getWindowWidth(),
  );

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(getWindowWidth());
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isSmaller = screenWidth < value;

  return { isSmaller, screenWidth };
}
