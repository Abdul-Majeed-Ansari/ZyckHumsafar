import { Heart, Users, Search, BellRing as Ring, Clock, Shield } from 'lucide-react';
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import TeamMember from "./TeamMember";
import heroImg from '/abouthero.png'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImg})`, // Correctly referencing the public folder image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"> {/* Adjust bg-opacity */}

          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl">
                Bringing hearts together since 2024. We're dedicated to helping you find your perfect life partner through a secure and trusted platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that finding the right life partner is one of life's most important journeys. Our mission is to make this journey easier, safer, and more meaningful for Pakistani families worldwide. We combine traditional values with modern technology to create meaningful connections.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-10 h-10 text-rose-500" />}
              title="Verified Profiles"
              description="Every profile is manually verified to ensure authenticity and security for our members."
            />
            <FeatureCard
              icon={<Search className="w-10 h-10 text-rose-500" />}
              title="Smart Matching"
              description="Our advanced algorithm suggests matches based on compatibility and preferences."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-rose-500" />}
              title="Privacy First"
              description="Your privacy is our top priority. We ensure your personal information stays secure."
            />
            <FeatureCard
              icon={<Ring className="w-10 h-10 text-rose-500" />}
              title="Success Stories"
              description="Thousands of successful marriages through our platform speak to our commitment."
            />
            <FeatureCard
              icon={<Heart className="w-10 h-10 text-rose-500" />}
              title="Personal Support"
              description="Our dedicated team provides personalized assistance throughout your journey."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-rose-500" />}
              title="24/7 Service"
              description="Round-the-clock support to help you find your perfect match any time."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-rose-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatCard number="1M+" label="Active Users" />
            <StatCard number="100K+" label="Successful Matches" />
            <StatCard number="15+" label="Years of Service" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team working tirelessly to help you find your perfect match.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            name="Ahmed Khan"
            role="CEO & Founder"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            name="Sarah Ahmed"
            role="Head of Operations"
          />
          <TeamMember
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            name="Usman Ali"
            role="Technical Director"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
