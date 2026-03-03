import { useEffect, useRef, useState } from 'react';

export default function useVisibleObserverRef(initialValue: any = null) {
  const itemRef = useRef(initialValue);
  const [isItemVisible, setIsItemVisible] = useState(false);

  useEffect(() => {
    const currentElement = itemRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshhold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const [item] = entries;
      if (item.isIntersecting) {
        setIsItemVisible(item.isIntersecting);
      }
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemRef]);

  return { ref: itemRef, isVisible: isItemVisible };
}
