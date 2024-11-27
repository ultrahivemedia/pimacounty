import React from 'react';
import { Star, MapPin } from 'lucide-react';

const places = [
  {
    id: 1,
    name: 'Saguaro National Park',
    image: 'https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    location: 'Tucson',
    category: 'Nature',
  },
  {
    id: 2,
    name: 'Arizona-Sonora Desert Museum',
    image: 'https://images.unsplash.com/photo-1569731813734-45f79563d8e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    location: 'Tucson',
    category: 'Museum',
  },
  {
    id: 3,
    name: 'Mission San Xavier del Bac',
    image: 'https://images.unsplash.com/photo-1600288663985-8f0059bb4d56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    location: 'Tucson',
    category: 'Historical',
  },
];

// Rest of the component remains the same