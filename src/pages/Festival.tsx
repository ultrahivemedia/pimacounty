import React from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';

const festivals = [
  {
    id: 1,
    name: "Tucson Gem, Mineral & Fossil Showcase",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 2340,
    price: "$$",
    location: "Tucson",
    date: "January 30 - February 14, 2024",
    featured: true
  },
  {
    id: 2,
    name: "Tucson Folk Festival",
    image: "https://images.unsplash.com/photo-1533137098665-47ca60257cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 890,
    price: "$",
    location: "Downtown Tucson",
    date: "April 6-7, 2024",
    featured: false
  }
];

export default function Festival() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Festivals in Pima County"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Festivals in Pima County
          </h1>
          <p className="text-xl text-white/90">
            Experience the vibrant culture and celebrations
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover"
                />
                {festival.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-blue-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{festival.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{festival.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({festival.reviews})
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {festival.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {festival.location}
                  </div>
                  <span>{festival.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}