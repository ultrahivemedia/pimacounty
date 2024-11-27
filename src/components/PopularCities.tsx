import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

const cities = [
  {
    name: 'Tucson',
    image: 'https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '1,234 places',
    region: 'PIMA COUNTY',
    description: 'Experience the heart of the Sonoran Desert'
  },
  {
    name: 'Oro Valley',
    image: 'https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '432 places',
    region: 'PIMA COUNTY',
    description: 'Luxury living meets natural beauty'
  },
  {
    name: 'Marana',
    image: 'https://images.unsplash.com/photo-1570737543098-0983d88f796d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '156 places',
    region: 'PIMA COUNTY',
    description: 'Where heritage meets progress'
  },
  {
    name: 'Catalina Foothills',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '289 places',
    region: 'PIMA COUNTY',
    description: 'Scenic mountain views and upscale living'
  },
  {
    name: 'Sahuarita',
    image: 'https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '145 places',
    region: 'PIMA COUNTY',
    description: 'A growing community with small-town charm'
  },
  {
    name: 'South Tucson',
    image: 'https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    places: '178 places',
    region: 'PIMA COUNTY',
    description: 'Rich cultural heritage and authentic cuisine'
  }
];

export default function PopularCities() {
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
    totalItems
  } = useCarousel(cities, currentItemsPerPage);

  const totalPages = Math.ceil(totalItems / currentItemsPerPage);

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Pima County Cities</h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleItems.map((city, index) => (
              <Link
                key={`${city.name}-${index}`}
                to={`/cities/${city.name.toLowerCase().replace(' ', '-')}`}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-sm font-medium text-white/90">
                      {city.region}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {city.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-2">
                      {city.description}
                    </p>
                    <p className="text-sm text-white/90">
                      {city.places}
                    </p>
                  </div>
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
                aria-label="Previous cities"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
            )}
            
            {hasNext && (
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next cities"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / currentItemsPerPage) === index
                    ? 'bg-blue-500'
                    : 'bg-white/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}