import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-800">
          <FaEnvelopeOpenText className="text-blue-500" />
          Email me for jobs
        </h3>
        <p className="text-gray-600 text-base mb-4">
          Stay updated with the latest job opportunities in the tech industry by subscribing to our newsletter!
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold "
          />
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-800">
          <FaRocket className="text-blue-500" />
          Get noticed faster
        </h3>
        <p className="text-gray-600 text-base mb-4">
          Upload your resume to get matched with the best job opportunities tailored to your skills and experience!
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold "
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
