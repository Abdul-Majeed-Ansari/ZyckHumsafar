import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:outline-none focus:border-pink-500 transition duration-200 p-3"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:outline-none focus:border-pink-500 transition duration-200 p-3"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:outline-none focus:border-pink-500 transition duration-200 p-3"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:outline-none focus:border-pink-500 transition duration-200 p-3"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-gray-700">
              <h3 className="text-lg font-bold text-pink-600">Address</h3>
              <p>123 Shaade Lane, Lahore, Pakistan</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-lg font-bold text-pink-600">Phone</h3>
              <p>+92 123 456 7890</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-lg font-bold text-pink-600">Email</h3>
              <p>contact@shaade.pk</p>
            </div>
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456!2d74.000000!3d31.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAwJzAwLjAiTiA3NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="200"
                allowFullScreen={false}
                loading="lazy"
                className="rounded-md shadow-md border border-gray-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
