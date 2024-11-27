import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Filter, Grid, List } from 'lucide-react';

const listings = [
  {
    id: 1,
    name: "Sabino Canyon Recreation Area",
    type: "Nature",
    city: "Tucson",
    image: "https://images.unsplash.com/photo-1635361803853-8386f5f9a68d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 325,
    price: "$$",
    featured: true
  },
  {
    id: 2,
    name: "El Charro Café",
    type: "Restaurant",
    city: "Tucson",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 1205,
    price: "$$",
    featured: true
  }
];

export default function Listings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900">
                <Filter className="h-5 w-5" />
                Filters
              </button>
              <select className="rounded-md border-gray-300">
                <option>All Categories</option>
                <option>Restaurants</option>
                <option>Nature</option>
                <option>Activities</option>
              </select>
              <select className="rounded-md border-gray-300">
                <option>Price Range</option>
                <option>$</option>
                <option>$$</option>
                <option>$$$</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={`grid ${
          viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'
        }`}>
          {listings.map((listing) => (
            <Link
              key={listing.id}
              to={`/listings/${listing.id}`}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48' : 'h-48'}`}>
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {listing.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{listing.type}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                    <span className="text-sm text-gray-500">({listing.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {listing.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {listing.city}
                  </div>
                  <span>{listing.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}