import { useState, useEffect } from 'react';

export const useElementInView = (ref, root) => {
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.target.getAttribute('data'));
        }
      },
      {
        root: root?.current,
        rootMargin: '0px',
        threshold: [0],
      },
    );

    const currentElement = ref?.current.map((item) => {
      if (item) {
        observer.observe(item);
      }

      return item;
    });

    return () => {
      currentElement.map((item) => observer.unobserve(item));
    };
  }, []);

  return isVisible;
};

export default useElementInView;
