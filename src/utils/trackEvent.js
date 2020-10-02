export const trackEvent = (eventName, options) => {
  if (typeof window !== 'undefined') {
    if (typeof window.analytics !== 'undefined') {
      window.analytics.track(eventName, options);
    }
  }
};

export default trackEvent;
