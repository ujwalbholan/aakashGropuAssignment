import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 text-gray-700 w-full md:w-[500px]">
      <h3 className="text-2xl font-bold text-blue-800">Let’s Connect</h3>

      <p>
        We are here to assist you with any queries or support you may need.
        Feel free to reach out to us through the following contact details.
      </p>

      <div className="flex items-start space-x-4">
        <FaMapMarkerAlt className="text-blue-600 mt-1" />
        <p>
          AakashLabs, Kathmandu Office <br />
          Lalitpur, Nepal
        </p>
      </div>

      <div className="flex items-start space-x-4">
        <FaPhoneAlt className="text-blue-600 mt-1" />
        <p>+977-9800000000</p>
      </div>

      <div className="flex items-start space-x-4">
        <FaEnvelope className="text-blue-600 mt-1" />
        <p>info@aakashlabs.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
