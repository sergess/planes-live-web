import { useState, useEffect, MutableRefObject } from 'react';

export const useElementInView = (
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('1', entry.target);
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );

    const currentElement = ref?.current;

    if (currentElement && !isVisible) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  return isVisible;
};

export default useElementInView;
