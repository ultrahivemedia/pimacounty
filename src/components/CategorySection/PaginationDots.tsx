import React from 'react';

interface PaginationDotsProps {
  currentIndex: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (index: number) => void;
}

export function PaginationDots({
  currentIndex,
  totalPages,
  itemsPerPage,
  onPageChange
}: PaginationDotsProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            Math.floor(currentIndex / itemsPerPage) === index
              ? 'bg-blue-500 w-4'
              : 'bg-gray-300'
          }`}
          onClick={() => onPageChange(index * itemsPerPage)}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
}