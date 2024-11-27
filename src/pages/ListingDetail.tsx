import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Clock, Phone, Globe, Share2, Heart, Mail } from 'lucide-react';

export default function ListingDetail() {
  const { id } = useParams();

  // Mock data - in a real app, fetch based on id
  const listing = {
    id: 1,
    name: "Sabino Canyon Recreation Area",
    type: "Nature",
    description: "Experience the natural beauty of the Sonoran Desert at Sabino Canyon Recreation Area. This stunning natural area offers visitors the chance to explore scenic hiking trails, observe diverse wildlife, and enjoy spectacular mountain views.",
    images: [
      "https://images.unsplash.com/photo-1635361803853-8386f5f9a68d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviews: 325,
    price: "$$",
    location: "Tucson, Arizona",
    hours: "8:00 AM - 5:00 PM",
    phone: "(520) 749-8700",
    website: "www.sabinocanyon.com",
    amenities: ["Parking", "Restrooms", "Visitor Center", "Guided Tours", "Gift Shop"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 h-[60vh]">
        {listing.images.map((image, index) => (
          <div key={index} className="relative h-full">
            <img
              src={image}
              alt={`${listing.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{listing.name}</h1>
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-blue-600">{listing.type}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{listing.rating}</span>
                  <span className="text-gray-500">({listing.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {listing.location}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{listing.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div>{listing.hours}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div>{listing.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Website</div>
                    <div>{listing.website}</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>

                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="h-5 w-5" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}