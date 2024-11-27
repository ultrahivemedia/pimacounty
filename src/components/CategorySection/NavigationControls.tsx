import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function NavigationControls({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}: NavigationControlsProps) {
  return (
    <div className="hidden lg:block">
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous categories"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next categories"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      )}
    </div>
  );
}