import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
          Pima County
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl">
          Explore the Heart of the Sonoran Desert
        </p>
        
        <div className="w-full max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for places, cities, or experiences..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}