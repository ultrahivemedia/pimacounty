import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: 'why-visit-france',
    title: "Why You Should Visit France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "ROAD TRIPS, TIPS & TRICKS",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
    author: "Kevin",
    comments: 0
  },
  {
    id: 2,
    slug: 'magic-of-souvenirs',
    title: "The Magic of Letting a Souvenir Find You",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "BEACHES, TAKE A BREAK",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
    author: "Kevin",
    comments: 0
  }
];

export default function Blog() {
  return (
    <div>
      <div className="relative h-[40vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Blog Header"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl text-white/90">Let our experts inspire you</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}