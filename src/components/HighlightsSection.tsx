import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bookmark } from 'lucide-react';

const highlights = [
  {
    id: 1,
    name: 'Boomtown Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Festival', 'Restaurants'],
    location: 'Tucson',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 3.3,
    reviews: 3,
    price: '$$',
    type: 'event',
    author: {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    id: 2,
    name: 'Hotel Dieu',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Hostel', 'Hotel'],
    location: 'Oro Valley',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 4.1,
    reviews: 2,
    price: '$$',
    type: 'hotel',
    author: {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    id: 3,
    name: 'New Balance Store',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Gift Shop'],
    location: 'Marana',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 1,
    price: '$$',
    type: 'shop',
    author: {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    id: 4,
    name: 'Lacoste Store',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: ['Gift Shop'],
    location: 'Catalina Foothills',
    address: '7 Rue Emile Duclaux, 92150 Suresnes, France',
    rating: 5.0,
    reviews: 2,
    price: '$$',
    type: 'shop',
    author: {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  }
];

const typeIcons = {
  event: '🎉',
  hotel: '🏨',
  shop: '🛍️',
  default: '📍'
};

export default function HighlightsSection() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Highlights in Pima County</h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <Link
              key={item.id}
              to={`/listings/${item.id}`}
              className="group relative bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md">
                    {typeIcons[item.type] || typeIcons.default}
                  </div>
                  <button className="absolute top-4 right-4 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <Bookmark className="h-4 w-4 text-gray-600" />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <img
                      src={item.author.avatar}
                      alt="Author"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.categories.map((category, index) => (
                      <span key={index} className="text-sm text-gray-600">
                        {category}{index < item.categories.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.address}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-blue-500 font-semibold">{item.rating}</span>
                      <span className="text-gray-500">({item.reviews} Reviews)</span>
                    </div>
                    <span className="text-gray-600">{item.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}