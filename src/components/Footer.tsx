import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Premium Plans", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Blog", href: "#" }
  ];

  const services = [
    { label: "Find Match", href: "#" },
    { label: "Wedding Planning", href: "#" },
    { label: "Relationship Advice", href: "#" },
    { label: "Events & Meetups", href: "#" },
    { label: "Gift Registry", href: "#" }
  ];

  // const legal = [
  //   { label: "Privacy Policy", href: "#" },
  //   { label: "Terms of Service", href: "#" },
  //   { label: "Cookie Policy", href: "#" },
  //   { label: "Safety Tips", href: "#" },
  //   { label: "Disclaimer", href: "#" }
  // ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Youtube, href: "#", label: "Youtube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white">
      {/* Newsletter Section */}
      <div className="bg-pink-600">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Find Your Perfect Match Today
                </h3>
                <p className="text-gray-600 mb-8">
                  Join thousands of happy couples who found their soulmate through ZyckHumSafar
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full border-2 border-pink-100 focus:border-pink-500 focus:outline-none"
                  />
                  <button className="px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-5 md:px-8 lg:px-10  pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ZyckHumSafar</h2>
            <p className="text-gray-600 mb-8">
              Your journey to finding true love starts here. We're committed to helping you write your own beautiful love story.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-pink-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-pink-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          {/* <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              {legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-pink-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-600" />
                <span className="text-gray-600">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-600" />
                <a href="mailto:contact@zyckhamsafar.com" className="text-gray-600 hover:text-pink-600">
                  info@safar.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-gray-600">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 px-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} ZyckHumSafar. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              Made with <Heart className="w-4 h-4 text-pink-600 mx-1" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}