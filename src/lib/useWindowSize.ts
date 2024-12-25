import { useEffect, useState } from "react";

interface Options {
  initialWidth?: number;
  initialHeight?: number;
}

const useWindowSize = ({
  initialWidth = Infinity,
  initialHeight = Infinity,
}: Options = {}) => {
  const isBrowser = typeof window !== "undefined";

  const [state, setState] = useState<{ width: number; height: number }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    // Only run the effect on the browser (to avoid issues with SSR)
    if (isBrowser) {
      const handler = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setState({
          width,
          height,
        });
      };

      window.addEventListener("resize", handler);

      return () => {
        window.removeEventListener("resize", handler);
      };
    }
  }, []);

  return state;
};

export default useWindowSize;
