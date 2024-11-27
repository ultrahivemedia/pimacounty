import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Sun } from 'lucide-react';

export default function CityGuide() {
  const { cityName } = useParams();

  // Mock data - in a real app, fetch based on cityName
  const cityData = {
    name: "Tucson",
    description: "Discover the heart of the Sonoran Desert",
    image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    currency: "USD",
    language: "English",
    bestTime: "October to April",
    categories: ["EAT & DRINK", "FESTIVAL", "SEE & DO", "SHOPPING", "STAY"]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={cityData.image}
            alt={cityData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">{cityData.name}</h1>
          <p className="text-xl text-white/90">{cityData.description}</p>
          
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>CURRENCY</span>
              <span className="font-medium">{cityData.currency}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>LANGUAGE</span>
              <span className="font-medium">{cityData.language}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              <span>BEST TIME TO VISIT</span>
              <span className="font-medium">{cityData.bestTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8">
            {cityData.categories.map((category) => (
              <button
                key={category}
                className="py-4 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-600"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content sections would go here */}
    </div>
  );
}