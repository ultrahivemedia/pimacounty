import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Desert Wonders: Exploring Saguaro National Park",
    description: "Discover the majestic beauty of the Sonoran Desert's iconic symbol. Journey through ancient forests of towering saguaros and witness breathtaking desert sunsets.",
    image: "https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    slug: "saguaro-national-park"
  },
  {
    id: 2,
    title: "Culinary Adventures: Tucson's UNESCO City of Gastronomy",
    description: "Dive into Tucson's rich culinary heritage, from traditional Mexican flavors to innovative desert-inspired cuisine. Experience why UNESCO recognized this vibrant food scene.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "tucson-gastronomy"
  },
  {
    id: 3,
    title: "Hidden Gems: Off-the-Beaten-Path in Pima County",
    description: "Explore lesser-known treasures of Pima County, from secret hiking trails to charming local markets. Discover authentic experiences away from the tourist crowds.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "hidden-gems"
  },
  {
    id: 4,
    title: "Luxury & Comfort: Top Resorts in Pima County",
    description: "Indulge in world-class amenities at Pima County's finest resorts. From spa retreats to golf paradises, find your perfect desert oasis.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "luxury-resorts"
  }
];

export default function TravelInspiration() {
  const [featuredArticle, ...sideArticles] = articles;

  return (
    <section className="py-16 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-900 mb-4">
            Latest News & Travel
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, travel tips, and local insights about Pima County.
            Let our expert guides help you discover the best of what our region has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8">
          {/* Featured Article */}
          <Link
            to={`/blog/${featuredArticle.slug}`}
            className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-teal-400 to-teal-600"
          >
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {featuredArticle.title}
              </h3>
              <p className="text-white/90 mb-6 line-clamp-2">
                {featuredArticle.description}
              </p>
              <button className="inline-flex items-center gap-2 text-white font-medium bg-teal-500/30 px-4 py-2 rounded-md hover:bg-teal-500/40 transition-colors">
                READ MORE <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Link>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="flex gap-6 group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-40 h-28 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <span className="text-teal-600 font-medium text-sm">
                    READ MORE
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}