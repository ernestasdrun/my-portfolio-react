import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    if (isMatching !== mediaQuery.matches) {
      setIsMatching(mediaQuery.matches);
    }

    const listener = () => setIsMatching(mediaQuery.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return isMatching;
};
