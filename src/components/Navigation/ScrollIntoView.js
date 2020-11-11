import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollIntoView = ({ children }) => {
  const prevLocation = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (prevLocation.current !== pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = pathname;
    }
  }, [pathname]);

  return children;
};

export default ScrollIntoView;
