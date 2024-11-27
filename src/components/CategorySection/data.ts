import { CategoryItem } from './types';

// Reorder categories to match the desired sequence
export const categories: CategoryItem[] = [
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