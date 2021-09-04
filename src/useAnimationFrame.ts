import { DependencyList, useEffect, useLayoutEffect, useRef } from 'react';

export const useAnimationFrame = (cb: Function, deps: DependencyList) => {
  const frame = useRef(-1);
  const numberOfFramesRef = useRef(60);
  const tempNumberOfFramesRef = useRef(0);

  const animate = () => {
    tempNumberOfFramesRef.current += 1;
    cb(numberOfFramesRef.current);

    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      numberOfFramesRef.current = tempNumberOfFramesRef.current;
      tempNumberOfFramesRef.current = 0;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, deps);
};
