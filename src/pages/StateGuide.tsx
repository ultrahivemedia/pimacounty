import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Sun, Compass, Building } from 'lucide-react';

export default function StateGuide() {
  const { stateName } = useParams();

  // Mock data - in a real app, fetch based on stateName
  const stateData = {
    name: "Arizona",
    description: "Experience the beauty of the American Southwest",
    image: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    capital: "Phoenix",
    population: "7.2 million",
    climate: "Desert / Semi-arid",
    regions: [
      {
        name: "Pima County",
        image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Home to Tucson and the beautiful Sonoran Desert",
        attractions: 234
      },
      {
        name: "Maricopa County",
        image: "https://images.unsplash.com/photo-1558435186-d31d126391fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Phoenix metropolitan area and surrounding communities",
        attractions: 456
      },
      {
        name: "Coconino County",
        image: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Grand Canyon and Flagstaff region",
        attractions: 189
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={stateData.image}
            alt={stateData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">{stateData.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{stateData.description}</p>
          
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <span>Capital: {stateData.capital}</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5" />
              <span>Population: {stateData.population}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              <span>Climate: {stateData.climate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Regions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateData.regions.map((region) => (
            <Link
              key={region.name}
              to={`/cities/${region.name.toLowerCase().replace(' ', '-')}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-48">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {region.name}
                </h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="h-4 w-4" />
                  <span>{region.attractions} attractions</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}