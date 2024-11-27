import React from 'react';
import { Link } from 'react-router-dom';
import { CityItem } from './types';

interface CityCardProps {
  city: CityItem;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Link
      to={`/cities/${city.slug}`}
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
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {city.name}
          </h3>
          <p className="text-sm text-white/90 mb-2">
            {city.description}
          </p>
          <p className="text-sm text-white/90">
            {city.places.toLocaleString()} places
          </p>
        </div>
      </div>
    </Link>
  );
}