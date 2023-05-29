import { useEffect, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useObserver = (
  ref: HTMLDivElement | null,
  options: IntersectionObserverOptions
) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, options);

  useEffect(() => {
    if (ref) {
      observer.observe(ref);
    }
  }, [ref]);

  return isVisible;
};

export default useObserver;
