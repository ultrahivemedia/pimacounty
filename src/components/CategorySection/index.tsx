import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { categories } from './data';
import { CategoryCard } from './CategoryCard';
import { NavigationControls } from './NavigationControls';
import { PaginationDots } from './PaginationDots';

export default function CategorySection() {
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const currentItemsPerPage = 
    typeof window !== 'undefined' && window.innerWidth < 640 ? itemsPerPage.mobile :
    typeof window !== 'undefined' && window.innerWidth < 1024 ? itemsPerPage.tablet :
    itemsPerPage.desktop;

  const {
    visibleItems,
    next,
    previous,
    hasNext,
    hasPrevious,
    currentIndex,
    setCurrentIndex,
    totalItems
  } = useCarousel(categories, currentItemsPerPage);

  const totalPages = Math.ceil(totalItems / currentItemsPerPage);

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore by</h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover Pima County's finest attractions, dining spots, and accommodations through our curated categories
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleItems.map((category, index) => (
              <CategoryCard key={`${category.title}-${index}`} category={category} />
            ))}
          </div>

          <NavigationControls
            onPrevious={previous}
            onNext={next}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
          />

          <PaginationDots
            currentIndex={currentIndex}
            totalPages={totalPages}
            itemsPerPage={currentItemsPerPage}
            onPageChange={setCurrentIndex}
          />
        </div>
      </div>
    </section>
  );
}