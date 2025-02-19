import { Filter, Heart } from 'lucide-react';
import { useState } from 'react';
import EventCard from './EventCard';

function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: "Elite Matrimonial Meetup",
      description: "An exclusive gathering for professionals seeking life partners. Meet qualified individuals in a sophisticated environment.",
      date: "March 25, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Pearl Continental, Islamabad",
      category: "Meetup",
      attendees: 50,
      price: "Rs. 5,000",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Parents Matchmaking Workshop",
      description: "Learn effective approaches to finding the right match for your children. Expert guidance on modern matchmaking.",
      date: "March 30, 2024",
      time: "11:00 AM - 2:00 PM",
      location: "Marriott Hotel, Karachi",
      category: "Workshop",
      attendees: 35,
      price: "Rs. 3,000",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Speed Matchmaking Event",
      description: "Meet multiple potential partners in one evening. Structured, efficient, and fun way to find your perfect match.",
      date: "April 5, 2024",
      time: "4:00 PM - 8:00 PM",
      location: "Royal Palm, Lahore",
      category: "Meetup",
      attendees: 60,
      price: "Rs. 4,000",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Personality Development Seminar",
      description: "Enhance your personality and learn effective communication skills for better matrimonial prospects.",
      date: "April 10, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Movenpick Hotel, Karachi",
      category: "Seminar",
      attendees: 45,
      price: "Free",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ['All', 'Meetup', 'Workshop', 'Seminar'];
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 inline-block text-transparent bg-clip-text mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our exclusive matrimonial events and workshops to find your perfect life partner
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-gray-700">
              <Filter className="w-4 h-4" />
              <span>Filter by:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                    : 'bg-white text-gray-700 hover:bg-pink-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Never Miss an Event
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and stay updated about upcoming matrimonial events
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;