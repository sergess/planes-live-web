export const trackEvent = (action, params) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, params);
  }
};

export default trackEvent;
