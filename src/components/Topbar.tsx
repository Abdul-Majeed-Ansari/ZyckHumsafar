import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="">
      {/* Top Bar */}
      <div className="bg-pink-400 text-white">
        {/* Upper Top Bar */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:h-10 text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
              <a href="tel:+923111444259" className="flex items-center hover:text-gray-200">
                <Phone size={14} className="mr-1" />
                <span className="text-xs sm:text-sm">0312-3456759</span>
              </a>
              <a href="mailto:info@shaadee.pk" className="flex items-center hover:text-gray-200">
                <Mail size={14} className="mr-1" />
                <span className="text-xs sm:text-sm">info@shaadee.pk</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
