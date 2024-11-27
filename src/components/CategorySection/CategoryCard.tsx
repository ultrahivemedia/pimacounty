import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from './types';

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
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
  );
}