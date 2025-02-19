import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4">
          <div className="h-full flex flex-col justify-center items-center text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Match
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
              Begin your journey to forever with Pakistan's most trusted matrimonial service
            </p>
          </div>
        </div>

        {/* Search Form */}
        <div className="absolute bottom-0 w-full bg-pink-500 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between">
              {/* Marital Status */}
              <div className="w-full sm:w-[48%] md:w-[22%]">
                <div className="relative">
                  <select className="w-full pl-3 pr-10 py-3 bg-white rounded-lg shadow-sm appearance-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-gray-700">
                    <option>Marital Status</option>
                    <option>Never Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Gender */}
              <div className="w-full sm:w-[48%] md:w-[22%]">
                <div className="relative">
                  <select className="w-full pl-3 pr-10 py-3 bg-white rounded-lg shadow-sm appearance-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-gray-700">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Age From */}
              <div className="w-full sm:w-[48%] md:w-[22%]">
                <div className="relative">
                  <select className="w-full pl-3 pr-10 py-3 bg-white rounded-lg shadow-sm appearance-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-gray-700">
                    <option>Age from</option>
                    {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                      <option key={age}>{age}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Age To */}
              <div className="w-full sm:w-[48%] md:w-[22%]">
                <div className="relative">
                  <select className="w-full pl-3 pr-10 py-3 bg-white rounded-lg shadow-sm appearance-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-gray-700">
                    <option>Age to</option>
                    {Array.from({ length: 43 }, (_, i) => i + 18).map((age) => (
                      <option key={age}>{age}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full sm:w-[48%] md:w-[22%] flex justify-center">
                <button className="w-full md:w-auto bg-white text-pink-700 font-semibold py-3 px-12 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
          <button className="w-2 h-2 rounded-full bg-pink-700"></button>
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
          <button className="w-2 h-2 rounded-full bg-white/50"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
