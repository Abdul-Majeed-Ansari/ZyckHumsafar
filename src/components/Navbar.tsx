import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useUser, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-pink-400">
            Shaadee.pk
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
              About Us
            </Link>
            <Link to="/packages" className="text-gray-600 hover:text-pink-500 transition-colors">
              Packages
            </Link>
            <Link to="/featuredprofiles" className="text-gray-600 hover:text-pink-500 transition-colors">
              Featured Profiles
            </Link>
            <Link to="/rishtaconsultants" className="text-gray-600 hover:text-pink-500 transition-colors">
              Rishta Consultants
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-pink-500 transition-colors">
              Events
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
              Contact
            </Link>

            {/* Show User Icon if Logged In, Otherwise Show Register Button */}
            {isSignedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative flex items-center space-x-2 focus:outline-none"
                >
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt="User"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  ) : (
                    <User size={32} className="text-gray-600" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-20">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <SignOutButton>
                      <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        Logout
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/register"
                className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition-colors cursor-pointer"
              >
                Register Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
          lg:hidden 
          absolute 
          top-full 
          left-0 
          right-0 
          bg-white 
          shadow-lg 
          transition-all 
          duration-300 
          ease-in-out
          z-10
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-pink-500 transition-colors">
              About Us
            </Link>
            <Link to="/packages" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Packages
            </Link>
            <Link to="/featuredprofiles" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Featured Profiles
            </Link>
            <Link to="/rishtaconsultants" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Rishta Consultants
            </Link>
            <Link to="/events" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Events
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-pink-500 transition-colors">
              Contact
            </Link>

            {/* Show User Icon in Mobile Menu */}
            {isSignedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 w-full"
                >
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt="User"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  ) : (
                    <User size={32} className="text-gray-600" />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-20">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <SignOutButton>
                      <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        Logout
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/register"
                className="w-full block bg-pink-400 text-white px-6 py-2 rounded-md text-center hover:bg-pink-500 transition-colors"
              >
                Register Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
