import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Pima County exceeded all our expectations. The natural beauty of the Sonoran Desert combined with the rich cultural heritage made for an unforgettable experience.",
    author: "Sarah Johnson",
    role: "Travel Blogger",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    text: "From the stunning mountain views to the vibrant food scene, every moment in Pima County was picture-perfect. Can't wait to return!",
    author: "Michael Chen",
    role: "Photographer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    text: "The perfect blend of outdoor adventures and urban experiences. Pima County has something for everyone.",
    author: "Emma Davis",
    role: "Adventure Guide",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export default function TravellerReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Loved by Travellers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <h3 className="font-semibold text-gray-900">{review.author}</h3>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}