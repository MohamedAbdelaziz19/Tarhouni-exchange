import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons

const ContactInfo = () => {
  return (
    <div id="contact-info" className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-500">Contact Info</h2>
        <p className="text-lg text-gray-600">
          Reach out to us for any questions or assistance. We are here to help you!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-6 mt-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <Mail className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Email</h3>
            <p className="text-gray-600 mt-2">tarhouni.exchange@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <Phone className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Phone</h3>
            <p className="text-gray-600 mt-2">+216 29450786</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <MapPin className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Address</h3>
            <p className="text-gray-600 mt-2">Rue Ennasr, Teboulba, Monastir 5080</p>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mx-auto">🕒</div>
            <h3 className="text-xl font-semibold text-yellow-500 mt-4">Opening Hours</h3>
            <p className="text-gray-600 mt-2">08:30 - 20:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
