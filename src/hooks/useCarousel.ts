import { useState, useCallback, useEffect } from 'react';

export function useCarousel<T>(items: T[], itemsPerPage: number, autoplayInterval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create a circular array that maintains the desired order
  const extendedItems = [...items, ...items];

  const next = useCallback(() => {
    setCurrentIndex((current) => {
      const nextIndex = current + 1;
      // Create circular navigation
      return nextIndex >= items.length ? 0 : nextIndex;
    });
  }, [items.length]);

  const previous = useCallback(() => {
    setCurrentIndex((current) => {
      const prevIndex = current - 1;
      return prevIndex < 0 ? items.length - 1 : prevIndex;
    });
  }, [items.length]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(next, autoplayInterval);
    return () => clearInterval(timer);
  }, [next, autoplayInterval]);

  // Get visible items with circular navigation
  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % items.length;
      result.push(extendedItems[index]);
    }
    return result;
  };

  const visibleItems = getVisibleItems();

  return {
    visibleItems,
    next,
    previous,
    currentIndex,
    setCurrentIndex,
    hasNext: true, // Always true for circular navigation
    hasPrevious: true, // Always true for circular navigation
    totalItems: items.length
  };
}