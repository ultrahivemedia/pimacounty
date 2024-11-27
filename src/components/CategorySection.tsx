import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

const categories = [
  {
    title: 'Eat & Drink',
    count: '8 places',
    color: 'bg-teal-500/60',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/listings?category=restaurants'
  },
  {
    title: 'See & Do',
    count: '8 places',
    color: 'bg-blue-500/60',
    image: 'https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/listings?category=attractions'
  },
  {
    title: 'Stay',
    count: '6 places',
    color: 'bg-rose-500/60',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/listings?category=hotels'
  },
  {
    title: 'Festival',
    count: '6 places',
    color: 'bg-amber-500/60',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/listings?category=events'
  },
  {
    title: 'Shopping',
    count: '12 places',
    color: 'bg-purple-500/60',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/listings?category=shopping'
  }
];

export default function CategorySection() {
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const { visibleItems, next, previous, hasNext, hasPrevious, currentIndex } = useCarousel(
    categories,
    typeof window !== 'undefined' && window.innerWidth < 640 ? itemsPerPage.mobile :
    typeof window !== 'undefined' && window.innerWidth < 1024 ? itemsPerPage.tablet :
    itemsPerPage.desktop
  );

  const totalPages = Math.ceil(categories.length / 
    (typeof window !== 'undefined' && window.innerWidth < 640 ? itemsPerPage.mobile :
    typeof window !== 'undefined' && window.innerWidth < 1024 ? itemsPerPage.tablet :
    itemsPerPage.desktop)
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore by</h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleItems.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative w-full sm:w-[268px] h-[177px] rounded-2xl overflow-hidden mx-auto"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${category.color}`} />
                </div>
                
                <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on Mobile */}
          <div className="hidden lg:block">
            {hasPrevious && (
              <button
                onClick={previous}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous categories"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
            )}
            
            {hasNext && (
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next categories"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / 
                    (typeof window !== 'undefined' && window.innerWidth < 640 ? itemsPerPage.mobile :
                    typeof window !== 'undefined' && window.innerWidth < 1024 ? itemsPerPage.tablet :
                    itemsPerPage.desktop)
                  ) === index
                    ? 'bg-blue-500 w-4'
                    : 'bg-gray-300'
                }`}
                onClick={() => {
                  const itemsPerView = 
                    typeof window !== 'undefined' && window.innerWidth < 640 ? itemsPerPage.mobile :
                    typeof window !== 'undefined' && window.innerWidth < 1024 ? itemsPerPage.tablet :
                    itemsPerPage.desktop;
                  const newIndex = index * itemsPerView;
                  if (newIndex < categories.length) {
                    setCurrentIndex(newIndex);
                  }
                }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}