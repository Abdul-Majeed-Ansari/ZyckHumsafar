import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const FeaturedProfiles = () => {
  const featuredProfiles = [
    {
      name: "Sarah",
      age: 26,
      image: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Karachi",
      education: "Masters in Business",
      profession: "Marketing Manager",
      maritalStatus: "Never Married",
    },
    {
      name: "Ahmed",
      age: 29,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Lahore",
      education: "Software Engineer",
      profession: "Tech Lead",
      maritalStatus: "Never Married",
    },
    {
      name: "Fatima",
      age: 24,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Islamabad",
      education: "MBBS",
      profession: "Doctor",
      maritalStatus: "Never Married",
    },
    {
      name: "Hassan",
      age: 31,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Rawalpindi",
      education: "MBA",
      profession: "Business Analyst",
      maritalStatus: "Divorced",
    },
    {
      name: "Zara",
      age: 28,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Peshawar",
      education: "Bachelors in Arts",
      profession: "Teacher",
      maritalStatus: "Widowed",
    },
    {
      name: "Usman",
      age: 27,
      image: "https://images.unsplash.com/photo-1541101767792-f9b2b1b58507?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      city: "Quetta",
      education: "Computer Science",
      profession: "Software Engineer",
      maritalStatus: "Never Married",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // lg screens
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // md screens
      } else {
        setCardsPerView(1); // sm screens
      }
    };

    // Initial setup
    updateCardsPerView();

    // Add resize listener
    window.addEventListener("resize", updateCardsPerView);

    // Clean up
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Ensure currentIndex stays valid when screen size changes
  useEffect(() => {
    const maxIndex = Math.max(0, featuredProfiles.length - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex]);

  const handleNext = () => {
    const maxIndex = featuredProfiles.length - cardsPerView;
    setCurrentIndex(prev => Math.min(prev + cardsPerView, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - cardsPerView, 0));
  };

  const visibleProfiles = featuredProfiles.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <div className="relative w-full px-4 overflow-hidden">
      <div className="py-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(0)`,
              gap: '1rem',
            }}
          >
            {visibleProfiles.map((profile, index) => (
              <div
                key={`${profile.name}-${index}`}
                className={`flex-shrink-0 w-full ${
                  cardsPerView === 4 ? 'lg:w-1/4' : 
                  cardsPerView === 2 ? 'md:w-1/2' : 'w-full'
                }`}
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-2">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {profile.name}, {profile.age}
                    </h3>
                    <p className="text-gray-600">{profile.city}</p>
                    <p className="text-gray-600 text-sm">
                      <strong>Education:</strong> {profile.education}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Profession:</strong> {profile.profession}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Marital Status:</strong> {profile.maritalStatus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-700"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + cardsPerView >= featuredProfiles.length}
          className={`bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 ${
            currentIndex + cardsPerView >= featuredProfiles.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-pink-700"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProfiles;